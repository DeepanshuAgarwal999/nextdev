import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getTimeStamp = (createdAt: Date): string => {
  
  const createdAtDate =
    typeof createdAt === "string" || typeof createdAt === "number"
      ? new Date(createdAt)
      : createdAt;
  if (!(createdAtDate instanceof Date) || isNaN(createdAtDate.getTime())) {
    // Handle the case where createdAt is not a valid Date object
    return "Invalid date";
  }

  const now = new Date();
  const timeDifference = now.getTime() - createdAtDate.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (Number.isFinite(seconds) && seconds < 60) {
    return rtf.format(-seconds, "second");
  } else if (Number.isFinite(minutes) && minutes < 60) {
    return rtf.format(-minutes, "minute");
  } else if (Number.isFinite(hours) && hours < 24) {
    return rtf.format(-hours, "hour");
  } else if (Number.isFinite(days) && days < 30) {
    return rtf.format(-days, "day");
  } else if (Number.isFinite(months) && months < 12) {
    return rtf.format(-months, "month");
  } else {
    return rtf.format(-years, "year");
  }
};
export const formatAndDivideNumber = (number: number | undefined): string => {
  if (number === undefined) {
    return "0";
  }

  let formattedNumber;
  if (number >= 1000000) {
    formattedNumber = (number / 1000000).toString() + "M";
  } else if (number >= 1000) {
    formattedNumber = (number / 1000).toString() + "K";
  } else {
    formattedNumber = number.toString();
  }

  return formattedNumber;
};
