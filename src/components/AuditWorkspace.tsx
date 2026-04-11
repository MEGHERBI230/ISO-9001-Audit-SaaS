/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  Filter, 
  ChevronRight, 
  ChevronDown, 
  Paperclip, 
  Plus, 
  Check,
  AlertCircle,
  MoreHorizontal,
  Upload,
  FileText,
  User,
  History,
  X,
  Sparkles,
  Loader2,
  PackageSearch,
  BrainCircuit,
  Save,
  Edit,
  Trash2,
  AlertTriangle
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { STANDARDS, RATING_LEGEND } from '@/src/constants';
import { FindingStatus } from '@/src/types';
import { cn } from '@/lib/utils';
import { db, auth } from '../lib/firebase';
import { doc, setDoc, updateDoc, serverTimestamp, collection, onSnapshot, query, writeBatch } from 'firebase/firestore';
import { toast } from 'sonner';
import { generateAuditChecklist, generateStockAuditChecklist } from '../services/GeminiService';

export default function AuditWorkspace({ auditContext, onNavigate }: { auditContext?: any, onNavigate?: (view: string) => void }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedClauses, setExpandedClauses] = React.useState<string[]>([]);
  const [aiPrompt, setAiPrompt] = React.useState('');
  const [selectedExigence, setSelectedExigence] = React.useState<any>(null);
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [findings, setFindings] = React.useState<Record<string, any>>({});
  const [aiStructure, setAiStructure] = React.useState<any[]>([]);
  const [currentFinding, setCurrentFinding] = React.useState({
    rating: 'C',
    riskLevel: 'low',
    description: ''
  });
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const activeStandard = STANDARDS.find(s => s.id === auditContext?.standardId) || STANDARDS[0];
  const structure = aiStructure.length > 0 ? aiStructure : activeStandard.structure;

  const handleGenerateAI = async () => {
    const context = auditContext || {
      companyName: "Entreprise Industrielle",
      structure: "Direction Générale",
      process: "Global",
      sector: "Industrie",
      maturity: "intermédiaire",
      auditType: "interne"
    };
    
    setIsGenerating(true);
    try {
      console.log("Generating AI checklist with context:", context, "and prompt:", aiPrompt);

      const result = await generateAuditChecklist({
        standard: activeStandard.name,
        structure: context.structure,
        process: context.process,
        sector: context.sector,
        maturity: context.maturity,
        auditType: context.auditType,
        customPrompt: aiPrompt
      });
      
      if (result && result.clauses) {
        setAiStructure(result.clauses);
        setExpandedClauses([result.clauses[0].id]);
        toast.success("Checklist générée intelligemment par l'IA");
      } else {
        throw new Error("Format de réponse IA invalide");
      }
    } catch (error) {
      console.error("AI Generation error:", error);
      toast.error("Erreur lors de la génération par l'IA. Veuillez réessayer.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateStockAudit = async () => {
    const context = auditContext || {
      companyName: "Entreprise Industrielle",
      structure: "Direction Logistique / Stocks"
    };
    
    setIsGenerating(true);
    try {
      const result = await generateStockAuditChecklist({
        companyName: context.companyName,
        structure: context.structure
      });
      
      if (result && result.clauses) {
        setAiStructure(result.clauses);
        setExpandedClauses([result.clauses[0].id]);
        toast.success("Audit Expert des Stocks généré avec succès");
      } else {
        throw new Error("Format de réponse IA invalide");
      }
    } catch (error) {
      console.error("Stock Audit Generation error:", error);
      toast.error("Erreur lors de la génération de l'audit des stocks");
    } finally {
      setIsGenerating(false);
    }
  };

  React.useEffect(() => {
    if (structure.length > 0) {
      setExpandedClauses([structure[0].id]);
    }
  }, [activeStandard.id]);

  React.useEffect(() => {
    if (!auditContext?.id || !auth.currentUser) return;

    const q = query(collection(db, 'audits', auditContext.id, 'findings'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const findingsMap: Record<string, any> = {};
      snapshot.forEach((doc) => {
        findingsMap[doc.data().requirementId] = { id: doc.id, ...doc.data() };
      });
      setFindings(findingsMap);
    }, (error) => {
      console.error("Error fetching findings:", error);
    });

    return () => unsubscribe();
  }, [auditContext?.id, auth.currentUser]);

  const handleSaveFinding = async () => {
    if (!auditContext || !selectedExigence) return;

    try {
      const findingId = `${auditContext.id}_${selectedExigence.number.replace(/\./g, '_')}`;
      await setDoc(doc(db, 'audits', auditContext.id, 'findings', findingId), {
        auditId: auditContext.id,
        requirementId: selectedExigence.number,
        clause: selectedExigence.number,
        ...currentFinding,
        updatedAt: serverTimestamp()
      });
      toast.success("Constat enregistré");
    } catch (error) {
      console.error("Error saving finding:", error);
      toast.error("Erreur lors de l'enregistrement");
    }
  };

  const handleValidateAudit = async () => {
    if (!auditContext?.id) return;
    try {
      // Mark as draft so it appears in reports
      await updateDoc(doc(db, 'audits', auditContext.id), {
        status: 'draft',
        updatedAt: serverTimestamp()
      });
      toast.success("Audit validé et prêt pour le rapport");
      if (onNavigate) onNavigate('reports');
    } catch (error) {
      console.error("Error validating audit:", error);
      toast.error("Erreur lors de la validation");
    }
  };

  const toggleClause = (id: string) => {
    setExpandedClauses(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            {auditContext ? `Audit: ${auditContext.companyName}` : "Audit Interne"}
          </h1>
          <p className="text-muted-foreground text-xs">
            {auditContext 
              ? `Norme: ${activeStandard.name} | Structure: ${auditContext.structure} | Auditeur: ${auditContext.auditorName}`
              : "Périmètre: Siège & Production | Référentiel: ISO 9001:2015"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 h-8 text-xs">
            <History className="w-3.5 h-3.5" />
            Historique
          </Button>
          <Button size="sm" className="gap-2 h-8 text-xs" onClick={handleValidateAudit}>
            <Check className="w-3.5 h-3.5" />
            Valider
          </Button>
        </div>
      </div>

      {/* AI Assistant Bar */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-3 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <div className="flex-1">
            <Input 
              placeholder="Demandez à l'IA de générer des questions spécifiques ou d'adapter la checklist..." 
              className="bg-background border-primary/10"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleGenerateAI();
                }
              }}
            />
          </div>
          <Button 
            size="sm" 
            onClick={handleGenerateAI} 
            disabled={isGenerating}
            className="gap-2"
          >
            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <BrainCircuit className="w-4 h-4" />}
            Générer
          </Button>
        </CardContent>
      </Card>

      {/* Filters & Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Rechercher une clause, une exigence ou un mot-clé..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filtres
        </Button>
      </div>

      {/* Audit Grid */}
      <div className="border rounded-lg bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Clause</TableHead>
                <TableHead className="min-w-[300px]">Exigence / Question d'audit</TableHead>
                <TableHead className="w-[150px]">Statut</TableHead>
                <TableHead className="w-[150px]">Preuves</TableHead>
                <TableHead className="w-[100px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {structure.map((clause) => (
              <React.Fragment key={clause.id}>
                <TableRow 
                  className="bg-muted/30 cursor-pointer hover:bg-muted/50"
                  onClick={() => toggleClause(clause.id)}
                >
                  <TableCell className="font-bold">{clause.number}</TableCell>
                  <TableCell className="font-bold flex items-center gap-2">
                    {expandedClauses.includes(clause.id) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    {clause.title}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                
                {expandedClauses.includes(clause.id) && clause.subClauses.map((sub) => (
                  <React.Fragment key={sub.id}>
                    <TableRow className="bg-muted/10">
                      <TableCell className="pl-8 text-sm font-medium">{sub.number}</TableCell>
                      <TableCell className="text-sm font-medium italic">{sub.title}</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                    
                      {sub.exigences.map((ex) => {
                        const finding = findings[ex.number];
                        const ratingInfo = RATING_LEGEND.find(r => r.code === finding?.rating);
                        
                        return (
                          <TableRow key={ex.id} className="hover:bg-accent/50">
                            <TableCell className="pl-12 text-xs text-muted-foreground">{ex.number}</TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="font-medium">{ex.title}</div>
                                <div className="text-sm text-muted-foreground">{ex.question}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {finding ? (
                                <Badge variant="outline" className={cn(ratingInfo?.color.replace('bg-', 'text-').replace('rounded-full', ''), "border-current")}>
                                  {ratingInfo?.label || finding.rating}
                                </Badge>
                              ) : (
                                <Badge variant="secondary" className="opacity-50">
                                  À évaluer
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Paperclip className="w-3 h-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">
                                  {finding?.files?.length || 0} fichier(s)
                                </span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <Dialog>
                                <DialogTrigger render={
                                  <Button 
                                    variant={finding ? "ghost" : "default"} 
                                    size="sm" 
                                    onClick={() => {
                                      setSelectedExigence(ex);
                                      if (finding) {
                                        setCurrentFinding({
                                          rating: finding.rating,
                                          riskLevel: finding.riskLevel,
                                          description: finding.description || finding.comment || ''
                                        });
                                      } else {
                                        setCurrentFinding({
                                          rating: 'C',
                                          riskLevel: 'low',
                                          description: ''
                                        });
                                      }
                                    }}
                                  >
                                    {finding ? 'Éditer' : 'Enregistrer'}
                                  </Button>
                                } />
                                <DialogContent className="max-w-3xl max-h-[500px] !flex !flex-col p-0 overflow-hidden border shadow-2xl" showCloseButton={false}>
                              <DialogHeader className="p-4 pb-2 border-b bg-muted/10">
                                <DialogTitle className="text-lg leading-tight">Saisie du constat - {ex.number}</DialogTitle>
                                <DialogDescription className="text-[10px] leading-tight opacity-80">{ex.title}</DialogDescription>
                              </DialogHeader>
                              
                              <ScrollArea className="flex-1 overflow-y-auto px-4">
                                <div className="space-y-3 py-4">
                                  <div className="space-y-1">
                                    <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Question d'audit</Label>
                                    <div className="p-2 bg-muted/50 rounded-md text-xs italic border border-border/50">
                                      {ex.question}
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                      <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Cotation</Label>
                                      <Select 
                                        defaultValue="C" 
                                        onValueChange={(v) => setCurrentFinding({...currentFinding, rating: v})}
                                      >
                                        <SelectTrigger className="w-full h-8 text-xs">
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="min-w-[200px]">
                                          {RATING_LEGEND.map(r => (
                                            <SelectItem key={r.code} value={r.code}>
                                              <div className="flex items-center gap-2">
                                                <div className={cn("w-2 h-2 rounded-full", r.color)} />
                                                {r.label} ({r.code})
                                              </div>
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div className="space-y-1">
                                      <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Niveau de risque</Label>
                                      <Select 
                                        defaultValue="low"
                                        onValueChange={(v) => setCurrentFinding({...currentFinding, riskLevel: v})}
                                      >
                                        <SelectTrigger className="w-full h-8 text-xs">
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="min-w-[150px]">
                                          <SelectItem value="low">Faible</SelectItem>
                                          <SelectItem value="medium">Moyen</SelectItem>
                                          <SelectItem value="high">Élevé</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>

                                  <div className="space-y-1">
                                    <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Constat / Preuves objectives</Label>
                                    <Textarea 
                                      placeholder="Décrivez vos observations, les entretiens réalisés et l'échantillonnage..." 
                                      className="min-h-[60px] text-xs resize-none"
                                      value={currentFinding.description}
                                      onChange={(e) => setCurrentFinding({...currentFinding, description: e.target.value})}
                                    />
                                  </div>

                                  {ex.risk && (
                                    <div className="p-2 bg-destructive/5 border border-destructive/10 rounded-md">
                                      <div className="flex items-center gap-2 mb-1">
                                        <AlertCircle className="w-3 h-3 text-destructive" />
                                        <span className="text-[10px] font-bold text-destructive uppercase tracking-wider">Risque associé</span>
                                        {ex.criticality && (
                                          <Badge variant="outline" className="text-[8px] h-4 border-destructive/30 text-destructive">
                                            {ex.criticality.toUpperCase()}
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-[10px] text-destructive/80 italic">{ex.risk}</p>
                                    </div>
                                  )}

                                  <div className="space-y-1">
                                    <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Preuves attendues</Label>
                                    <ul className="text-[10px] text-muted-foreground list-disc pl-4 space-y-0">
                                      {ex.expectedEvidence.map((e: string, i: number) => (
                                        <li key={i}>{e}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div className="space-y-2">
                                    <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Gestion des preuves (Fichiers)</Label>
                                    <div 
                                      onDragOver={handleDragOver}
                                      onDragLeave={handleDragLeave}
                                      onDrop={handleDrop}
                                      onClick={() => fileInputRef.current?.click()}
                                      className={cn(
                                        "border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer",
                                        isDragging ? "border-primary bg-primary/10" : "bg-muted/20 hover:bg-muted/40"
                                      )}
                                    >
                                      <input 
                                        type="file" 
                                        ref={fileInputRef} 
                                        className="hidden" 
                                        multiple 
                                        onChange={handleFileSelect}
                                      />
                                      <Upload className={cn("w-6 h-6 transition-colors", isDragging ? "text-primary" : "text-muted-foreground")} />
                                      <div className="text-xs font-medium">Glissez-déposez vos fichiers ici</div>
                                      <Button variant="secondary" size="sm" className="mt-1 h-7 text-[10px]" onClick={(e) => {
                                        e.stopPropagation();
                                        fileInputRef.current?.click();
                                      }}>
                                        Parcourir
                                      </Button>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                                      {uploadedFiles.map((file, index) => (
                                        <div key={index} className="flex items-center justify-between p-1.5 border rounded-md bg-card text-[11px]">
                                          <div className="flex items-center gap-2 truncate">
                                            <FileText className="w-3 h-3 text-blue-500 shrink-0" />
                                            <span className="truncate">{file.name}</span>
                                          </div>
                                          <Button 
                                            variant="ghost" 
                                            size="sm" 
                                            className="text-destructive h-6 w-6 p-0 shrink-0"
                                            onClick={() => removeFile(index)}
                                          >
                                            <X className="w-3 h-3" />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </ScrollArea>

                              <DialogFooter className="!m-0 flex justify-end gap-3 p-4 border-t bg-muted/30">
                                <DialogClose render={<Button variant="outline" size="sm" className="px-6" />}>
                                  Annuler
                                </DialogClose>
                                <DialogClose render={<Button size="sm" className="px-6" onClick={handleSaveFinding} />}>
                                  Valider
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
  );
}
