export interface Props {
  tableData: any[];
  headingColumns: string[];
  breakOn?: "small" | "medium" | "large";
  actions?: boolean;
  onEdit?: (id: string) => void;
  onView?: (id: string) => void;
  onDelete?: (id: string) => void;
}
