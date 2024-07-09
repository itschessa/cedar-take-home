enum Variant {
  Primary = "primary",
  Text = "text",
}

interface ButtonProps {
  onClick: () => void;
  children: string;
  variant?: `${Variant}`;
  className?: string;
}

export { Variant };
export type { ButtonProps };
