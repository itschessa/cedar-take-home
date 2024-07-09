import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

function Button({
  onClick,
  className,
  children: buttonText,
  variant = "primary",
}: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size="small"
      $bold
      onClick={onClick}
      className={className}
    >
      {buttonText}
    </StyledButton>
  );
}

export { Button };
