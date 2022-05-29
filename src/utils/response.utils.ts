import get from 'lodash/get';

export const getResponseStatusCode = (error: any) =>
  get(error, ['response', 'status'], false);
