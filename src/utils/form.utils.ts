import { FormApi } from "final-form";

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
