import clsx from "clsx";

export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return clsx(...classes);
}