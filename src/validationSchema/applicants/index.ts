import * as yup from 'yup';

export const applicantValidationSchema = yup.object().shape({
  application_date: yup.date().required(),
  position_applied: yup.string().required(),
  resume: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
