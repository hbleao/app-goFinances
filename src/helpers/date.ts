export function formattedDateAndTime(date: Date) {
  return Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  }).format(new Date(date));
}

export function formattedDateByMonth(date: Date) {
  return date.toLocaleString('pt-BR', { month: 'long' });
}
