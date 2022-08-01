import { StorageService } from ".";
import { StringUtils } from "../../utils";

const PREFIX =
  process.env.NEXT_PUBLIC_APP_STORAGE_PREFIX || "__cardinal_app_config__";

export const AppStorage = {
  getKey: (key: string, entity = ""): string => {
    const storageKey = `${PREFIX}${key}`;
    return StringUtils.sluggify(
      entity ? `${storageKey}_${entity}` : storageKey,
      "_"
    );
  },
  set: (
    value: Record<string, unknown> | unknown[],
    key: string,
    entity?: string
  ) => {
    StorageService.setString(
      AppStorage.getKey(key, entity),
      JSON.stringify(value)
    );
  },
  get: (key: string, entity?: string) => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const data = StorageService.getString(AppStorage.getKey(key, entity));
    if (!data) {
      return undefined;
    }
    return JSON.parse(data);
  },
};
