export const StorageService = {
  getString: (path: string): string | null => {
    return window.localStorage.getItem(path);
  },
  setString: (path: string, value: string): void => {
    return window.localStorage.setItem(path, value);
  },
  removeString: (path: string): void => {
    return window.localStorage.removeItem(path);
  },
};
