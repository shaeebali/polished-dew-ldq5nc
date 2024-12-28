export interface User {
  id: number;
  name: string;
  email: string;
  status: string;
}

// export async function getUsers(): Promise<User[]> {
//   return (
//     await fetch("https://tech-interview-api-ultramed.vercel.app/users")
//   ).json();

// }

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://tech-interview-api-ultramed.vercel.app/users");
  const data = await response.json();
  return data;
};

console.log(getUsers());
