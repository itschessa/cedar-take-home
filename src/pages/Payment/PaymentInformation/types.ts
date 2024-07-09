import { PaymentSectionProps, Section } from "../types";

interface PaymentInformationProps extends PaymentSectionProps {
  setExpandedSection: (section: Section) => void;
}

export type { PaymentInformationProps };
