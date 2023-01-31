export interface OrderEventWebHook {
  event:
    | 'PURCHASE_CANCELED'
    | 'PURCHASE_COMPLETE'
    | 'PURCHASE_BILLET_PRINTED'
    | 'PURCHASE_APPROVED'
    | 'PURCHASE_PROTEST'
    | 'PURCHASE_REFUNDED'
    | 'PURCHASE_CHARGEBACK'
    | 'PURCHASE_EXPIRED'
    | 'PURCHASE_DELAYED';
  data: {
    buyer: {
      email: string;
      name: string;
      checkout_phone: string;
    };
  };
}
