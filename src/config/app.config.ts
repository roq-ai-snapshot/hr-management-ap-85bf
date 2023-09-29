interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'HR Assistant', 'Applicant'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View employee information',
    'View own user information',
    'Submit application',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage employee data', 'Manage applicant data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e7aaf01c-bfe3-46ca-b746-cf9763a2ca7e',
};
