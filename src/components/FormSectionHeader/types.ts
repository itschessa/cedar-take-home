import { ReactElement } from "react";
import { ButtonProps } from "../Button/types";

enum Status {
  Active = "active",
  Inactive = "inactive",
  Disabled = "disabled",
}

interface FormSectionHeaderProps {
  status: `${Status}`;
  sectionNumber: number;
  children: string;
  button?: ReactElement<ButtonProps>;
}

export { Status };
export type { FormSectionHeaderProps };
