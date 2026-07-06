export interface CalculatorDetails {
  id: string;
  name: string;
  description: string;
  path: string;
}

export interface SubdomainRegistry {
  id: string;
  name: string;
  baseUrl: string;
  calculators: Record<string, CalculatorDetails>;
}

export const MASTER_REGISTRY: Record<string, SubdomainRegistry> = {
  soil: {
    id: 'soil',
    name: 'Soil Tools',
    baseUrl: 'https://soil.ruralopstools.com',
    calculators: {
      'fertilizer-blender': {
        id: 'fertilizer-blender',
        name: 'Fertilizer Blender',
        description: 'Calculate custom fertilizer blends based on soil test results.',
        path: '/fertilizer-blender',
      },
      'nutrient-removal': {
        id: 'nutrient-removal',
        name: 'Nutrient Removal',
        description: 'Estimate crop nutrient removal rates per harvest.',
        path: '/nutrient-removal',
      }
    },
  },
  feed: {
    id: 'feed',
    name: 'Feed Tools',
    baseUrl: 'https://feed.ruralopstools.com',
    calculators: {
      'ration-cost': {
        id: 'ration-cost',
        name: 'Ration Cost',
        description: 'Calculate daily feed ration costs per head.',
        path: '/ration-cost',
      },
      'dry-matter': {
        id: 'dry-matter',
        name: 'Dry Matter Intake',
        description: 'Estimate daily dry matter intake based on body weight.',
        path: '/dry-matter',
      }
    },
  },
  weather: {
    id: 'weather',
    name: 'Weather',
    baseUrl: 'https://weather.ruralopstools.com',
    calculators: {
      'gdd-tracker': {
        id: 'gdd-tracker',
        name: 'GDD Tracker',
        description: 'Track Growing Degree Days for crop development forecasting.',
        path: '/gdd-tracker',
      }
    }
  },
  beef: {
    id: 'beef',
    name: 'Beef Ops',
    baseUrl: 'https://beef.ruralopstools.com',
    calculators: {
      'stocking-rate': {
        id: 'stocking-rate',
        name: 'Stocking Rate',
        description: 'Calculate pasture carrying capacity and stocking rates.',
        path: '/stocking-rate',
      }
    }
  },
  poultry: {
    id: 'poultry',
    name: 'Poultry Ops',
    baseUrl: 'https://poultry.ruralopstools.com',
    calculators: {
      'flock-projection': {
        id: 'flock-projection',
        name: 'Flock Projection',
        description: 'Estimate flock growth, feed conversion, and output.',
        path: '/flock-projection',
      }
    }
  }
};
