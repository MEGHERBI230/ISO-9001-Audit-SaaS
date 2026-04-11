/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AuditWorkspace from './components/AuditWorkspace';
import NonConformityList from './components/NonConformityList';
import Reports from './components/Reports';
import StockAuditView from './components/StockAuditView';
import Settings from './components/Settings';
import { Toaster } from '@/components/ui/sonner';
import { db, auth } from './lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { toast } from 'sonner';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function App() {
  const [currentView, setCurrentView] = React.useState('dashboard');
  const [activeAudit, setActiveAudit] = React.useState<any>(null);
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [isDemoMode, setIsDemoMode] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    console.log("Attempting login with Google...");
    try {
      const provider = new GoogleAuthProvider();
      // Ensure we use the popup method as recommended for this environment
      const result = await signInWithPopup(auth, provider);
      console.log("Login successful:", result.user.email);
      setUser(result.user);
      setIsDemoMode(false);
      toast.success("Connecté avec succès");
    } catch (error: any) {
      console.error("Login error details:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      
      let message = "Erreur lors de la connexion";
      if (error.code === 'auth/popup-blocked') {
        message = "Le popup a été bloqué par votre navigateur. Veuillez autoriser les popups.";
      } else if (error.code === 'auth/unauthorized-domain') {
        message = "Ce domaine n'est pas autorisé dans la console Firebase.";
      }
      
      toast.error(message);
    }
  };

  const handleStartAudit = async (auditData: any) => {
    if (!user && !isDemoMode) {
      toast.error("Vous devez être connecté pour démarrer un audit");
      return;
    }

    try {
      let auditId = 'demo_' + Date.now();
      
      if (!isDemoMode && user) {
        const docRef = await addDoc(collection(db, 'audits'), {
          ...auditData,
          status: 'draft',
          createdBy: user.uid,
          createdAt: serverTimestamp()
        });
        auditId = docRef.id;
      }
      
      setActiveAudit({ id: auditId, ...auditData });
      setCurrentView('audits');
      toast.success(isDemoMode ? "Audit démarré (Mode Démo - Non sauvegardé)" : "Audit créé avec succès");
    } catch (error) {
      console.error("Error creating audit:", error);
      toast.error("Erreur lors de la création de l'audit (Vérifiez votre connexion)");
    }
  };

  const enterDemoMode = () => {
    setIsDemoMode(true);
    toast.info("Mode Démo activé. Les données ne seront pas sauvegardées dans le cloud.");
  };

  // Simple routing logic based on state
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onStartAudit={handleStartAudit} />;
      case 'audits':
        return <AuditWorkspace auditContext={activeAudit} onNavigate={setCurrentView} />;
      case 'nc':
        return <NonConformityList />;
      case 'reports':
        return <Reports />;
      case 'stock-audit':
        return <StockAuditView />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onStartAudit={handleStartAudit} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user && !isDemoMode) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            ISO Audit SaaS
          </h1>
          <p className="text-muted-foreground max-w-[500px] mx-auto text-sm sm:text-base">
            Gérez vos audits et vos conformités en toute simplicité. 
            Connectez-vous pour sauvegarder vos données en toute sécurité.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Button onClick={handleLogin} size="lg" className="gap-2 h-12">
            <LogIn className="w-5 h-5" />
            Se connecter avec Google
          </Button>
          
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Ou</span>
            </div>
          </div>
          
          <Button onClick={enterDemoMode} variant="outline" size="lg" className="h-12">
            Continuer sans connexion (Mode Démo)
          </Button>
        </div>

        <div className="max-w-md p-4 bg-muted/30 rounded-lg border border-border/50 text-[10px] text-muted-foreground">
          <p className="font-semibold mb-1 uppercase tracking-wider">Note technique :</p>
          <p>Si la connexion échoue, assurez-vous que les popups sont autorisés et que le domaine est ajouté dans la console Firebase.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Layout activeTab={currentView} onTabChange={setCurrentView}>
        <div className="flex flex-col h-full">
          {renderView()}
        </div>
      </Layout>
      <Toaster />
    </div>
  );
}

