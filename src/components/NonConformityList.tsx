/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  User,
  Calendar,
  FileText,
  Tag
} from 'lucide-react';
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { db, auth } from '../lib/firebase';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

interface NonConformity {
  id: string;
  type: 'NCM' | 'NCm';
  clause: string;
  description: string;
  status: 'open' | 'in-progress' | 'verified' | 'closed';
  dueDate: string;
  responsible: string;
  auditId?: string;
  createdAt?: any;
}

export default function NonConformityList() {
  const [ncs, setNcs] = React.useState<NonConformity[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedNC, setSelectedNC] = React.useState<NonConformity | null>(null);

  React.useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, 'non-conformities'),
      where('createdBy', '==', auth.currentUser.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ncData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as NonConformity[];
      setNcs(ncData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching NCs:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const stats = {
    open: ncs.filter(nc => nc.status === 'open').length,
    inProgress: ncs.filter(nc => nc.status === 'in-progress').length,
    closed: ncs.filter(nc => nc.status === 'verified' || nc.status === 'closed').length
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Gestion des Non-Conformités</h1>
        <Button className="gap-2">
          <AlertTriangle className="w-4 h-4" />
          Déclarer une NC
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ouvertes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{stats.open}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">{stats.inProgress}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Clôturées (30j)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">{stats.closed}</div>
          </CardContent>
        </Card>
      </div>

      <div className="border rounded-lg bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Clause</TableHead>
              <TableHead className="max-w-md">Description</TableHead>
              <TableHead>Responsable</TableHead>
              <TableHead>Échéance</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ncs.length > 0 ? ncs.map((nc) => (
              <TableRow key={nc.id}>
                <TableCell className="font-medium">{(nc.id || '').substring(0, 8).toUpperCase()}</TableCell>
                <TableCell>
                  <Badge variant={nc.type === 'NCM' ? 'destructive' : 'outline'} className={nc.type === 'NCm' ? 'border-orange-200 text-orange-600 bg-orange-50' : ''}>
                    {nc.type === 'NCM' ? 'Majeure' : 'Mineure'}
                  </Badge>
                </TableCell>
                <TableCell>{nc.clause}</TableCell>
                <TableCell className="max-w-md truncate">{nc.description}</TableCell>
                <TableCell>{nc.responsible}</TableCell>
                <TableCell>{nc.dueDate}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {nc.status === 'open' && <AlertTriangle className="w-4 h-4 text-destructive" />}
                    {nc.status === 'in-progress' && <Clock className="w-4 h-4 text-orange-500" />}
                    {(nc.status === 'verified' || nc.status === 'closed') && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                    <span className="capitalize">{(nc.status || '').replace('-', ' ')}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-1"
                    onClick={() => setSelectedNC(nc)}
                  >
                    Détails
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-10 text-muted-foreground">
                  Aucune non-conformité enregistrée.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedNC} onOpenChange={(open) => !open && setSelectedNC(null)}>
        <DialogContent className="sm:max-w-[600px] max-h-[500px] !flex !flex-col p-0 overflow-hidden border shadow-2xl">
          <DialogHeader className="p-4 pb-2 border-b bg-muted/10">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={selectedNC?.type === 'NCM' ? 'destructive' : 'outline'} className={cn("text-[10px] h-4", selectedNC?.type === 'NCm' ? 'border-orange-200 text-orange-600 bg-orange-50' : '')}>
                {selectedNC?.type === 'NCM' ? 'Majeure' : 'Mineure'}
              </Badge>
              <span className="text-[10px] text-muted-foreground font-mono">{selectedNC?.id}</span>
            </div>
            <DialogTitle className="text-lg">Détails de la Non-Conformité</DialogTitle>
            <DialogDescription className="text-xs">
              Informations détaillées et suivi de l'action corrective.
            </DialogDescription>
          </DialogHeader>

          {selectedNC && (
            <ScrollArea className="flex-1 overflow-y-auto px-6">
              <div className="grid gap-4 py-6">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-semibold flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5" />
                    Description
                  </h4>
                  <p className="text-sm bg-muted/30 p-3 rounded-md border border-border/50">
                    {selectedNC.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                      <Tag className="w-3.5 h-3.5" />
                      Clause / Exigence
                    </h4>
                    <p className="text-sm font-medium">{selectedNC.clause}</p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      Statut
                    </h4>
                    <div className="flex items-center gap-2">
                      {selectedNC.status === 'open' && <AlertTriangle className="w-3.5 h-3.5 text-destructive" />}
                      {selectedNC.status === 'in-progress' && <Clock className="w-3.5 h-3.5 text-orange-500" />}
                      {selectedNC.status === 'verified' && <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
                      <span className="text-sm capitalize font-medium">{selectedNC.status.replace('-', ' ')}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                      <User className="w-3.5 h-3.5" />
                      Responsable
                    </h4>
                    <p className="text-sm font-medium">{selectedNC.responsible}</p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-semibold flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      Échéance
                    </h4>
                    <p className="text-sm font-medium">{selectedNC.dueDate}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Actions Correctives</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Analyse des causes réalisée</p>
                        <p className="text-[10px] text-muted-foreground">Le 12/03/2026 par {selectedNC.responsible}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Mise en œuvre de l'action</p>
                        <p className="text-[10px] text-muted-foreground">En attente de validation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          )}
          
          <DialogFooter className="!m-0 flex justify-end gap-3 p-4 border-t bg-muted/30">
            <DialogClose render={<Button variant="outline" size="sm" className="px-6" />}>
              Annuler
            </DialogClose>
            <Button size="sm" className="px-6">Valider</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
