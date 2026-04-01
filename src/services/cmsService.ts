import { CMSData } from "../types";

export async function getCMSData(): Promise<CMSData> {
  const response = await fetch("/api/cms");
  if (!response.ok) throw new Error("Failed to fetch CMS data");
  return response.json();
}

export async function updateCMSData(data: CMSData): Promise<void> {
  const response = await fetch("/api/cms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update CMS data");
}
