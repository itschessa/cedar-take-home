enum Section {
  Payment,
  Review,
}

interface Payment {
  cardNumber?: number;
  expiration?: string;
  securityCode?: number;
  name?: string;
  zip?: number;
}

interface PaymentSectionProps {
  expanded: boolean;
}

export { Section };
export type { PaymentSectionProps, Payment };
