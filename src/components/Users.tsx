import { useQuery } from "react-query";
import { getUsers, User } from "../api/getUsers";

export const Users = () => {
  const { isLoading, data } = useQuery<User[]>(["users"], getUsers);
  console.log(isLoading);
  console.log(data);

return (
    <div>
      <h1>User Data As List:</h1>
      {isLoading ? (
        <p>Loading User Data...</p>
      ) : (
        <div>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>id: {user.id} | Name: {user.name} | {user.email} | Status: {user.status}</li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};
