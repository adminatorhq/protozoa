export const TitleLang = {
  create: (singular: string) => `Create ${singular}`,
  manage: (plural: string) => `Manage All ${plural}`,
  edit: (plural: string) => `Edit ${plural}`,
  addOrRemove: (isPresent: boolean, entity: string) =>
    isPresent ? `Remove ${entity}` : `Add ${entity}`,
  createFor: (singular1: string, singular2: string) =>
    `Create And Link New ${singular1} For This ${singular2}`,
  details: (singular: string) => `${singular} Details`,
  countSuffix: (title: string, count: number) => {
    const countSuffix = count > 0 ? `(${count})` : '';
    return title + countSuffix;
  },
};
