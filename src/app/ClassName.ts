export function ClassNames(...classNames: string[]) {
  return classNames.filter(Boolean).join(" ");
}