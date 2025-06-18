import { format } from "date-fns";

export const formatDate = (stringDate) => {
  return stringDate ? format(new Date(stringDate), "MMM dd, yyyy") : "";
}