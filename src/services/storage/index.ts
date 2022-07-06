export const StorageService = {
  getString: (path: string): string | null => window.localStorage.getItem(path),
  setString: (path: string, value: string): void => window.localStorage.setItem(path, value),
  removeString: (path: string): void => window.localStorage.removeItem(path),
};
