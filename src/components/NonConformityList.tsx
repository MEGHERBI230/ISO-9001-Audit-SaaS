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
  ArrowRight 
} from 'lucide-react';

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
                  <Button variant="ghost" size="sm" className="gap-1">
                    Détails
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
