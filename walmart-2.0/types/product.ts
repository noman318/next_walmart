export interface Rating {
  count: number;
  rating: number;
}

export interface Meta {
  sku: string;
  gtin: string | null;
}

export interface Specification {
  key: string;
  value: string;
}

export interface Seller {
  id: string;
  url: string;
  name: string;
  catalog_id: string;
  official_name: string;
}

export interface ProductContent {
  url: string;
  meta: Meta;
  price: number;
  title: string;
  rating: Rating;
  seller: Seller;
  currency: string;
  _warnings: string[];
  breadcrumbs: string[];
  description: string;
  specifications: Specification[];
  parse_status_code: number;
  images: string[];
}

export interface Result {
  title: string;
  content: ProductContent;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export interface SearchResult {
  results: Result[];
}
