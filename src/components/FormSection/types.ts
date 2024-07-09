import { ReactElement, ReactNode } from "react";
import { FormSectionHeaderProps } from "../FormSectionHeader/types";

interface FormSectionProps {
  expanded?: boolean;
  header: ReactElement<FormSectionHeaderProps>;
  children: ReactNode;
  className?: string;
}

export type { FormSectionProps };
