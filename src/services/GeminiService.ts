/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
Tu es un moteur intelligent d'audit interne et externe pour un SaaS spécialisé dans l'industrie, l'industrie automobile et le contexte réglementaire algérien.

MISSION:
Générer une checklist d'audit ultra-précise et adaptée au contexte.
Tu dois identifier les clauses, exigences, thèmes de contrôle, preuves attendues, risques associés et questions d'audit pertinentes. 

RÈGLES CRITIQUES:
1. ADAPTATION: Adapte les questions à la structure auditée (ex: Production vs RH).
2. PRÉCISION: Chaque question doit être claire et orientée "preuve objective".
3. STRUCTURE: Respecte scrupuleusement le format JSON demandé.
4. QUANTITÉ: Génère au moins 3 à 5 clauses majeures, avec des sous-clauses et au moins 2 exigences par sous-clause.
5. LANGUE: Réponds toujours en Français.

FORMAT DE SORTIE (JSON STRICT):
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
  customPrompt?: string;
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
    
    ${params.customPrompt ? `DEMANDE SPÉCIFIQUE DE L'UTILISATEUR: ${params.customPrompt}` : ''}
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

export async function generateStockAuditChecklist(auditData: any) {
  const systemPrompt = `
Tu es un expert senior en audit interne industriel, contrôle de gestion et gestion des stocks multi-sites.
Ta mission est de réaliser un audit complet et structuré des stocks d’une entreprise industrielle, avec un niveau de rigueur équivalent à un cabinet d’audit international.

## OBJECTIF
Produire un audit professionnel permettant de :
- Vérifier la fiabilité des stocks
- Détecter les anomalies, erreurs et fraudes potentielles
- Contrôler la cohérence entre flux physiques et flux comptables
- Évaluer la qualité du système de gestion des stocks

---

## PÉRIMÈTRE DE L’AUDIT STOCK
Tu dois couvrir obligatoirement les catégories suivantes :
1. Matières premières (MP)
2. Produits en cours de fabrication (WIP / encours)
3. Produits finis
4. Déchets / rebuts / pertes
5. Produits non conformes

---

## DOCUMENTS À DEMANDER OBLIGATOIREMENT
Liste complète et structurée (Comptabilité, Production, Logistique, Qualité, Achats).

---

## TESTS ET RATIOS OBLIGATOIRES
Calcule et analyse les indicateurs (Rotation, Couverture, Écart théorique/physique, Taux de rebut, Rendement matière, Cohérence prod/conso, Stock dormant).

---

## TESTS DE FRAUDE OBLIGATOIRES
Vérifier existence physique, identifier stocks fictifs, incohérences, encours anormaux, doublons, anomalies de valorisation.

---

## ANALYSE TERRAIN (IMPORTANT)
Méthodologie terrain (Comptage surprise, échantillonnage, traçabilité, zones à risque).

---

## FORMAT DE SORTIE (JSON)
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

  const prompt = `
    Génère une checklist d'audit expert des stocks pour:
    - Entreprise: ${auditData.companyName}
    - Structure: ${auditData.structure}
    
    Assure-toi d'inclure toutes les sections demandées: Matières premières, En-cours, Produits finis, Déchets/Rebuts, Produits non conformes.
    Inclus également les tests de fraude et les analyses terrain.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
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
    console.error("Error generating stock audit checklist:", error);
    throw error;
  }
}
export async function generateExpertStockAudit(auditData: any) {
  const systemPrompt = `
Tu es un expert senior en audit interne industriel, contrôle de gestion et gestion des stocks multi-sites.
Ta mission est de réaliser un audit complet et structuré des stocks d’une entreprise industrielle, avec un niveau de rigueur équivalent à un cabinet d’audit international.

## OBJECTIF
Produire un audit professionnel permettant de :
- Vérifier la fiabilité des stocks
- Détecter les anomalies, erreurs et fraudes potentielles
- Contrôler la cohérence entre flux physiques et flux comptables
- Évaluer la qualité du système de gestion des stocks

---

## PÉRIMÈTRE DE L’AUDIT STOCK
Tu dois couvrir obligatoirement les catégories suivantes :
1. Matières premières (MP)
2. Produits en cours de fabrication (WIP / encours)
3. Produits finis
4. Déchets / rebuts / pertes
5. Produits non conformes

---

## DOCUMENTS À DEMANDER OBLIGATOIREMENT
Liste complète et structurée (Comptabilité, Production, Logistique, Qualité, Achats).

---

## TESTS ET RATIOS OBLIGATOIRES
Calcule et analyse les indicateurs (Rotation, Couverture, Écart théorique/physique, Taux de rebut, Rendement matière, Cohérence prod/conso, Stock dormant).

---

## TESTS DE FRAUDE OBLIGATOIRES
Vérifier existence physique, identifier stocks fictifs, incohérences, encours anormaux, doublons, anomalies de valorisation.

---

## ANALYSE TERRAIN (IMPORTANT)
Méthodologie terrain (Comptage surprise, échantillonnage, traçabilité, zones à risque).

---

## LIVRABLE FINAL
Produire un rapport structuré contenant :
1. Synthèse exécutive
2. Cartographie des risques
3. Analyse détaillée par type de stock
4. Écarts détectés
5. Signaux de fraude (si existants)
6. Recommandations

## TON
Professionnel, direct, orienté audit industriel réel, sans théorie inutile.

RÉPONDS UNIQUEMENT EN FORMAT JSON avec la structure suivante:
{
  "executiveSummary": "string",
  "riskMapping": "string",
  "detailedAnalysis": "string",
  "detectedGaps": "string",
  "fraudSignals": "string",
  "recommendations": "string"
}
`;

  const prompt = `
    Réalise l'audit expert des stocks pour l'audit suivant:
    - Entreprise: ${auditData.companyName}
    - Structure: ${auditData.structure}
    - Données actuelles de l'audit: ${JSON.stringify(auditData.findings || [])}
    
    Utilise tes connaissances d'expert pour extrapoler et fournir une analyse rigoureuse basée sur ces données et le contexte industriel.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            executiveSummary: { type: Type.STRING },
            riskMapping: { type: Type.STRING },
            detailedAnalysis: { type: Type.STRING },
            detectedGaps: { type: Type.STRING },
            fraudSignals: { type: Type.STRING },
            recommendations: { type: Type.STRING }
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating expert stock audit:", error);
    throw error;
  }
}
