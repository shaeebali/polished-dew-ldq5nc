import { useState } from "react";
import { useQuery } from "react-query";
import { getUsers, User } from "../api/getUsers";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, data } = useQuery<User[]>(["users"], getUsers);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredUsers = isLoading ? [] : data?.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
   );
   setFilteredUsers(filteredUsers || []);
  };

  return (
    <div>
      <div>
      <h1 className="pb-2">Search User Data:</h1>
      <input
        className="pt-1 pb-1"
        type="text"
        placeholder="Type to Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      </div>
      <ul className="pt-2">
        {filteredUsers.map((user) => (
          <li key={user.id}>id: {user.id} | Name: {user.name} | {user.email} | Status: {user.status}</li>
          ))}
      </ul>
    </div>
  );
};  
