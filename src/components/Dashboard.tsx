/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  TrendingUp,
  Plus,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { db, auth } from '../lib/firebase';
import { collection, query, where, getDocs, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { STANDARDS } from '../constants';
import { toast } from 'sonner';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

export default function Dashboard({ onStartAudit }: { onStartAudit?: (data: any) => void }) {
  const [stats, setStats] = React.useState({
    totalAudits: 0,
    openNCs: 0,
    maturityScore: 0,
    closureRate: 0
  });

  const [maturityByClause, setMaturityByClause] = React.useState([
    { name: 'Clause 4', value: 0 },
    { name: 'Clause 5', value: 0 },
    { name: 'Clause 6', value: 0 },
    { name: 'Clause 7', value: 0 },
    { name: 'Clause 8', value: 0 },
    { name: 'Clause 9', value: 0 },
    { name: 'Clause 10', value: 0 },
  ]);

  const [ncDistribution, setNcDistribution] = React.useState([
    { name: 'Majeures', value: 0, color: '#ef4444' },
    { name: 'Mineures', value: 0, color: '#f97316' },
    { name: 'OBS', value: 0, color: '#fbbf24' },
    { name: 'OA', value: 0, color: '#22c55e' },
  ]);

  React.useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(collection(db, 'audits'), where('createdBy', '==', auth.currentUser.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const auditDocs = snapshot.docs.map(doc => doc.data());
      const total = snapshot.size;
      
      let totalScore = 0;
      let completedCount = 0;
      
      auditDocs.forEach(audit => {
        if (audit.status === 'completed') {
          totalScore += (audit.summary?.score || 0);
          completedCount++;
        }
      });

      const avgMaturity = completedCount > 0 ? Math.round(totalScore / completedCount) : 0;

      setStats(prev => ({ 
        ...prev, 
        totalAudits: total,
        maturityScore: avgMaturity
      }));
    });

    // Fetch NC stats
    const qNC = query(collection(db, 'non-conformities'), where('createdBy', '==', auth.currentUser.uid));
    const unsubscribeNC = onSnapshot(qNC, (snapshot) => {
      const ncDocs = snapshot.docs.map(doc => doc.data());
      const open = ncDocs.filter(nc => nc.status === 'open' || nc.status === 'in-progress').length;
      const closed = ncDocs.filter(nc => nc.status === 'verified' || nc.status === 'closed').length;
      const total = ncDocs.length;
      const rate = total > 0 ? Math.round((closed / total) * 100) : 0;

      setStats(prev => ({
        ...prev,
        openNCs: open,
        closureRate: rate
      }));

      // Update distribution chart
      const dist = [
        { name: 'Majeures', value: ncDocs.filter(nc => nc.type === 'NCM').length, color: '#ef4444' },
        { name: 'Mineures', value: ncDocs.filter(nc => nc.type === 'NCm').length, color: '#f97316' },
        { name: 'OBS', value: ncDocs.filter(nc => nc.type === 'OBS').length, color: '#fbbf24' },
        { name: 'OA', value: ncDocs.filter(nc => nc.type === 'OA').length, color: '#22c55e' },
      ];
      setNcDistribution(dist);
    });

    return () => {
      unsubscribe();
      unsubscribeNC();
    };
  }, []);

  const [newAuditData, setNewAuditData] = React.useState({
    companyName: '',
    structure: 'Direction Qualité',
    auditorName: '',
    standardId: 'iso9001',
    sector: 'Industrie Automobile',
    maturity: 'intermédiaire',
    auditType: 'interne',
    date: new Date().toISOString().split('T')[0]
  });

  const handleReset = async () => {
    if (!auth.currentUser) return;
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer TOUTES vos données (audits et non-conformités) ? Cette action est irréversible.")) return;

    try {
      const auditSnap = await getDocs(query(collection(db, 'audits'), where('createdBy', '==', auth.currentUser.uid)));
      const deleteAudits = auditSnap.docs.map(d => deleteDoc(doc(db, 'audits', d.id)));
      
      const ncSnap = await getDocs(query(collection(db, 'non-conformities'), where('createdBy', '==', auth.currentUser.uid)));
      const deleteNCs = ncSnap.docs.map(d => deleteDoc(doc(db, 'non-conformities', d.id)));

      await Promise.all([...deleteAudits, ...deleteNCs]);
      toast.success("Données réinitialisées avec succès");
    } catch (error) {
      console.error("Error resetting data:", error);
      toast.error("Erreur lors de la réinitialisation");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Tableau de bord Qualité</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleReset} className="gap-2 text-destructive hover:text-destructive border-destructive/20">
            <RefreshCw className="h-3.5 w-3.5" />
            Remise à zéro
          </Button>
          <Dialog>
            <DialogTrigger render={<Button className="gap-2" />}>
              <Plus className="h-4 w-4" />
              Nouvel Audit
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] max-h-[500px] !flex !flex-col p-0 overflow-hidden border shadow-2xl">
              <DialogHeader className="p-4 pb-2 border-b bg-muted/10">
                <DialogTitle className="text-lg">Créer un nouvel audit</DialogTitle>
                <DialogDescription className="text-xs">
                  Saisissez les informations de base pour commencer votre audit.
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="company" className="text-xs font-semibold">Nom de l'entreprise</Label>
                    <Input 
                      id="company" 
                      placeholder="Ex: Entreprise SAS" 
                      className="h-8 text-sm"
                      value={newAuditData.companyName}
                      onChange={(e) => setNewAuditData({...newAuditData, companyName: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="grid gap-1.5">
                      <Label htmlFor="structure" className="text-xs font-semibold">Structure / Département</Label>
                      <Select 
                        value={newAuditData.structure} 
                        onValueChange={(v) => setNewAuditData({...newAuditData, structure: v})}
                      >
                        <SelectTrigger id="structure" className="h-8 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Direction Générale">Direction Générale</SelectItem>
                          <SelectItem value="Direction Qualité">Direction Qualité</SelectItem>
                          <SelectItem value="Production">Production</SelectItem>
                          <SelectItem value="Maintenance">Maintenance</SelectItem>
                          <SelectItem value="Logistique">Logistique</SelectItem>
                          <SelectItem value="Achats">Achats</SelectItem>
                          <SelectItem value="RH / Formation">RH / Formation</SelectItem>
                          <SelectItem value="HSE">HSE</SelectItem>
                          <SelectItem value="Laboratoire / Métrologie">Laboratoire / Métrologie</SelectItem>
                          <SelectItem value="Commercial / Ventes">Commercial / Ventes</SelectItem>
                          <SelectItem value="Conception / R&D">Conception / R&D</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="sector" className="text-xs font-semibold">Secteur d'activité</Label>
                      <Select 
                        value={newAuditData.sector} 
                        onValueChange={(v) => setNewAuditData({...newAuditData, sector: v})}
                      >
                        <SelectTrigger id="sector" className="h-8 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Industrie Automobile">Industrie Automobile</SelectItem>
                          <SelectItem value="Assemblage Véhicules">Assemblage Véhicules</SelectItem>
                          <SelectItem value="Sous-traitance Automobile">Sous-traitance Automobile</SelectItem>
                          <SelectItem value="Usinage / Soudage">Usinage / Soudage</SelectItem>
                          <SelectItem value="Industrie Générale">Industrie Générale</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="grid gap-1.5">
                      <Label htmlFor="maturity" className="text-xs font-semibold">Niveau de maturité</Label>
                      <Select 
                        value={newAuditData.maturity} 
                        onValueChange={(v) => setNewAuditData({...newAuditData, maturity: v})}
                      >
                        <SelectTrigger id="maturity" className="h-8 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="débutant">Débutant</SelectItem>
                          <SelectItem value="intermédiaire">Intermédiaire</SelectItem>
                          <SelectItem value="avancé">Avancé</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="auditType" className="text-xs font-semibold">Type d'audit</Label>
                      <Select 
                        value={newAuditData.auditType} 
                        onValueChange={(v) => setNewAuditData({...newAuditData, auditType: v})}
                      >
                        <SelectTrigger id="auditType" className="h-8 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interne">Interne</SelectItem>
                          <SelectItem value="externe">Externe / Certification</SelectItem>
                          <SelectItem value="fournisseur">Fournisseur</SelectItem>
                          <SelectItem value="conformité">Conformité / Réglementaire</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-1.5">
                    <Label htmlFor="auditor" className="text-xs font-semibold">Auditeur</Label>
                    <Input 
                      id="auditor" 
                      placeholder="Votre nom" 
                      className="h-8 text-sm"
                      value={newAuditData.auditorName}
                      onChange={(e) => setNewAuditData({...newAuditData, auditorName: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="standard" className="text-xs font-semibold">Référentiel / Norme</Label>
                      <Select 
                        value={newAuditData.standardId} 
                        onValueChange={(v) => setNewAuditData({...newAuditData, standardId: v})}
                      >
                        <SelectTrigger id="standard" className="h-8 text-sm">
                          <SelectValue placeholder="Sélectionnez une norme" />
                        </SelectTrigger>
                        <SelectContent>
                          {STANDARDS.filter(s => s.id !== 'stock_audit').map(s => (
                            <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="date" className="text-xs font-semibold">Date de l'audit</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      className="h-8 text-sm"
                      value={newAuditData.date}
                      onChange={(e) => setNewAuditData({...newAuditData, date: e.target.value})}
                    />
                  </div>
                </div>
              </ScrollArea>
              <DialogFooter className="!m-0 flex justify-end gap-3 p-4 border-t bg-muted/30">
                <DialogClose render={<Button variant="outline" size="sm" className="px-6" />}>
                  Annuler
                </DialogClose>
                <DialogClose render={
                  <Button 
                    size="sm"
                    className="px-6"
                    onClick={() => onStartAudit?.(newAuditData)}
                    disabled={!newAuditData.companyName || !newAuditData.auditorName}
                  >
                    Valider
                  </Button>
                } />
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="hidden sm:flex items-center gap-2">
            <Badge variant="outline" className="px-2 py-0.5 text-[10px] sm:text-xs text-nowrap">Dernier audit: 12/03/2026</Badge>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Score de Maturité Global</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.maturityScore}%</div>
            <p className="text-xs text-muted-foreground">Score calculé sur les audits clôturés</p>
            <Progress value={stats.maturityScore} className="mt-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Audits Réalisés</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalAudits}</div>
            <p className="text-xs text-muted-foreground">Total des audits enregistrés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Non-Conformités Ouvertes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.openNCs}</div>
            <p className="text-xs text-muted-foreground">Écarts nécessitant un plan d'action</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de Clôture</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.closureRate}%</div>
            <p className="text-xs text-muted-foreground">Actions correctives soldées</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Maturité par Clause</CardTitle>
            <CardDescription>Niveau de conformité actuel</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={maturityByClause}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Répartition des Constats</CardTitle>
            <CardDescription>Typologie des écarts identifiés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ncDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {ncDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {ncDistribution.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
