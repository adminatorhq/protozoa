/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
// Sure there are plenty libraries that do a better job at this but I just want to be lazy this once
export const MutationHelpers = {
  append: <T, K>(old: T[] | undefined = [], formData: K) => [...old, formData],
  mergeArray: <T, K>(old: T[] | undefined = [], formData: K[] = []) => [...old, ...formData],
  mergeObject: <T, K extends Partial<T>>(
    old: T | undefined,
    formData: K,
  ): T => ({ ...old, ...formData } as unknown) as T,
  replace: <T>(_: T, formData: T) => formData,
  update: (currentDataId: string) => <T extends { id: string }, K>(
    old: T[] | undefined = [],
    formData: K,
  ) => {
    const index = old.findIndex(({ id }) => id === currentDataId);
    if (index > -1) {
      old[index] = { ...old[index], ...formData };
    }
    return [...old];
  },
  delete: (currentDataId: string) => <T extends { id: string }>(
    old: T[] | undefined = [],
  ) => [...old.filter(({ id }) => currentDataId !== id)],
  removeMany: <T>(old: T[] | undefined = [], formData: T[]) => [
    ...old.filter((oldItem) => !formData.includes(oldItem)),
  ],
};
