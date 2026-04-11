import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PackageSearch, 
  BrainCircuit, 
  Loader2, 
  ChevronRight,
  Package,
  Boxes,
  Truck,
  Trash2,
  AlertTriangle
} from 'lucide-react';
import { toast } from 'sonner';
import { generateStockAuditChecklist } from '../services/GeminiService';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const STOCK_TYPES = [
  { id: 'mp', name: 'Matières Premières', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'wip', name: 'Produits en cours (WIP)', icon: Boxes, color: 'text-orange-600', bg: 'bg-orange-50' },
  { id: 'pf', name: 'Produits Finis', icon: Truck, color: 'text-green-600', bg: 'bg-green-50' },
  { id: 'waste', name: 'Déchets / Rebuts', icon: Trash2, color: 'text-red-600', bg: 'bg-red-50' },
  { id: 'nc', name: 'Non-Conformes', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function StockAuditView() {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState<string | null>(null);
  const [generatedChecklist, setGeneratedChecklist] = React.useState<any>(null);

  const handleGenerate = async (typeId?: string) => {
    setIsGenerating(true);
    try {
      const typeName = typeId ? STOCK_TYPES.find(t => t.id === typeId)?.name : "Tous types de stocks";
      const result = await generateStockAuditChecklist({
        companyName: "Entreprise Industrielle",
        structure: `Audit Spécifique: ${typeName}`
      });
      
      if (result && result.clauses) {
        setGeneratedChecklist(result.clauses);
        toast.success(`Checklist expert générée pour: ${typeName}`);
      }
    } catch (error) {
      console.error("Error generating stock audit:", error);
      toast.error("Erreur lors de la génération de l'audit");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
          <PackageSearch className="w-8 h-8 text-primary" />
          Audit Expert des Stocks
        </h1>
        <p className="text-muted-foreground">
          Générez des checklists d'audit intelligentes adaptées à chaque type de stock industriel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {STOCK_TYPES.map((type) => (
          <Card 
            key={type.id} 
            className={`cursor-pointer transition-all hover:shadow-md border-2 ${selectedType === type.id ? 'border-primary' : 'border-transparent'}`}
            onClick={() => setSelectedType(type.id)}
          >
            <CardContent className="p-4 flex flex-col items-center text-center gap-3">
              <div className={`p-3 rounded-full ${type.bg}`}>
                <type.icon className={`w-6 h-6 ${type.color}`} />
              </div>
              <div className="font-semibold text-sm">{type.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button 
          size="lg" 
          className="gap-2 px-8 py-6 text-lg bg-purple-600 hover:bg-purple-700 shadow-lg"
          disabled={isGenerating}
          onClick={() => handleGenerate(selectedType || undefined)}
        >
          {isGenerating ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <BrainCircuit className="w-6 h-6" />
          )}
          Générer l'Audit Expert {selectedType ? `(${STOCK_TYPES.find(t => t.id === selectedType)?.name})` : ''}
        </Button>
      </div>

      {generatedChecklist && (
        <Card className="border-purple-100 shadow-xl overflow-hidden">
          <CardHeader className="bg-purple-50/50 border-b">
            <CardTitle className="text-purple-900">Checklist Expert Générée</CardTitle>
            <CardDescription>Plan d'audit structuré par l'IA pour le contrôle des stocks</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px]">
              <div className="p-6 space-y-8">
                {generatedChecklist.map((clause: any) => (
                  <div key={clause.id} className="space-y-4">
                    <div className="flex items-center gap-3 border-b pb-2">
                      <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
                        Clause {clause.number}
                      </Badge>
                      <h3 className="font-bold text-lg">{clause.title}</h3>
                    </div>
                    
                    <div className="space-y-6 pl-4">
                      {clause.subClauses.map((sub: any) => (
                        <div key={sub.id} className="space-y-3">
                          <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            {sub.number} {sub.title}
                          </h4>
                          
                          <div className="grid gap-4 pl-6">
                            {sub.exigences.map((ex: any) => (
                              <div key={ex.id} className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                  <div className="font-medium">{ex.question}</div>
                                  <Badge className={
                                    ex.criticality === 'critique' ? 'bg-red-500' :
                                    ex.criticality === 'élevée' ? 'bg-orange-500' :
                                    'bg-blue-500'
                                  }>
                                    {ex.criticality}
                                  </Badge>
                                </div>
                                <div className="text-xs text-muted-foreground space-y-1">
                                  <p><span className="font-semibold">Risque:</span> {ex.risk}</p>
                                  <p><span className="font-semibold">Preuves:</span> {ex.expectedEvidence.join(', ')}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
