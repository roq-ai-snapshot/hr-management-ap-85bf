import { ApplicantInterface } from 'interfaces/applicant';
import { EmployeeInterface } from 'interfaces/employee';
import { HrAssistantInterface } from 'interfaces/hr-assistant';
import { HrManagerInterface } from 'interfaces/hr-manager';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  applicant?: ApplicantInterface[];
  employee?: EmployeeInterface[];
  hr_assistant?: HrAssistantInterface[];
  hr_manager?: HrManagerInterface[];
  user?: UserInterface;
  _count?: {
    applicant?: number;
    employee?: number;
    hr_assistant?: number;
    hr_manager?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
