import { StorageService } from ".";
import { StringUtils } from "../../utils";

const PREFIX = process.env.NEXT_PUBLIC_APP_STORAGE_PREFIX || "_app_config__";

export const AppStorage = {
  getKey: (key: string): string => {
    return StringUtils.sluggify(`${PREFIX}${key}`, "_");
  },
  set: (key: string, value: Record<string, unknown> | unknown[]) => {
    StorageService.setString(AppStorage.getKey(key), JSON.stringify(value));
  },
  get: (key: string) => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const data = StorageService.getString(AppStorage.getKey(key));
    if (!data) {
      return undefined;
    }
    return JSON.parse(data);
  },
};
