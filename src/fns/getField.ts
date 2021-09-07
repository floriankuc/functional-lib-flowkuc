export type TGetField = (attr: string) => (o: { [key: string]: any }) => typeof o;

export const getField: TGetField = (attr) => (o): typeof o => o[attr];
