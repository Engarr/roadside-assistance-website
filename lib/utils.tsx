import {twMerge} from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx';

export const handleCall = () => {
  const phoneNumber = '+48608450246';
  window.location.assign(`tel:${phoneNumber}`);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
