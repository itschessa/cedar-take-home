import { Payment, PaymentSectionProps, Section } from "../types";

enum ValidationStatus {
  Default = "default",
  Valid = "valid",
  Invalid = "invalid",
}

interface PaymentInformationProps extends PaymentSectionProps {
  setExpandedSection: (section: Section) => void;
  payment: Payment;
  setPayment: (payment: Payment) => void;
}

export { ValidationStatus };
export type { PaymentInformationProps };
