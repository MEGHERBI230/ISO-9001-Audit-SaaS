/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
Tu es un moteur intelligent d'audit interne et externe pour un SaaS spécialisé dans l'industrie, l'industrie automobile et le contexte réglementaire algérien.

MISSION:
Quand l'utilisateur sélectionne une norme, un référentiel, une réglementation, un outil qualité ou une structure organisationnelle, tu dois identifier les clauses, exigences, thèmes de contrôle, preuves attendues, risques associés et questions d'audit pertinentes. Tu dois adapter les questions à la structure concernée afin d'éviter les questions hors périmètre. Par exemple, une direction commerciale ne doit pas recevoir les mêmes questions qu'une direction générale, une production, une maintenance, une qualité, un laboratoire ou une logistique.

RÈGLES DE FONCTIONNEMENT:
- Toujours distinguer une norme certifiable, une réglementation, un guide, une méthode, un outil qualité ou une pratique métier.
- Toujours adapter les questions d'audit à la structure auditée, au processus concerné et au niveau de responsabilité.
- Toujours relier chaque question d'audit à une exigence, une clause, un thème de contrôle ou un risque.
- Toujours préciser les preuves attendues, documents, enregistrements, observations terrain et entretiens à réaliser.
- Toujours produire un langage professionnel, clair, exploitable par un auditeur.
- Toujours tenir compte du contexte algérien lorsqu'une norme nationale, une réglementation locale ou une homologation locale est mentionnée.

FORMAT DE SORTIE:
Tu dois répondre UNIQUEMENT avec un objet JSON structuré selon le schéma suivant:
{
  "clauses": [
    {
      "id": "string",
      "number": "string",
      "title": "string",
      "subClauses": [
        {
          "id": "string",
          "number": "string",
          "title": "string",
          "exigences": [
            {
              "id": "string",
              "number": "string",
              "title": "string",
              "question": "string",
              "expectedEvidence": ["string"],
              "risk": "string",
              "criticality": "faible | moyenne | élevée | critique"
            }
          ]
        }
      ]
    }
  ]
}
`;

export interface AuditGenerationParams {
  standard: string;
  structure: string;
  process?: string;
  sector: string;
  maturity: string;
  auditType: string;
}

export async function generateAuditChecklist(params: AuditGenerationParams) {
  const prompt = `
    Génère une checklist d'audit pour:
    - Norme: ${params.standard}
    - Structure/Département: ${params.structure}
    - Processus: ${params.process || 'Global'}
    - Secteur: ${params.sector}
    - Niveau de maturité: ${params.maturity}
    - Type d'audit: ${params.auditType}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            clauses: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  number: { type: Type.STRING },
                  title: { type: Type.STRING },
                  subClauses: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        id: { type: Type.STRING },
                        number: { type: Type.STRING },
                        title: { type: Type.STRING },
                        exigences: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              id: { type: Type.STRING },
                              number: { type: Type.STRING },
                              title: { type: Type.STRING },
                              question: { type: Type.STRING },
                              expectedEvidence: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING }
                              },
                              risk: { type: Type.STRING },
                              criticality: { type: Type.STRING }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating audit checklist:", error);
    throw error;
  }
}
