/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  FileText, 
  Download, 
  ChevronRight, 
  ChevronDown, 
  Building2, 
  Calendar, 
  User as UserIcon,
  CheckCircle2,
  AlertTriangle,
  Info,
  Printer,
  ShieldCheck,
  Edit,
  Save,
  X
} from 'lucide-react';
import { db, auth } from '../lib/firebase';
import { collection, query, where, onSnapshot, orderBy, updateDoc } from 'firebase/firestore';
import { STANDARDS } from '../constants';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Textarea } from '@/components/ui/textarea';

interface Audit {
  id: string;
  companyName: string;
  auditorName: string;
  standardId: string;
  date: string;
  status: string;
  type?: string;
  structure: string;
  scope?: string;
  objectives?: string;
  criteria?: string;
  strengths?: string[];
  weaknesses?: string[];
  findings?: any[];
  summary?: {
    score?: number;
    ncCount?: number;
    obsCount?: number;
    oppCount?: number;
    complianceLevel?: string;
    conclusion?: string;
  };
  history?: any[];
}

export default function Reports() {
  const [audits, setAudits] = React.useState<Audit[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState('all');
  const [filterStandard, setFilterStandard] = React.useState('all');
  const [filterType, setFilterType] = React.useState('all');
  const [expandedCompanies, setExpandedCompanies] = React.useState<string[]>([]);
  const [selectedAudit, setSelectedAudit] = React.useState<Audit | null>(null);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editData, setEditData] = React.useState<Partial<Audit>>({});
  const [showExportButtons, setShowExportButtons] = React.useState(false);

  React.useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, 'audits'), 
      where('createdBy', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const auditData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Audit[];
      setAudits(auditData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching audits:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth.currentUser]);

  const filteredAudits = audits.filter(audit => {
    const companyName = audit.companyName || '';
    const auditorName = audit.auditorName || '';
    const matchesSearch = companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auditorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || audit.status === filterStatus;
    const matchesStandard = filterStandard === 'all' || audit.standardId === filterStandard;
    const matchesType = filterType === 'all' || audit.type === filterType;
    return matchesSearch && matchesStatus && matchesStandard && matchesType;
  });

  const auditsByCompany = filteredAudits.reduce((acc, audit) => {
    const company = audit.companyName || 'Entreprise Inconnue';
    if (!acc[company]) {
      acc[company] = [];
    }
    acc[company].push(audit);
    return acc;
  }, {} as Record<string, Audit[]>);

  const toggleCompany = (company: string) => {
    setExpandedCompanies(prev => 
      prev.includes(company) 
        ? prev.filter(c => c !== company) 
        : [...prev, company]
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = async () => {
    if (!auth.currentUser) return;
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer TOUS vos rapports et non-conformités ? Cette action est irréversible.")) return;

    try {
      setLoading(true);
      // Delete audits
      const auditSnap = await getDocs(query(collection(db, 'audits'), where('createdBy', '==', auth.currentUser.uid)));
      const deleteAudits = auditSnap.docs.map(d => deleteDoc(doc(db, 'audits', d.id)));
      
      // Delete NCs
      const ncSnap = await getDocs(query(collection(db, 'non-conformities'), where('createdBy', '==', auth.currentUser.uid)));
      const deleteNCs = ncSnap.docs.map(d => deleteDoc(doc(db, 'non-conformities', d.id)));

      await Promise.all([...deleteAudits, ...deleteNCs]);
      toast.success("Données réinitialisées avec succès");
      setSelectedAudit(null);
    } catch (error) {
      console.error("Error resetting data:", error);
      toast.error("Erreur lors de la réinitialisation");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (selectedAudit) {
      setEditData({
        objectives: selectedAudit.objectives || "",
        scope: selectedAudit.scope || "",
        strengths: selectedAudit.strengths || [],
        weaknesses: selectedAudit.weaknesses || [],
        summary: {
          score: selectedAudit.summary?.score || 0,
          complianceLevel: selectedAudit.summary?.complianceLevel || "",
          conclusion: selectedAudit.summary?.conclusion || "",
          ncCount: selectedAudit.summary?.ncCount || 0,
          obsCount: selectedAudit.summary?.obsCount || 0,
          oppCount: selectedAudit.summary?.oppCount || 0
        }
      });
      // Start with export buttons hidden to show the "Draft" view first as requested
      setShowExportButtons(false);
    }
  }, [selectedAudit]);

  const handleValidate = async () => {
    if (!selectedAudit) return;
    try {
      await updateDoc(doc(db, 'audits', selectedAudit.id), {
        status: 'completed'
      });
      setSelectedAudit({ ...selectedAudit, status: 'completed' });
      setShowExportButtons(true);
      toast.success("Rapport validé ! Vous pouvez maintenant exporter en PDF ou Excel.");
    } catch (error) {
      console.error("Error validating audit:", error);
      toast.error("Erreur lors de la validation");
    }
  };

  const handleSaveEdit = async () => {
    if (!selectedAudit) return;
    try {
      await updateDoc(doc(db, 'audits', selectedAudit.id), editData);
      setSelectedAudit({ ...selectedAudit, ...editData });
      setIsEditing(false);
      toast.success("Modifications enregistrées");
    } catch (error) {
      console.error("Error saving edits:", error);
      toast.error("Erreur lors de l'enregistrement");
    }
  };

  const handleExportExcel = () => {
    if (!selectedAudit) return;
    
    // Simple CSV export as a fallback for Excel
    const findings = selectedAudit.findings || [];
    const headers = ["ID", "Clause", "Gravité", "Description", "Preuves", "Responsable", "Échéance"];
    const rows = findings.map(f => [
      selectedAudit.id.substring(0, 8),
      f.clause || 'N/A',
      f.severity || 'OBS',
      f.description || '',
      f.evidence || '',
      f.responsible || '',
      f.dueDate || ''
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `Rapport_Audit_${selectedAudit.companyName}_${selectedAudit.date}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Export Excel (CSV) généré");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (selectedAudit) {
    const findings = selectedAudit.findings || [];
    const strengths = selectedAudit.strengths || [];
    const weaknesses = selectedAudit.weaknesses || [];
    
    return (
      <div className="space-y-6 animate-in fade-in duration-500 pb-20">
        <div className="flex items-center justify-between print:hidden">
          <Button variant="ghost" onClick={() => setSelectedAudit(null)} className="gap-2">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Retour à la liste
          </Button>
          <div className="flex gap-2">
            {!showExportButtons ? (
              <>
                <Button variant="outline" onClick={() => setIsEditing(!isEditing)} className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50">
                  {isEditing ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  {isEditing ? 'Annuler' : 'Modifier le brouillon'}
                </Button>
                {isEditing ? (
                  <Button onClick={handleSaveEdit} className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-md">
                    <Save className="w-4 h-4" />
                    Enregistrer les modifications
                  </Button>
                ) : (
                  <Button onClick={handleValidate} className="gap-2 bg-green-600 hover:bg-green-700 shadow-md">
                    <CheckCircle2 className="w-4 h-4" />
                    Valider et générer le rapport final
                  </Button>
                )}
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => setShowExportButtons(false)} className="gap-2">
                  <Edit className="w-4 h-4" />
                  Revenir au mode édition
                </Button>
                <Button variant="outline" onClick={handlePrint} className="gap-2 border-primary/20">
                  <Printer className="w-4 h-4" />
                  Imprimer / PDF
                </Button>
                <Button className="gap-2" onClick={handleExportExcel}>
                  <Download className="w-4 h-4" />
                  Exporter Excel
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="bg-card border rounded-xl overflow-hidden shadow-sm print:shadow-none print:border-none max-w-5xl mx-auto">
          {/* Cover Page / Header */}
          <div className="p-12 border-b bg-muted/30 relative">
            {!showExportButtons && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 print:hidden">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-1 font-bold">
                  CONSULTATION BROUILLON HTML
                </Badge>
              </div>
            )}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-32 h-32" />
            </div>
            
            <div className="flex justify-between items-start mb-12">
              <div className="space-y-4">
                <Badge className="px-3 py-1 text-sm font-bold">
                  {(selectedAudit.standardId || 'ISO').toUpperCase()}
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tight">RAPPORT D'AUDIT DE CONFORMITÉ</h1>
                <div className="h-1 w-24 bg-primary rounded-full" />
                <p className="text-muted-foreground text-lg">Système de Management de la Qualité</p>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Référence Rapport</div>
                <div className="text-2xl font-mono font-bold text-primary">
                  {selectedAudit.id ? selectedAudit.id.substring(0, 8).toUpperCase() : 'N/A'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-1">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block">Organisme Audité</Label>
                  <div className="text-xl font-bold flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    {selectedAudit.companyName}
                  </div>
                  <p className="text-sm text-muted-foreground ml-9">{selectedAudit.structure || 'Toute l\'organisation'}</p>
                </div>
                
                <div className="space-y-1">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block">Équipe d'Audit</Label>
                  <div className="text-lg font-semibold flex items-center gap-3">
                    <UserIcon className="w-6 h-6 text-primary" />
                    {selectedAudit.auditorName} (Auditeur Lead)
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block">Période de l'Audit</Label>
                  <div className="text-lg font-semibold flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    {selectedAudit.date}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block">Statut du Rapport</Label>
                  <div className="mt-2">
                    <Badge variant={selectedAudit.status === 'completed' ? 'default' : 'secondary'} className="px-4 py-1">
                      {selectedAudit.status === 'completed' ? 'DÉFINITIF' : 'BROUILLON'}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 1. Context & Scope */}
          <div className="p-12 border-b">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">1</span>
              Contexte et Périmètre
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <Label className="text-xs font-bold text-primary uppercase mb-2">Objectifs de l'audit</Label>
                  {isEditing ? (
                    <Textarea 
                      value={editData.objectives || ''} 
                      onChange={(e) => setEditData({...editData, objectives: e.target.value})}
                      className="text-sm min-h-[100px]"
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedAudit.objectives || "Évaluer la conformité du système de management par rapport aux exigences du référentiel, vérifier l'efficacité des processus et identifier les opportunités d'amélioration continue."}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="text-xs font-bold text-primary uppercase mb-2">Critères d'audit</Label>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Norme {(selectedAudit.standardId || 'ISO').toUpperCase()}, Manuel Qualité interne, procédures opérationnelles et exigences réglementaires applicables.
                  </p>
                </div>
              </div>
              <div>
                <Label className="text-xs font-bold text-primary uppercase mb-2">Périmètre d'application</Label>
                <div className="p-4 bg-muted/30 rounded-lg border border-dashed">
                  {isEditing ? (
                    <Textarea 
                      value={editData.scope || ''} 
                      onChange={(e) => setEditData({...editData, scope: e.target.value})}
                      className="text-sm min-h-[100px] bg-transparent border-none focus-visible:ring-0 p-0 italic"
                    />
                  ) : (
                    <p className="text-sm italic">
                      {selectedAudit.scope || "L'ensemble des activités liées à la conception, la production et la commercialisation des produits/services au sein du site audité."}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Executive Summary */}
          <div className="p-12 border-b bg-primary/[0.02]">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">2</span>
              Synthèse de la Performance
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="p-6 bg-card border rounded-xl shadow-sm">
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Indice de Maturité</div>
                  <div className="flex items-end gap-2">
                    {isEditing ? (
                      <div className="flex items-center gap-2">
                        <Input 
                          type="number" 
                          value={editData.summary?.score || 0} 
                          onChange={(e) => setEditData({
                            ...editData, 
                            summary: { ...editData.summary, score: parseInt(e.target.value) }
                          })}
                          className="w-20 text-2xl font-black text-primary"
                        />
                        <div className="text-xl font-bold text-muted-foreground">%</div>
                      </div>
                    ) : (
                      <>
                        <div className="text-5xl font-black text-primary">{selectedAudit.summary?.score || 0}</div>
                        <div className="text-xl font-bold text-muted-foreground mb-1">%</div>
                      </>
                    )}
                  </div>
                  <Progress value={isEditing ? editData.summary?.score || 0 : selectedAudit.summary?.score || 0} className="mt-6 h-3" />
                  <p className="text-[10px] text-muted-foreground mt-4 text-center font-medium">
                    Niveau de conformité : <span className="text-primary">{selectedAudit.summary?.complianceLevel || 'Évaluation en cours'}</span>
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-8">
                <div className="grid grid-cols-3 gap-6">
                  <div className="p-4 border rounded-xl bg-destructive/5 border-destructive/20 text-center">
                    <div className="text-3xl font-black text-destructive">{selectedAudit.summary?.ncCount || 0}</div>
                    <div className="text-[10px] uppercase font-bold text-destructive/70 mt-1">Non-Conformités</div>
                  </div>
                  <div className="p-4 border rounded-xl bg-amber-500/5 border-amber-500/20 text-center">
                    <div className="text-3xl font-black text-amber-600">{selectedAudit.summary?.obsCount || 0}</div>
                    <div className="text-[10px] uppercase font-bold text-amber-600/70 mt-1">Observations</div>
                  </div>
                  <div className="p-4 border rounded-xl bg-emerald-500/5 border-emerald-500/20 text-center">
                    <div className="text-3xl font-black text-emerald-600">{selectedAudit.summary?.oppCount || 0}</div>
                    <div className="text-[10px] uppercase font-bold text-emerald-600/70 mt-1">Opportunités</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-xs font-bold text-primary uppercase">Conclusion Globale</Label>
                  {isEditing ? (
                    <Textarea 
                      value={editData.summary?.conclusion || ''} 
                      onChange={(e) => setEditData({
                        ...editData, 
                        summary: { ...editData.summary, conclusion: e.target.value }
                      })}
                      className="text-sm min-h-[80px] italic"
                    />
                  ) : (
                    <div className="p-6 bg-card border rounded-xl text-sm leading-relaxed italic text-muted-foreground">
                      "{selectedAudit.summary?.conclusion || "L'audit a démontré un système de management globalement mature, bien que des points d'attention subsistent sur certains processus clés."}"
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Strengths & Weaknesses */}
          <div className="p-12 border-b">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">3</span>
              Points Forts et Axes d'Amélioration
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                  POINTS FORTS
                </div>
                {isEditing ? (
                  <div className="space-y-2">
                    {(editData.strengths || []).map((s, i) => (
                      <div key={i} className="flex gap-2">
                        <Input 
                          value={s} 
                          onChange={(e) => {
                            const newStrengths = [...(editData.strengths || [])];
                            newStrengths[i] = e.target.value;
                            setEditData({...editData, strengths: newStrengths});
                          }}
                          className="text-sm h-8"
                        />
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => {
                            const newStrengths = (editData.strengths || []).filter((_, idx) => idx !== i);
                            setEditData({...editData, strengths: newStrengths});
                          }}
                          className="h-8 w-8 p-0 text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setEditData({...editData, strengths: [...(editData.strengths || []), ""]})}
                      className="w-full h-8 text-xs border-dashed"
                    >
                      + Ajouter un point fort
                    </Button>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {strengths.length > 0 ? strengths.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        {s}
                      </li>
                    )) : (
                      <li className="text-sm text-muted-foreground italic">Aucun point fort mentionné.</li>
                    )}
                  </ul>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-600 font-bold mb-4">
                  <AlertTriangle className="w-5 h-5" />
                  AXES D'AMÉLIORATION
                </div>
                {isEditing ? (
                  <div className="space-y-2">
                    {(editData.weaknesses || []).map((w, i) => (
                      <div key={i} className="flex gap-2">
                        <Input 
                          value={w} 
                          onChange={(e) => {
                            const newWeaknesses = [...(editData.weaknesses || [])];
                            newWeaknesses[i] = e.target.value;
                            setEditData({...editData, weaknesses: newWeaknesses});
                          }}
                          className="text-sm h-8"
                        />
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => {
                            const newWeaknesses = (editData.weaknesses || []).filter((_, idx) => idx !== i);
                            setEditData({...editData, weaknesses: newWeaknesses});
                          }}
                          className="h-8 w-8 p-0 text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setEditData({...editData, weaknesses: [...(editData.weaknesses || []), ""]})}
                      className="w-full h-8 text-xs border-dashed"
                    >
                      + Ajouter un axe d'amélioration
                    </Button>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {weaknesses.length > 0 ? weaknesses.map((w, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        {w}
                      </li>
                    )) : (
                      <li className="text-sm text-muted-foreground italic">Aucun axe d'amélioration mentionné.</li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* 4. Detailed Findings */}
          <div className="p-12 border-b">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">4</span>
              Détail des Constats d'Audit
            </h2>
            
            {findings.length > 0 ? (
              <div className="space-y-8">
                {findings.map((finding, idx) => (
                  <div key={idx} className="border rounded-xl overflow-hidden shadow-sm break-inside-avoid">
                    <div className={cn(
                      "px-6 py-3 flex items-center justify-between border-b",
                      finding.severity === 'major' ? "bg-destructive/5" : 
                      finding.severity === 'minor' ? "bg-amber-500/5" : "bg-muted/50"
                    )}>
                      <div className="flex items-center gap-4">
                        <Badge variant={finding.severity === 'major' ? 'destructive' : 'outline'} className="font-bold">
                          {(finding.severity || 'OBS').toUpperCase()}
                        </Badge>
                        <span className="font-bold text-sm tracking-tight">Clause : {finding.clause || 'N/A'}</span>
                      </div>
                      <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider">
                        {finding.status || 'OUVERT'}
                      </Badge>
                    </div>
                    <div className="p-8 grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <div>
                          <Label className="text-[10px] uppercase text-primary font-bold tracking-widest mb-2 block">Description du constat</Label>
                          <p className="text-sm leading-relaxed text-foreground">{finding.description}</p>
                        </div>
                        <div>
                          <Label className="text-[10px] uppercase text-primary font-bold tracking-widest mb-2 block">Preuves objectives</Label>
                          <div className="p-3 bg-muted/30 rounded border text-sm italic text-muted-foreground">
                            {finding.evidence || 'Aucune preuve spécifique mentionnée.'}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <Label className="text-[10px] uppercase text-primary font-bold tracking-widest mb-2 block">Responsable Action</Label>
                            <p className="text-sm font-semibold">{finding.responsible || 'À définir'}</p>
                          </div>
                          <div>
                            <Label className="text-[10px] uppercase text-primary font-bold tracking-widest mb-2 block">Délai de traitement</Label>
                            <p className="text-sm font-semibold">{finding.dueDate || 'Immédiat'}</p>
                          </div>
                        </div>
                        <div className="p-4 bg-primary/[0.03] border border-primary/10 rounded-lg">
                          <Label className="text-[10px] uppercase text-primary font-bold tracking-widest mb-2 block">Action Corrective / Préventive</Label>
                          <p className="text-sm mt-1">{finding.correctiveAction || 'En attente du plan d\'action de l\'audité.'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed rounded-2xl bg-muted/10">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6 opacity-30" />
                <h3 className="text-xl font-bold mb-2">Conformité Totale</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  Aucun écart majeur ou mineur n'a été identifié durant ce cycle d'audit sur le périmètre défini.
                </p>
              </div>
            )}
          </div>

          {/* 5. Final Conclusion */}
          <div className="p-12 bg-primary/[0.02]">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">5</span>
              Conclusion de l'Auditeur
            </h2>
            <div className="space-y-6">
              <div className="p-8 bg-card border-2 border-primary/20 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <p className="text-lg leading-relaxed font-medium text-foreground italic">
                  "{selectedAudit.summary?.conclusion || "Sur la base des preuves d'audit recueillies, l'équipe d'audit conclut que le système de management est conforme aux exigences de la norme et est mis en œuvre de manière efficace. Les opportunités d'amélioration identifiées permettront de renforcer la performance globale."}"
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100">
                  <h4 className="text-sm font-bold text-emerald-700 mb-2 uppercase tracking-tight">Recommandation de Certification</h4>
                  <p className="text-xs text-emerald-600">Favorable sous réserve de la levée des non-conformités mineures éventuelles.</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-700 mb-2 uppercase tracking-tight">Prochain Audit Prévu</h4>
                  <p className="text-xs text-blue-600">Audit de surveillance à prévoir dans 12 mois.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer / Signatures */}
          <div className="p-12 bg-muted/30 border-t">
            <div className="grid grid-cols-2 gap-24">
              <div className="space-y-8">
                <div className="h-24 border-b border-dashed border-muted-foreground/30 flex items-end pb-2 italic text-muted-foreground text-sm">
                  Signature de l'Auditeur
                </div>
                <div>
                  <div className="font-bold">{selectedAudit.auditorName}</div>
                  <div className="text-xs text-muted-foreground">Auditeur Qualité Senior</div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="h-24 border-b border-dashed border-muted-foreground/30 flex items-end pb-2 italic text-muted-foreground text-sm">
                  Visa de la Direction / Audité
                </div>
                <div>
                  <div className="font-bold">{selectedAudit.companyName}</div>
                  <div className="text-xs text-muted-foreground">Représentant de l'organisme</div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t text-center text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              ISO AUDIT SAAS - Document Confidentiel - Tous droits réservés
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Rapports d'Audit</h1>
          <p className="text-muted-foreground">Consultez et exportez les rapports détaillés par entreprise.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleReset} className="gap-2 text-destructive hover:text-destructive">
            <AlertTriangle className="w-4 h-4" />
            Réinitialiser
          </Button>
          <Button variant="outline" onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            Imprimer la liste
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher une entreprise..." 
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="completed">Clôturés</SelectItem>
                <SelectItem value="draft">En cours</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStandard} onValueChange={setFilterStandard}>
              <SelectTrigger>
                <SelectValue placeholder="Référentiel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les référentiels</SelectItem>
                {STANDARDS.map(s => (
                  <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder="Type d'audit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="internal">Interne</SelectItem>
                <SelectItem value="external">Externe / Certification</SelectItem>
                <SelectItem value="supplier">Fournisseur</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Input type="date" className="flex-1" />
              <Input type="date" className="flex-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company List */}
      <div className="space-y-4">
        {Object.keys(auditsByCompany).length > 0 ? (
          Object.entries(auditsByCompany).map(([company, companyAudits]) => (
            <Card key={company} className="overflow-hidden">
              <button 
                onClick={() => toggleCompany(company)}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold">{company}</h3>
                    <p className="text-xs text-muted-foreground">{companyAudits.length} audit(s) réalisé(s)</p>
                  </div>
                </div>
                {expandedCompanies.includes(company) ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
              
              {expandedCompanies.includes(company) && (
                <div className="border-t bg-muted/10">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Audit</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Référentiel</TableHead>
                        <TableHead>Auditeur</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {companyAudits.map((audit) => (
                        <TableRow key={audit.id}>
                          <TableCell className="font-mono text-xs">{(audit.id || '').substring(0, 8).toUpperCase()}</TableCell>
                          <TableCell>{audit.date}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{(audit.standardId || 'ISO').toUpperCase()}</Badge>
                          </TableCell>
                          <TableCell>{audit.auditorName}</TableCell>
                          <TableCell>
                            <Badge variant={audit.status === 'completed' ? 'default' : 'secondary'}>
                              {audit.status === 'completed' ? 'Clôturé' : 'En cours'}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                              onClick={() => setSelectedAudit(audit)}
                            >
                              <FileText className="w-4 h-4" />
                              Consulter brouillon en html
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </Card>
          ))
        ) : (
          <div className="text-center py-20 bg-card border rounded-xl">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <h3 className="text-lg font-medium">Aucun rapport trouvé</h3>
            <p className="text-muted-foreground">Modifiez vos filtres ou effectuez un premier audit.</p>
          </div>
        )}
      </div>
    </div>
  );
}
