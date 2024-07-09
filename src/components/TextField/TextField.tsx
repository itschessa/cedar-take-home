import { Container, ErrorText, Input, Label } from "./styles";
import { TextFieldProps } from "./types";
import { ValidationStatus } from "../../pages/Payment/PaymentInformation/types";

function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  validationStatus = ValidationStatus.Default,
}: TextFieldProps) {
  return (
    <Container>
      <Label htmlFor={id} $size="extraSmall" $bold>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        aria-invalid={validationStatus === ValidationStatus.Invalid}
        aria-describedby={`${id}-error`}
        required
        $validationStatus={validationStatus}
      />
      {validationStatus === ValidationStatus.Invalid && (
        <ErrorText id={`${id}-error`} $size="extraSmall">
          This field is required
        </ErrorText>
      )}
    </Container>
  );
}

export { TextField };
