import { FormSectionHeader } from "../../../components/FormSectionHeader/FormSectionHeader";
import { Button } from "../../../components/Button/Button";
import { PaymentInformationProps } from "./types";
import { Section } from "../types";
import { PaymentSection } from "./styles";

function PaymentInformation({
  expanded,
  setExpandedSection,
}: PaymentInformationProps) {
  const handleContinueClick = () => setExpandedSection(Section.Review);

  const handleEditClick = () => setExpandedSection(Section.Payment);

  const SectionHeader = (
    <FormSectionHeader
      sectionNumber={1}
      status={expanded ? "active" : "inactive"}
      button={
        expanded ? undefined : (
          <Button onClick={handleEditClick} variant="text">
            Edit
          </Button>
        )
      }
    >
      Payment information
    </FormSectionHeader>
  );

  return (
    <PaymentSection expanded={expanded} header={SectionHeader}>
      <div>content</div>
      <Button onClick={handleContinueClick}>Continue</Button>
    </PaymentSection>
  );
}

export { PaymentInformation };
