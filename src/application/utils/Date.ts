import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (value: string | Date, mask = "dd/MM/yyyy") => {
  const date = new Date(typeof value === "object" ? value.getTime() : value);
  return format(date, mask, { locale: ptBR });
};
