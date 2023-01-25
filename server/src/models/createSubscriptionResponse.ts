interface createSubscriptionResponse {
  id: number;
  date_created: Date;
  date_approved: Date;
  date_last_updated: Date;
  date_of_expiration?: any;
  money_release_date: Date;
  money_release_status?: any;
  operation_type: string;
  issuer_id: string;
  payment_method_id: string;
  payment_type_id: string;
  payment_method: PaymentMethod;
  status: string;
  status_detail: string;
  currency_id: string;
  description: string;
  live_mode: boolean;
  sponsor_id?: any;
  authorization_code?: any;
  money_release_schema?: any;
  taxes_amount: number;
  counter_currency?: any;
  brand_id?: any;
  shipping_amount: number;
  build_version: string;
  pos_id?: any;
  store_id?: any;
  integrator_id?: any;
  platform_id?: any;
  corporation_id?: any;
  collector_id: number;
  payer: Payer;
  marketplace_owner?: any;
  metadata: Metadata;
  additional_info: AdditionalInfo;
  order: Order;
  external_reference?: any;
  transaction_amount: number;
  transaction_amount_refunded: number;
  coupon_amount: number;
  differential_pricing_id?: any;
  financing_group?: any;
  deduction_schema?: any;
  installments: number;
  transaction_details: TransactionDetails;
  fee_details: FeeDetail[];
  charges_details: any[];
  captured: boolean;
  binary_mode: boolean;
  call_for_authorize_id?: any;
  statement_descriptor: string;
  card: Card;
  notification_url?: any;
  refunds: any[];
  processing_mode: string;
  merchant_account_id?: any;
  merchant_number?: any;
  acquirer_reconciliation: any[];
  point_of_interaction: PointOfInteraction;
}

interface PaymentMethod {
  id: string;
  type: string;
}

interface Identification {
  number: string;
  type: string;
}

interface Phone {
  area_code?: any;
  number?: any;
  extension?: any;
}

interface Payer {
  first_name?: any;
  last_name?: any;
  email: string;
  identification: Identification;
  phone: Phone;
  type?: any;
  entity_type?: any;
  id: string;
}

interface Metadata {}

interface AdditionalInfo {
  available_balance?: any;
  nsu_processadora?: any;
  authentication_code?: any;
}

interface Order {}

interface TransactionDetails {
  payment_method_reference_id?: any;
  net_received_amount: number;
  total_paid_amount: number;
  overpaid_amount: number;
  external_resource_url?: any;
  installment_amount: number;
  financial_institution?: any;
  payable_deferral_period?: any;
  acquirer_reference?: any;
}

interface FeeDetail {
  type: string;
  amount: number;
  fee_payer: string;
}

interface Cardholder {
  name: string;
  identification: any[];
}

interface Card {
  id?: any;
  first_six_digits: string;
  last_four_digits: string;
  expiration_month: number;
  expiration_year: number;
  date_created: Date;
  date_last_updated: Date;
  cardholder: Cardholder;
}

interface BusinessInfo {
  unit: string;
  sub_unit: string;
}

interface PointOfInteraction {
  type: string;
  business_info: BusinessInfo;
}

export default createSubscriptionResponse;
