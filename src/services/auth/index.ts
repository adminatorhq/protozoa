import { StorageService } from "../storage";

const AUTH_CONSTANTS = {
  JWT_TOKEN_STORAGE_KEY: "__auth__",
};

export const AuthService = {
  isAuthenticated: (): boolean => !!AuthService.getAuthToken(),
  getAuthToken: (): string | null =>
    StorageService.getString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY),
  setAuthToken: (token: string): void =>
    StorageService.setString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY, token),
  removeAuthToken: (): void =>
    StorageService.removeString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY),
};
