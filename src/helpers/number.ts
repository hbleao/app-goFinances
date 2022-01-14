export function formattedMonetaryValue(value: string | number) {
  let internalValue = value;

  if(internalValue === typeof Number) {
    internalValue = String(internalValue);
  }

  return Number(internalValue).toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  })
}
