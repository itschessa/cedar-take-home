import { useState } from "react";
import { Container } from "./styles";
import { PaymentReview } from "./PaymentReview/PaymentReview";
import { Section } from "./types";
import { PaymentInformation } from "./PaymentInformation/PaymentInformation";

function Payment() {
  const [expandedSection, setExpandedSection] = useState<Section>(
    Section.Payment
  );

  return (
    <Container>
      <PaymentInformation
        expanded={expandedSection === Section.Payment}
        setExpandedSection={setExpandedSection}
      />
      <PaymentReview expanded={expandedSection === Section.Review} />
    </Container>
  );
}

export { Payment };
