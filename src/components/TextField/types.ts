import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { ValidationStatus } from "../../pages/Payment/PaymentInformation/types";

interface TextFieldProps {
  id: string;
  label: string;
  value?: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  validationStatus?: ValidationStatus;
  type?: HTMLInputTypeAttribute;
}

export type { TextFieldProps };
