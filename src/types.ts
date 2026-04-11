/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AuditStatus = 'planned' | 'in-progress' | 'completed' | 'closed';

export type FindingStatus = 'C' | 'OA' | 'OBS' | 'NCm' | 'NCM' | 'NA';

export interface Audit {
  id: string;
  tenantId: string;
  name: string;
  description?: string;
  scope: string;
  standard: string;
  startDate: string;
  endDate: string;
  status: AuditStatus;
  leadAuditorId: string;
  auditorIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Clause {
  id: string;
  number: string;
  title: string;
  description?: string;
  subClauses: SubClause[];
}

export interface SubClause {
  id: string;
  number: string;
  title: string;
  exigences: Exigence[];
}

export interface Exigence {
  id: string;
  number: string;
  title: string;
  question: string;
  expectedEvidence: string[];
  risk?: string;
  criticality?: string;
}

export interface AuditFinding {
  id: string;
  auditId: string;
  exigenceId: string;
  status: FindingStatus;
  constat: string;
  interviewees: string[];
  sampling: string;
  docReferences: string[];
  riskLevel: 'low' | 'medium' | 'high';
  conclusion: string;
  auditorId: string;
  updatedAt: string;
  evidenceIds: string[];
}

export interface Evidence {
  id: string;
  auditId: string;
  name: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
  uploadedBy: string;
  uploadedAt: string;
  metadata?: Record<string, any>;
}

export interface NonConformity {
  id: string;
  auditId: string;
  findingId: string;
  type: 'NCm' | 'NCM';
  description: string;
  causeAnalysis?: string;
  correction?: string;
  correctiveAction?: string;
  responsibleId: string;
  dueDate: string;
  status: 'open' | 'in-progress' | 'verified' | 'closed';
  effectivenessVerified: boolean;
}
