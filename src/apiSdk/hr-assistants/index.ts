import queryString from 'query-string';
import { HrAssistantInterface, HrAssistantGetQueryInterface } from 'interfaces/hr-assistant';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHrAssistants = async (
  query?: HrAssistantGetQueryInterface,
): Promise<PaginatedInterface<HrAssistantInterface>> => {
  return fetcher('/api/hr-assistants', {}, query);
};

export const createHrAssistant = async (hrAssistant: HrAssistantInterface) => {
  return fetcher('/api/hr-assistants', { method: 'POST', body: JSON.stringify(hrAssistant) });
};

export const updateHrAssistantById = async (id: string, hrAssistant: HrAssistantInterface) => {
  return fetcher(`/api/hr-assistants/${id}`, { method: 'PUT', body: JSON.stringify(hrAssistant) });
};

export const getHrAssistantById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/hr-assistants/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteHrAssistantById = async (id: string) => {
  return fetcher(`/api/hr-assistants/${id}`, { method: 'DELETE' });
};
