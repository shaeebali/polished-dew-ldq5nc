import { useQuery } from "react-query";
import { getUsers, User } from "./getUsers";

export const Users = () => {
  const { isLoading, data } = useQuery<User[]>(["users"], getUsers);
  console.log(isLoading);
  console.log(data);

return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
