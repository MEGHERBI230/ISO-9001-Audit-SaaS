/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AuditWorkspace from './components/AuditWorkspace';
import NonConformityList from './components/NonConformityList';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  const [currentView, setCurrentView] = React.useState('dashboard');

  // Simple routing logic based on state
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'audits':
        return <AuditWorkspace />;
      case 'nc':
        return <NonConformityList />;
      default:
        return <Dashboard />;
    }
  };

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

