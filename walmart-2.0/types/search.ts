export interface SearchResults {
  results: Results[];
  total_results: number;
  last_visible_page: number;
  parse_status_code: number;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export interface Results {
  content: Content;
}

export interface Content {
  url: string;
  organic: OrganicProduct[];
  total_results: number;
  last_visible_page: number;
  parse_status_code: number;
}
interface Price {
  price: number;
  currency: string;
}

interface Rating {
  count: number;
  rating: number;
}

interface Seller {
  name: string;
}

export interface OrganicProduct {
  url: string;
  price: Price;
  title: string;
  rating: Rating;
  seller: Seller;
  product_id: string;
}
