export type ButtonVariants = "primary" | "secondary" | "tertiary";

export interface Props {
  fullWidth?: boolean;
  loading?: boolean;
  variant?: ButtonVariants;
}

export interface WrapperProps {
  fullWidth: boolean;
  isLoading: boolean;
}
