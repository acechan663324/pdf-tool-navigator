export interface Tag {
  name: string;
  color: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  billingInfo: string;
  features: string[];
  isFeatured?: boolean;
}

export interface Review {
  id: number;
  author: string;
  avatarUrl: string;
  rating: number;
  date: string;
  comment: string;
}

export interface PdfTool {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  website: string;
  price: number;
  priceDisplay: string;
  rating: number;
  visitors: number;
  imageUrl: string;
  tags: Tag[];
  pricingPlans: PricingPlan[];
  aiInsight: string;
  recommendationReason?: string;
  reviews?: Review[];
}