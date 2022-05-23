export const ButtonLang = {
  cancel: 'Cancel',
  create: 'Create',
  update: 'Update',
  createOrUpdate: (hasValues: unknown) => (!!hasValues ? 'Update' : 'Create'),
};
