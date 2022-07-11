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

export const isPositiveNumber = (value: string | number) => {
  if (!value && value !== 0) {
    return undefined;
  }
  return typeof value === "number" && value > 0
    ? undefined
    : ("Must be a postive number" as string);
};

export const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min: number) => (value: string) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const validJSON = (value: string) => {
  if (!value) {
    return undefined;
  }
  try {
    JSON.parse(value);
    return undefined;
  } catch (error) {
    return "Invalid JSON";
  }
};

export const searchMinLength = (value: string) =>
  !value || value.length < 4
    ? "Search must be with 4 characters or more"
    : undefined;

export const isNumber = (value: string) =>
  value && Number.isNaN(Number(value)) ? "Must be a number" : undefined;

export const minValue = (min: number) => (value: number) =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const matchOtherField =
  (otherField: string) => (value: string, allValues: Record<string, unknown>) =>
    get(allValues, [otherField]) === value ? undefined : "Not Matching";

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

export const alphaNumeric = (value: string) =>
  value && /[^a-zA-Z0-9]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export const noSpaces = (value: string) =>
  value && /[\s]/i.test(value) ? "No spaces allowed" : undefined;

export const isAlphabeticMaybeHyphen = (value: string) =>
  value && /[^a-zA-Z-]/i.test(value)
    ? "Only alphabets and hypens are allowed"
    : undefined;

export const isSlug = (value: string) =>
  value && /[^a-z0-9-]/.test(value)
    ? "Only small letters alphabets, numbers and hypens are allowed"
    : undefined;

export const isEmail = (value: string) =>
  value && value.match(/\S+@\S+\.\S+/) ? undefined : "Invalid Email";

export const isValidPassword = (value: string) => {
  if (!value) {
    return undefined;
  }

  if (value.length < 8) {
    return "Must be at least 8 characters";
  }

  if (!/(?=.*[a-z])/.test(value)) {
    return "Must contain at least 1 lowercase";
  }

  if (!/(?=.*[A-Z])/.test(value)) {
    return "Must contain at least 1 uppercase";
  }

  if (!/(?=.*\d)/.test(value)) {
    return "Must contain a number";
  }

  if (!/(?=.*[!@#$%^&*])/.test(value)) {
    return "Must contain symbols";
  }
  return undefined;
};

// TODO https://github.com/ruimarinho/google-libphonenumber/tree/1e46138878cff479aafe2ce62175c6c49cb58720
export const isPhoneNumber = (value: string) =>
  value && !/^([0-9]{11})$/i.test(value)
    ? "Invalid phone number, must be 11 digits"
    : undefined;

export const minLength2 = minLength(2);

export const maxLength32 = maxLength(32);

export const maxLength64 = maxLength(64);

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
//     const { data: alreadyUsed } = await RequestService.post('validations', {
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
  (value: string) =>
    validators.reduce(
      (error: any, validator) => error || validator(value),
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
