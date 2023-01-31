export interface subscriptionPaidWebHook {
  oldStatus: string;
  currentStatus: string;
  type: string;
  event: string;
  product: Product;
  sale: Sale;
  seller: Seller;
  client: Client;
  saleMetas: SaleMeta[];
}

interface Product {
  affiliation_proposal: number;
  description: string;
  allow_proposal: number;
  created_at: string;
  is_active: number;
  period: number;
  updated_at: string;
  thank_you_page: string;
  amount: number;
  id: number;
  affiliation_public: number;
  affiliation_approbation: number;
  proposal_minimum: number;
  type: string;
  method: string;
  name: string;
}

interface Coupon {
  id: number;
  seller_id: number;
  name: string;
  type: string;
  amount: number;
  only_products: number;
  limit: number;
  due_date: string;
  created_at: string;
  updated_at: string;
  is_active: number;
  deleted_at: string;
}

interface Sale {
  status: string;
  seller_id: number;
  created_at: string;
  updated_at: string;
  method: string;
  amount: number;
  client_id: number;
  installments: number;
  type: string;
  id: number;
  coupon: Coupon;
}

interface Seller {
  cellphone: string;
  email: string;
  name: string;
  id: number;
}

interface Client {
  city: string;
  neighborhood: string;
  name: string;
  cellphone: string;
  updated_at: string;
  created_at: string;
  number: string;
  zipcode: string;
  email: string;
  street: string;
  cpf_cnpj: string;
  complement: string;
  uf: string;
  id: number;
}

interface SaleMeta {
  id: number;
  sale_id: number;
  meta_key: string;
  meta_value: string;
  created_at: string;
  updated_at: string;
}
