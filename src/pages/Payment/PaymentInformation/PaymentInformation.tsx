import { FormSectionHeader } from "../../../components/FormSectionHeader/FormSectionHeader";
import { Button } from "../../../components/Button/Button";
import { PaymentInformationProps, ValidationStatus } from "./types";
import { Section } from "../types";
import { FormBody, PaymentSection, TwoColumn } from "./styles";
import { ChangeEvent, useRef, useState } from "react";
import { TextField } from "../../../components/TextField/TextField";

function PaymentInformation({
  expanded,
  setExpandedSection,
  payment,
  setPayment,
}: PaymentInformationProps) {
  const [formValidations, setFormValidations] = useState<
    Record<string, ValidationStatus>
  >({
    cardNumber: ValidationStatus.Default,
    expiration: ValidationStatus.Default,
    securityCode: ValidationStatus.Default,
    name: ValidationStatus.Default,
    zip: ValidationStatus.Default,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const validateAllFields = () => {
    return Object.keys(formValidations).reduce(
      (acc: Record<string, ValidationStatus>, key) => {
        const inputElement = formRef.current?.elements.namedItem(
          key
        ) as HTMLInputElement;

        const isValid = inputElement.checkValidity();

        return {
          ...acc,
          [key]: isValid ? ValidationStatus.Valid : ValidationStatus.Invalid,
        };
      },
      {}
    );
  };

  const handleContinueClick = () => {
    const validations = validateAllFields();
    setFormValidations(validations);

    if (formRef.current?.checkValidity()) {
      setExpandedSection(Section.Review);
    }
  };

  const handleEditClick = () => setExpandedSection(Section.Payment);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const isValid = event.target.checkValidity();

    setFormValidations({
      ...formValidations,
      [name]: isValid ? ValidationStatus.Valid : ValidationStatus.Invalid,
    });

    setPayment({ ...payment, [name]: value.trim() });
  };

  const Content = (
    <FormBody ref={formRef}>
      <TextField
        id="cardNumber"
        label="Card number"
        type="number"
        value={payment.cardNumber}
        validationStatus={formValidations.cardNumber}
        onChange={handleChange}
      />
      <TwoColumn>
        <TextField
          id="expiration"
          label="Expires (MM/YY)"
          value={payment.expiration}
          validationStatus={formValidations.expiration}
          onChange={handleChange}
        />
        <TextField
          id="securityCode"
          label="Security code (CVV)"
          type="number"
          value={payment.securityCode}
          validationStatus={formValidations.securityCode}
          onChange={handleChange}
        />
      </TwoColumn>
      <TextField
        id="name"
        label="Name on card"
        value={payment.name}
        validationStatus={formValidations.name}
        onChange={handleChange}
      />
      <TextField
        id="zip"
        label="ZIP code"
        type="number"
        value={payment.zip}
        validationStatus={formValidations.zip}
        onChange={handleChange}
      />
    </FormBody>
  );

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
      {Content}
      <Button onClick={handleContinueClick}>Continue</Button>
    </PaymentSection>
  );
}

export { PaymentInformation };
