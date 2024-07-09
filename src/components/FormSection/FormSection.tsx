import { FormBody } from "./styles";
import { FormSectionProps } from "./types";

function FormSection({
  expanded = false,
  header,
  children,
  className,
}: FormSectionProps) {
  return (
    <div className={className}>
      {header}
      {expanded && <FormBody>{children}</FormBody>}
    </div>
  );
}

export { FormSection };
