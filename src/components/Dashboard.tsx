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
import { 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  TrendingUp,
  Plus
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
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { STANDARDS } from '../constants';
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
      setStats(prev => ({ ...prev, totalAudits: snapshot.size }));
    });

    return () => unsubscribe();
  }, []);

  const [newAuditData, setNewAuditData] = React.useState({
    companyName: '',
    structure: '',
    auditorName: '',
    standardId: 'iso9001',
    date: new Date().toISOString().split('T')[0]
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Tableau de bord Qualité</h1>
        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger render={<Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nouvel Audit
            </Button>} />
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Créer un nouvel audit</DialogTitle>
                <DialogDescription>
                  Saisissez les informations de base pour commencer votre audit.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="company">Nom de l'entreprise</Label>
                  <Input 
                    id="company" 
                    placeholder="Ex: Entreprise SAS" 
                    value={newAuditData.companyName}
                    onChange={(e) => setNewAuditData({...newAuditData, companyName: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="structure">Structure / Département</Label>
                  <Input 
                    id="structure" 
                    placeholder="Ex: Direction Générale" 
                    value={newAuditData.structure}
                    onChange={(e) => setNewAuditData({...newAuditData, structure: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="auditor">Auditeur</Label>
                  <Input 
                    id="auditor" 
                    placeholder="Votre nom" 
                    value={newAuditData.auditorName}
                    onChange={(e) => setNewAuditData({...newAuditData, auditorName: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="standard">Référentiel / Norme</Label>
                  <Select 
                    value={newAuditData.standardId} 
                    onValueChange={(v) => setNewAuditData({...newAuditData, standardId: v})}
                  >
                    <SelectTrigger id="standard">
                      <SelectValue placeholder="Sélectionnez une norme" />
                    </SelectTrigger>
                    <SelectContent>
                      {STANDARDS.map(s => (
                        <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Date de l'audit</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    value={newAuditData.date}
                    onChange={(e) => setNewAuditData({...newAuditData, date: e.target.value})}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Annuler</Button>} />
                <DialogClose render={
                  <Button 
                    onClick={() => onStartAudit?.(newAuditData)}
                    disabled={!newAuditData.companyName || !newAuditData.auditorName}
                  >
                    Démarrer l'audit
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
