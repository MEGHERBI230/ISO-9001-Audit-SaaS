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
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  RefreshCw, 
  Shield, 
  User, 
  Mail,
  Database
} from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'sonner';

export default function Settings() {
  const [loading, setLoading] = React.useState(false);
  const user = auth.currentUser;

  const handleReset = async () => {
    if (!user) return;
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer TOUTES vos données (audits et non-conformités) ? Cette action est irréversible.")) return;

    try {
      setLoading(true);
      // Delete audits
      const auditSnap = await getDocs(query(collection(db, 'audits'), where('createdBy', '==', user.uid)));
      const deleteAudits = auditSnap.docs.map(d => deleteDoc(doc(db, 'audits', d.id)));
      
      // Delete NCs
      const ncSnap = await getDocs(query(collection(db, 'non-conformities'), where('createdBy', '==', user.uid)));
      const deleteNCs = ncSnap.docs.map(d => deleteDoc(doc(db, 'non-conformities', d.id)));

      await Promise.all([...deleteAudits, ...deleteNCs]);
      toast.success("Toutes les données ont été supprimées.");
    } catch (error) {
      console.error("Error resetting data:", error);
      toast.error("Erreur lors de la suppression des données.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Paramètres</h1>
        <p className="text-muted-foreground">Gérez votre compte et vos préférences d'application.</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Profil Utilisateur
            </CardTitle>
            <CardDescription>Informations relatives à votre compte.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg bg-muted/30">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                {user?.email?.substring(0, 2).toUpperCase() || 'U'}
              </div>
              <div>
                <p className="font-semibold">{user?.displayName || 'Utilisateur ISO Audit'}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {user?.email}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Sécurité et Confidentialité
            </CardTitle>
            <CardDescription>Vos données sont stockées de manière sécurisée et ne sont accessibles que par vous.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-blue-50/50 border-blue-100">
              <p className="text-sm text-blue-800 leading-relaxed">
                Toutes vos données d'audit, vos non-conformités et vos rapports sont chiffrés et protégés par les règles de sécurité Firebase. Seul votre identifiant unique ({user?.uid}) est autorisé à lire et écrire ces données.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <Database className="w-5 h-5" />
              Gestion des Données
            </CardTitle>
            <CardDescription>Actions critiques sur votre base de données personnelle.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-destructive/10 rounded-lg bg-destructive/5">
              <div className="space-y-1">
                <p className="font-bold text-destructive">Réinitialisation complète</p>
                <p className="text-sm text-muted-foreground">Supprime définitivement tous les audits et toutes les non-conformités enregistrés.</p>
              </div>
              <Button 
                variant="destructive" 
                onClick={handleReset} 
                disabled={loading}
                className="gap-2 shrink-0"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <AlertTriangle className="w-4 h-4" />}
                Effacer tout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
