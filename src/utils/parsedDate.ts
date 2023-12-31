
import { parseISO } from 'date-fns';

export const handleParsedDate = (date: string) => {
  if (!date) {
    return 0;
  }
  const parsedDate = parseISO(date);

  const brtDate = new Date(parsedDate.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));

  return brtDate;
}
