export const handleCall = () => {
  const phoneNumber = '+48608450246';
  window.location.assign(`tel:${phoneNumber}`);
};
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
