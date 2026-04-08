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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const mockNC = [
  {
    id: 'NC-2026-001',
    type: 'NCM',
    clause: '7.1.5',
    description: 'Étalonnage de la balance B-012 expiré depuis 2 mois.',
    status: 'open',
    dueDate: '2026-04-15',
    responsible: 'Jean Dupont'
  },
  {
    id: 'NC-2026-002',
    type: 'NCm',
    clause: '4.1',
    description: "L'analyse SWOT n'inclut pas les nouveaux concurrents identifiés en 2025.",
    status: 'in-progress',
    dueDate: '2026-05-10',
    responsible: 'Marie Martin'
  },
  {
    id: 'NC-2026-003',
    type: 'NCm',
    clause: '5.2',
    description: 'Politique qualité non affichée dans l’atelier de production.',
    status: 'verified',
    dueDate: '2026-03-30',
    responsible: 'Pierre Durand'
  }
];

export default function NonConformityList() {
  const [selectedNC, setSelectedNC] = React.useState<typeof mockNC[0] | null>(null);

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
            <div className="text-2xl font-bold text-destructive">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Clôturées (30j)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">12</div>
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
            {mockNC.map((nc) => (
              <TableRow key={nc.id}>
                <TableCell className="font-medium">{nc.id}</TableCell>
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
                    {nc.status === 'verified' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                    <span className="capitalize">{nc.status.replace('-', ' ')}</span>
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
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedNC} onOpenChange={(open) => !open && setSelectedNC(null)}>
        <DialogContent className="sm:max-w-[600px] mt-[-5vh]">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={selectedNC?.type === 'NCM' ? 'destructive' : 'outline'} className={selectedNC?.type === 'NCm' ? 'border-orange-200 text-orange-600 bg-orange-50' : ''}>
                {selectedNC?.type === 'NCM' ? 'Majeure' : 'Mineure'}
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">{selectedNC?.id}</span>
            </div>
            <DialogTitle className="text-xl">Détails de la Non-Conformité</DialogTitle>
            <DialogDescription>
              Informations détaillées et suivi de l'action corrective.
            </DialogDescription>
          </DialogHeader>

          {selectedNC && (
            <div className="grid gap-4 py-4 max-h-[50vh] overflow-y-auto pr-4 -mr-4 scrollbar-thin">
              <div className="space-y-2">
                <h4 className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                  <FileText className="w-4 h-4" />
                  Description
                </h4>
                <p className="text-sm bg-muted/50 p-3 rounded-md border">
                  {selectedNC.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                    <Tag className="w-4 h-4" />
                    Clause / Exigence
                  </h4>
                  <p className="text-sm font-semibold">{selectedNC.clause}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Statut
                  </h4>
                  <div className="flex items-center gap-2">
                    {selectedNC.status === 'open' && <AlertTriangle className="w-4 h-4 text-destructive" />}
                    {selectedNC.status === 'in-progress' && <Clock className="w-4 h-4 text-orange-500" />}
                    {selectedNC.status === 'verified' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                    <span className="text-sm capitalize font-semibold">{selectedNC.status.replace('-', ' ')}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    Responsable
                  </h4>
                  <p className="text-sm font-semibold">{selectedNC.responsible}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Échéance
                  </h4>
                  <p className="text-sm font-semibold">{selectedNC.dueDate}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t">
                <h4 className="text-sm font-medium mb-3">Actions Correctives</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Analyse des causes réalisée</p>
                      <p className="text-xs text-muted-foreground">Le 12/03/2026 par {selectedNC.responsible}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-muted mt-1.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Mise en œuvre de l'action</p>
                      <p className="text-xs text-muted-foreground">En attente de validation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedNC(null)}>Fermer</Button>
            <Button>Modifier la NC</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
