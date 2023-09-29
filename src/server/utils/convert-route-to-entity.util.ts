const mapping: Record<string, string> = {
  applicants: 'applicant',
  companies: 'company',
  employees: 'employee',
  'hr-assistants': 'hr_assistant',
  'hr-managers': 'hr_manager',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
