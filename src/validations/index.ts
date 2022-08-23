import get from "lodash/get";

export const required = (value: string) =>
  value || typeof value === "number" || typeof value === "boolean"
    ? undefined
    : ("Required" as string);

export const requiredIf = (check: boolean) => (value: string) => {
  if (check) {
    return required(value);
  }
  return undefined;
};

export const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min: number) => (value: string) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const isNumber = (value: string) =>
  value && Number.isNaN(Number(value)) ? "Must be a number" : undefined;

export const minValue = (min: number) => (value: number) =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const lessThanValueOf =
  (otherField: string, allValues: Record<string, unknown>, name: string) =>
  (value: string) => {
    if (!value) {
      return undefined;
    }
    return Number(get(allValues, [otherField])) > Number(value)
      ? undefined
      : `Must be less than ${name}`;
  };

export const isEmail = (value: string) =>
  value && value.match(/\S+@\S+\.\S+/) ? undefined : "Invalid Email";

// TODO Run valudation only on blur
// export const uniqueValidation =
//   (
//     entity: UniqueValidationEntities,
//     field: string,
//     skipId?: string,
//     additionalFieldClause?: Record<string, string | undefined>,
//   ) =>
//   async (value: string) => {
//     if (!value) {
//       return undefined;
//     }
//     const { data: alreadyUsed } = await makePostRequest('validations', {
//       entity,
//       field,
//       value,
//       skipId,
//       additionalFieldClause,
//     });

//     if (alreadyUsed) {
//       return 'Already Taken' as string;
//     }
//     return undefined;
//   };

type ValidatorsTypes = (
  value: string,
  allValues?: Record<string, unknown>
) => string | Promise<string | undefined> | undefined;

export const composeValidators =
  (...validators: ValidatorsTypes[]) =>
  (value: string, allValues: Record<string, unknown>) =>
    validators.reduce(
      (error: any, validator) => error || validator(value, allValues),
      undefined
    );

export const VALIDATION_LENGTH = {
  DESCRIPTION: 1000,
  NAMES: 32,
  EMAILS: 64,
  LINKS: 64,
  ZIPCODE: 12,
  PHONE_NUMBER: 24,
};
