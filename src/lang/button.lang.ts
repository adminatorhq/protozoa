export const ButtonLang = {
  cancel: 'Cancel',
  create: 'Create',
  update: 'Update',
  upsert: 'Save',
  createOrUpdate: (hasValues: unknown) => (hasValues ? 'Update' : 'Create'),
};
