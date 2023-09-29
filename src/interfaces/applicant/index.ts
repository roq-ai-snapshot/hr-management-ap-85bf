import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ApplicantInterface {
  id?: string;
  application_date: any;
  position_applied: string;
  resume: string;
  status: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface ApplicantGetQueryInterface extends GetQueryInterface {
  id?: string;
  position_applied?: string;
  resume?: string;
  status?: string;
  user_id?: string;
  company_id?: string;
}
