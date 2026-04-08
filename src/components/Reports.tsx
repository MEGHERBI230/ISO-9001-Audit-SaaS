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
  Printer
} from 'lucide-react';
import { db, auth } from '../lib/firebase';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
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

  React.useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, 'audits'), 
      where('createdBy', '==', auth.currentUser.uid),
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
  }, []);

  const filteredAudits = audits.filter(audit => {
    const matchesSearch = audit.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         audit.auditorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || audit.status === filterStatus;
    const matchesStandard = filterStandard === 'all' || audit.standardId === filterStandard;
    const matchesType = filterType === 'all' || audit.type === filterType;
    return matchesSearch && matchesStatus && matchesStandard && matchesType;
  });

  const auditsByCompany = filteredAudits.reduce((acc, audit) => {
    if (!acc[audit.companyName]) {
      acc[audit.companyName] = [];
    }
    acc[audit.companyName].push(audit);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (selectedAudit) {
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex items-center justify-between print:hidden">
          <Button variant="ghost" onClick={() => setSelectedAudit(null)} className="gap-2">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Retour à la liste
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint} className="gap-2">
              <Printer className="w-4 h-4" />
              Imprimer / PDF
            </Button>
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Exporter Excel
            </Button>
          </div>
        </div>

        <div className="bg-card border rounded-xl overflow-hidden shadow-sm print:shadow-none print:border-none">
          {/* Header */}
          <div className="p-8 border-b bg-muted/30">
            <div className="flex justify-between items-start mb-6">
              <div>
                <Badge className="mb-2">{selectedAudit.standardId.toUpperCase()}</Badge>
                <h1 className="text-3xl font-bold tracking-tight">Rapport d'Audit Qualité</h1>
                <p className="text-muted-foreground mt-1">Rapport généré le {new Date().toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Référence</div>
                <div className="text-xl font-mono font-bold">{selectedAudit.id.substring(0, 8).toUpperCase()}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <Label className="text-xs text-muted-foreground uppercase">Entreprise</Label>
                <div className="font-semibold flex items-center gap-2 mt-1">
                  <Building2 className="w-4 h-4 text-primary" />
                  {selectedAudit.companyName}
                </div>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground uppercase">Auditeur</Label>
                <div className="font-semibold flex items-center gap-2 mt-1">
                  <UserIcon className="w-4 h-4 text-primary" />
                  {selectedAudit.auditorName}
                </div>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground uppercase">Date</Label>
                <div className="font-semibold flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  {selectedAudit.date}
                </div>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground uppercase">Statut</Label>
                <div className="mt-1">
                  <Badge variant={selectedAudit.status === 'completed' ? 'default' : 'secondary'}>
                    {selectedAudit.status === 'completed' ? 'Clôturé' : 'En cours'}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="p-8 border-b">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Résumé Exécutif
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="text-sm text-muted-foreground">Score Global</div>
                  <div className="text-3xl font-bold text-primary">{selectedAudit.summary?.score || 0}%</div>
                  <Progress value={selectedAudit.summary?.score || 0} className="mt-2" />
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <div className="text-sm text-muted-foreground">Niveau de Conformité</div>
                  <div className="font-bold mt-1">{selectedAudit.summary?.complianceLevel || 'Non évalué'}</div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 border rounded-lg bg-destructive/5 border-destructive/20">
                    <div className="text-2xl font-bold text-destructive">{selectedAudit.summary?.ncCount || 0}</div>
                    <div className="text-[10px] uppercase font-bold text-destructive/70">Non-Conformités</div>
                  </div>
                  <div className="text-center p-3 border rounded-lg bg-warning/5 border-warning/20">
                    <div className="text-2xl font-bold text-warning">{selectedAudit.summary?.obsCount || 0}</div>
                    <div className="text-[10px] uppercase font-bold text-warning/70">Observations</div>
                  </div>
                  <div className="text-center p-3 border rounded-lg bg-success/5 border-success/20">
                    <div className="text-2xl font-bold text-success">{selectedAudit.summary?.oppCount || 0}</div>
                    <div className="text-[10px] uppercase font-bold text-success/70">Opportunités</div>
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground uppercase">Conclusion de l'auditeur</Label>
                  <p className="mt-2 text-sm leading-relaxed">
                    {selectedAudit.summary?.conclusion || "Aucune conclusion n'a été rédigée pour cet audit."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Détails des Constats
            </h2>
            
            {selectedAudit.findings && selectedAudit.findings.length > 0 ? (
              <div className="space-y-6">
                {selectedAudit.findings.map((finding, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden">
                    <div className={cn(
                      "px-4 py-2 flex items-center justify-between border-b",
                      finding.severity === 'major' ? "bg-destructive/10" : 
                      finding.severity === 'minor' ? "bg-warning/10" : "bg-muted"
                    )}>
                      <div className="flex items-center gap-2">
                        <Badge variant={finding.severity === 'major' ? 'destructive' : 'outline'}>
                          {finding.severity.toUpperCase()}
                        </Badge>
                        <span className="font-bold text-sm">Critère: {finding.clause || 'N/A'}</span>
                      </div>
                      <Badge variant="secondary">{finding.status || 'Ouvert'}</Badge>
                    </div>
                    <div className="p-4 grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div>
                          <Label className="text-[10px] uppercase text-muted-foreground">Description de l'écart</Label>
                          <p className="text-sm mt-1">{finding.description}</p>
                        </div>
                        <div>
                          <Label className="text-[10px] uppercase text-muted-foreground">Preuve / Référence</Label>
                          <p className="text-sm mt-1 italic text-muted-foreground">{finding.evidence || 'Aucune preuve citée'}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-[10px] uppercase text-muted-foreground">Responsable</Label>
                            <p className="text-sm mt-1 font-medium">{finding.responsible || 'Non assigné'}</p>
                          </div>
                          <div>
                            <Label className="text-[10px] uppercase text-muted-foreground">Échéance</Label>
                            <p className="text-sm mt-1 font-medium">{finding.dueDate || 'N/A'}</p>
                          </div>
                        </div>
                        <div>
                          <Label className="text-[10px] uppercase text-muted-foreground">Action Corrective prévue</Label>
                          <p className="text-sm mt-1">{finding.correctiveAction || 'En attente de définition'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed rounded-xl">
                <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4 opacity-20" />
                <p className="text-muted-foreground">Aucun constat majeur ou mineur identifié lors de cet audit.</p>
              </div>
            )}
          </div>

          {/* History Section */}
          <div className="p-8 bg-muted/10 border-t">
            <h2 className="text-lg font-bold mb-4">Historique & Suivi</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full" />
                <div>
                  <div className="text-sm font-bold">Création de l'audit</div>
                  <div className="text-xs text-muted-foreground">{selectedAudit.date} - Par {selectedAudit.auditorName}</div>
                </div>
              </div>
              {selectedAudit.status === 'completed' && (
                <div className="flex gap-4">
                  <div className="w-1 bg-success rounded-full" />
                  <div>
                    <div className="text-sm font-bold">Clôture du rapport</div>
                    <div className="text-xs text-muted-foreground">Validation finale effectuée</div>
                  </div>
                </div>
              )}
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
                          <TableCell className="font-mono text-xs">{audit.id.substring(0, 8).toUpperCase()}</TableCell>
                          <TableCell>{audit.date}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{audit.standardId.toUpperCase()}</Badge>
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
                              className="gap-2"
                              onClick={() => setSelectedAudit(audit)}
                            >
                              <FileText className="w-4 h-4" />
                              Voir le rapport
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

const Label = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("block font-medium", className)}>{children}</span>
);

const Progress = ({ value, className }: { value: number, className?: string }) => (
  <div className={cn("h-2 w-full bg-muted rounded-full overflow-hidden", className)}>
    <div 
      className="h-full bg-primary transition-all duration-500" 
      style={{ width: `${value}%` }} 
    />
  </div>
);
