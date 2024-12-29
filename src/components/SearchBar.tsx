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
      <h1 className="pb-6 pt-12">User Data</h1>
      <input
        className="pt-1 pb-1 text-center"
        type="text"
        placeholder="search users..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      
      </div>
      <div className="pt-4">
      <ul>
        {searchTerm && filteredUsers.map((user) => (
          <li className="pt-2 bg-slate-800" key={user.id}>id: {user.id} | Name: {user.name} | {user.email} | Status: {user.status}</li>
          ))}
      </ul>
      </div>
    </div>
  );
};  
