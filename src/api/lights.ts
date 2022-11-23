import { Light } from "./typings";

interface Response {
  data: Light[];
  errors: any[];
}

const BASE_URL = "http://localhost:9000";

export async function getLights(): Promise<Response> {
  const data = await fetch(`${BASE_URL}/lights`);
  return await data.json();
}

export async function toggleLight({ id, on }: { id: string; on: boolean }) {
  const data = await fetch(`${BASE_URL}/light/${id}/toggle`, {
    method: "PUT",
    body: JSON.stringify({ on }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await data.json();
}
