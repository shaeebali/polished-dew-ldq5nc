import { useState } from "react";
import { User } from "../types/User";

export const SearchBar = ({userData, setFilteredUsers}: {userData: User[] | undefined, setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredUsers = userData?.filter((user) =>
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
    </div>
  );
};  
