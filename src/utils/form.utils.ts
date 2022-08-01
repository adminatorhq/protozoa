import { FormApi } from "final-form";
import { StringUtils } from "./strings.utils";

export function resetFormValues<T extends Record<string, string>>(
  resetForm: boolean,
  values: T,
  form: FormApi<T, Partial<T>>
) {
  form.batch(() => {
    if (resetForm && values) {
      Object.keys(values).forEach((field: string) => {
        if (field === "id") {
          return;
        }
        form.change(field, undefined);
        form.resetFieldState(field);
      });
    }
  });
}

export const mutateFormValueANewId = (values: Record<string, string>) => {
  const id = StringUtils.generateUUID();
  // eslint-disable-next-line no-param-reassign
  values.id = id;
  return id;
};
