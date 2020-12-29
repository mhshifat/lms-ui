export type InputVariantType = "primary";
export type InputIconSizeType = "small" | "medium" | "large";

export interface Props {
  fullWidth?: boolean;
  defaultValue?: string;
  options?: { label: string; value: string }[];
  onValueSelect?: (value: string) => void;
}

export interface WrapperProps {
  fullWidth: boolean;
}

export interface OptionsProps {
  show: boolean;
}
