import { Container, SectionNumber } from "./styles";
import { FormSectionHeaderProps } from "./types";

function FormSectionHeader({
  status,
  sectionNumber,
  children: title,
  button,
}: FormSectionHeaderProps) {
  return (
    <Container $status={status} $size="medium" $bold>
      <SectionNumber $status={status}>{sectionNumber}</SectionNumber>
      {title}
      {button}
    </Container>
  );
}

export { FormSectionHeader };
