/**
 * Centralized Configuration for Food Doctor Application
 * All API endpoints, settings, and external resources defined here
 */

// Backend API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://127.0.0.1:8000',
  ENDPOINTS: {
    SEARCH: '/api/v1/search',
    ANALYZE: '/api/v1/analyze/product',
    PRODUCT: '/api/v1/product',
    OCR: '/api/v1/ocr',
    BARCODE: '/api/v1/barcode',
  },
} as const;

// External APIs
export const EXTERNAL_APIS = {
  OPEN_FOOD_FACTS: {
    BASE_URL: 'https://world.openfoodfacts.org/api/v0',
    PRODUCT: (barcode: string) => `${EXTERNAL_APIS.OPEN_FOOD_FACTS.BASE_URL}/product/${barcode}.json`,
  },
} as const;

// Application Settings
export const APP_SETTINGS = {
  DEFAULT_SEARCH_LIMIT: 5,
  SEARCH_LIMITS: [5, 10, 20, 50],
  THEME: {
    STORAGE_KEY: 'fdark',
    DEFAULT: 'light',
  },
  SETTINGS: {
    STORAGE_KEY: 'fd_settings',
  },
} as const;

// Popular Indian Products for "Try These" section
export const TOP_PRODUCTS = [
  { name: 'Maggi Noodles', barcode: '8901058851441' },
  { name: 'Parle G', barcode: '8901719110009' },
  { name: 'Amul Butter', barcode: '8901430000116' },
  { name: 'Bournvita', barcode: '8901719110016' },
  { name: 'Britannia Good Day', barcode: '8901063018976' },
  { name: 'Dairy Milk', barcode: '8901719110023' },
  { name: 'Lays Classic', barcode: '8901491101516' },
  { name: 'Kissan Jam', barcode: '8901491101523' },
] as const;

// External Health Resources
export const HEALTH_RESOURCES = {
  FSSAI: {
    name: 'FSSAI - Food Safety and Standards Authority of India',
    url: 'https://www.fssai.gov.in/',
    description: 'Official food safety standards and regulations',
  },
  WHO_NUTRITION: {
    name: 'WHO - Healthy Diet',
    url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
    description: 'World Health Organization nutrition guidelines',
  },
  NUTRITION_DATA: {
    name: 'Nutritionix Database',
    url: 'https://www.nutritionix.com/',
    description: 'Comprehensive nutrition database',
  },
  OPEN_FOOD_FACTS_ORG: {
    name: 'Open Food Facts',
    url: 'https://world.openfoodfacts.org/',
    description: 'Free food products database',
  },
} as const;

// Helper function to build full API URL
export function getApiUrl(endpoint: keyof typeof API_CONFIG.ENDPOINTS, path?: string): string {
  const baseEndpoint = API_CONFIG.ENDPOINTS[endpoint];
  if (path) {
    return `${API_CONFIG.BASE_URL}${baseEndpoint}/${path}`;
  }
  return `${API_CONFIG.BASE_URL}${baseEndpoint}`;
}
