import { useState } from "react";
import { Container } from "./styles";
import { PaymentReview } from "./PaymentReview/PaymentReview";
import { Section, Payment as PaymentData } from "./types";
import { PaymentInformation } from "./PaymentInformation/PaymentInformation";

function Payment() {
  const [expandedSection, setExpandedSection] = useState<Section>(
    Section.Payment
  );
  const [payment, setPayment] = useState<PaymentData>({});

  return (
    <Container>
      <PaymentInformation
        expanded={expandedSection === Section.Payment}
        setExpandedSection={setExpandedSection}
        payment={payment}
        setPayment={setPayment}
      />
      <PaymentReview
        expanded={expandedSection === Section.Review}
        payment={payment}
      />
    </Container>
  );
}

export { Payment };
