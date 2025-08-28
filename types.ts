export interface PricingPlan {
  name: string;
  price: string;
  billingInfo: string;
  features: string[];
  isFeatured?: boolean;
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
  pricingPlans: PricingPlan[];
  aiInsight: string;
}
