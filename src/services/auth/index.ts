import { StorageService } from '../storage';

const AUTH_CONSTANTS = {
  JWT_TOKEN_STORAGE_KEY: "__auth__"
}

export const AuthService = {
  isAuthenticated: (): boolean => {
    return !!AuthService.getAuthToken();
  },
  getAuthToken: (): string | null => {
    return StorageService.getString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY);
  },
  setAuthToken: (token: string): void => {
    return StorageService.setString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY, token);
  },
  removeAuthToken: (): void => {
    return StorageService.removeString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY);
  },
};
