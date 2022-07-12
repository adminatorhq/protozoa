type ToastMessageInput =
  | { message: string; action: { label: string; action: () => void } }
  | "string";

export interface IApiMutateOptions<T, K> {
  dataQueryPath: string;
  otherEndpoints?: string[];
  isOnMockingMode?: true;
  onMutate: (oldData: T | undefined, form: K) => T;
  successMessage?: ToastMessageInput;
  smartSuccessMessage?: (formData: K) => ToastMessageInput;
  onSuccessActionWithFormData?: (formData: K) => void;
}

export interface IWaitForResponseMutationOptions<T> {
  endpoints: string[];
  redirect?: string;
  onSuccessActionWithFormData?: (formData: T) => void;
  successMessage?: ToastMessageInput;
  smartSuccessMessage?: (formData: T) => ToastMessageInput;
}
