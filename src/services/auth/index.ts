import { StorageService, TemporayStorageService } from "../storage";

const AUTH_CONSTANTS = {
  JWT_TOKEN_STORAGE_KEY: "__auth-token__",
};

export const AuthService = {
  isAuthenticated: (): boolean => !!AuthService.getAuthToken(),
  getAuthToken: (): string | null =>
    TemporayStorageService.getString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY) ||
    StorageService.getString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY),
  setAuthToken: (token: string, permanent?: boolean): void => {
    TemporayStorageService.setString(
      AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY,
      token
    );
    if (permanent) {
      StorageService.setString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY, token);
    }
  },
  removeAuthToken: (): void => {
    StorageService.removeString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY);
    TemporayStorageService.removeString(AUTH_CONSTANTS.JWT_TOKEN_STORAGE_KEY);
  },
};
