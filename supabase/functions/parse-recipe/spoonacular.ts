export interface Item {
  id: number;
  image: string;
  localizedName: string;
  name: string;
}

export interface Length {
  number: number;
  unit: string;
}

export interface SystemMeasure {
  amount: number;
  unitLong: string;
  unitShort: string;
}

export interface Measures {
  metric: SystemMeasure;
  us: SystemMeasure;
}

export interface ExtendedIngredient {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: Measures;
  meta: string[];
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  unit: string;
}

export interface Step {
  equipment: Item[];
  ingredients: Item[];
  length?: Length;
  number: number;
  step: string;
}

export interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

export interface SpoonacularRecipe {
  aggregateLikes: number;
  analyzedInstructions: AnalyzedInstruction[];
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: unknown[];
  dishTypes: string[];
  extendedIngredients: ExtendedIngredient[];
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  lowFodmap: boolean;
  occasions: string[];
  originalId: unknown | null;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularScore: number;
  summary: string;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
}
