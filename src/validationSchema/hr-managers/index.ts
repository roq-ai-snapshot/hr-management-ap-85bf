import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  managed_employees: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
