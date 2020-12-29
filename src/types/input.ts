export type InputVariantType = "primary";
export type InputIconSizeType = "small" | "medium" | "large";

export interface Props {
  label?: string;
  variant?: InputVariantType;
  actions?: boolean;
  error?: string;
  validation?: boolean;
  fullWidth?: boolean;
}

export interface WrapperProps {
  focused: boolean;
  error: boolean;
  fullWidth: boolean;
}

export interface PrimaryLabelProps {
  touched: boolean;
  filled: boolean;
  error: boolean;
}

export interface PrimaryInputProps {
  touched: boolean;
  filled: boolean;
}

export interface PrimaryActionsProps {
  show: boolean;
  width?: number;
}

export interface PrimaryActionProps {
  size?: InputIconSizeType;
  color?: string | "danger";
}
