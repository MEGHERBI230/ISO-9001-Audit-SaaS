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
  X
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
import { ISO_9001_2015_STRUCTURE, RATING_LEGEND } from '@/src/constants';
import { FindingStatus } from '@/src/types';
import { cn } from '@/lib/utils';

export default function AuditWorkspace() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedClauses, setExpandedClauses] = React.useState<string[]>(['c4']);
  const [selectedExigence, setSelectedExigence] = React.useState<any>(null);
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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
          <h1 className="text-xl font-bold tracking-tight">Audit Interne Qualité 2026</h1>
          <p className="text-muted-foreground text-xs">Périmètre: Siège & Production | Référentiel: ISO 9001:2015</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 h-8 text-xs">
            <History className="w-3.5 h-3.5" />
            Historique
          </Button>
          <Button size="sm" className="gap-2 h-8 text-xs">
            <Check className="w-3.5 h-3.5" />
            Valider
          </Button>
        </div>
      </div>

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
              {/* ... rest of table ... */}
            {ISO_9001_2015_STRUCTURE.map((clause) => (
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
                    
                    {sub.exigences.map((ex) => (
                      <TableRow key={ex.id} className="hover:bg-accent/50">
                        <TableCell className="pl-12 text-xs text-muted-foreground">{ex.number}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{ex.title}</div>
                            <div className="text-sm text-muted-foreground">{ex.question}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                            Conforme
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Paperclip className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">3 fichiers</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Dialog>
                            <DialogTrigger render={<Button variant="ghost" size="sm" onClick={() => setSelectedExigence(ex)} />}>
                              Éditer
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col pt-3" showCloseButton={false}>
                              <DialogHeader className="pb-1 space-y-0">
                                <DialogTitle className="text-lg leading-tight">Saisie du constat - {ex.number}</DialogTitle>
                                <DialogDescription className="text-[10px] leading-tight opacity-80">{ex.title}</DialogDescription>
                              </DialogHeader>
                              
                              <ScrollArea className="flex-1 pr-4">
                                <div className="space-y-2.5 py-1">
                                  <div className="space-y-0.5">
                                    <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Question d'audit</Label>
                                    <div className="p-2 bg-muted/50 rounded-md text-xs italic border border-border/50">
                                      {ex.question}
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-0.5">
                                      <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Cotation</Label>
                                      <Select defaultValue="C">
                                        <SelectTrigger className="w-full">
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
                                    <div className="space-y-0.5">
                                      <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Niveau de risque</Label>
                                      <Select defaultValue="low">
                                        <SelectTrigger className="w-full">
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

                                  <div className="space-y-0.5">
                                    <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Constat / Preuves objectives</Label>
                                    <Textarea 
                                      placeholder="Décrivez vos observations, les entretiens réalisés et l'échantillonnage..." 
                                      className="min-h-[70px] text-xs resize-none"
                                    />
                                  </div>

                                  <div className="space-y-0.5">
                                    <Label className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Preuves attendues</Label>
                                    <ul className="text-[10px] text-muted-foreground list-disc pl-4 space-y-0">
                                      {ex.expectedEvidence.map((e: string, i: number) => (
                                        <li key={i}>{e}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div className="space-y-1">
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

                              <DialogFooter className="py-3 px-4">
                                <DialogClose render={<Button variant="outline" size="sm" />}>
                                  Annuler
                                </DialogClose>
                                <DialogClose render={<Button size="sm" />}>
                                  Enregistrer le constat
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
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
