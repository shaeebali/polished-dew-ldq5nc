import  { User } from "../types/User";

// export async function getUsers(): Promise<User[]> {
//   return (
//     await fetch("https://tech-interview-api-ultramed.vercel.app/users")
//   ).json();

// }



// export const getUsers = async (): Promise<User[]> => {
//   const response = await fetch("https://tech-interview-api-ultramed.vercel.app/users");
//   const data = await response.json();
//   return data;
// };

//Interface move to /types directory as being used as an import.
//forgot to add a try catch block. Added it below:
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("https://tech-interview-api-ultramed.vercel.app/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Rethrow the error to be handled by the caller if needed
  }
};
