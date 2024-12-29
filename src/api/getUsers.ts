import  { User } from "../types/User";

// export async function getUsers(): Promise<User[]> {
//   return (
//     await fetch("https://tech-interview-api-ultramed.vercel.app/users")
//   ).json();

// }

//Interface move to /types directory as being used as an import.

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://tech-interview-api-ultramed.vercel.app/users");
  const data = await response.json();
  return data;
};


