export interface Challenge {
  id: string;
  number: string;
  category: string;
  client: string;
  title: string;
  summary: string;
  tags: string[];
  hciFocus: string;
  cognitiveRationale: string;
  heuristics: {
    rule: string;
    description: string;
  }[];
  wcagMetrics: {
    contrast: string;
    targetSize: string;
    labelScore: string;
  };
  sampleCalculation?: {
    income: number;
    expenses: number;
    savings: number;
    savingsRate: number;
  };
}

export interface HCIPrinciple {
  id: string;
  iconName: 'visual-hierarchy' | 'consistency' | 'accessibility' | 'feedback';
  title: string;
  description: string;
  heuristicReference: string;
}

export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  description: string;
}
