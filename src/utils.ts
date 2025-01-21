import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RESUME_URL } from "./consts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getResume() {
  const contentRes = await fetch(RESUME_URL);
  if (!contentRes.ok) throw new Error("Failed to fetch resume");
  const blob = await contentRes.blob();
  // @ts-ignore
  window.resumeBlob = blob;
}
