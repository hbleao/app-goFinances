import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatorio'),
  amount: Yup.number().positive('O valor não pode ser negativo').required('Preço é obrigatorio')
});