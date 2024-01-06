import axios from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
}
export async function getUsers(): Promise<User[]> {
  const response = await axios.get<User[]>("https://localhost:3000/users");
  console.log(response.data);
  return response.data;
}
