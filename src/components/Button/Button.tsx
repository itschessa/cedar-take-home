import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

function Button({ onClick, className, children: buttonText }: ButtonProps) {
  return (
    <StyledButton $size="small" $bold onClick={onClick} className={className}>
      {buttonText}
    </StyledButton>
  );
}

export { Button };
