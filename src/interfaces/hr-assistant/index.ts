import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface HrAssistantInterface {
  id?: string;
  start_date: any;
  end_date?: any;
  assigned_tasks: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface HrAssistantGetQueryInterface extends GetQueryInterface {
  id?: string;
  assigned_tasks?: string;
  user_id?: string;
  company_id?: string;
}
