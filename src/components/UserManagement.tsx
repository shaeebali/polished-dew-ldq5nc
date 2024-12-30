
import React, { useState } from 'react';
import { SearchBar } from "./SearchBar";
import { UserTable } from "./UserTable";
import { useQuery } from "react-query";
import { getUsers } from "../api/getUsers";
import { User } from "../types/User";

const UserManagement: React.FC = () => {
  
  const { isLoading, data } = useQuery<User[] | undefined>(["users"], getUsers);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  
  return (
        <div>
            <SearchBar userData={data} setFilteredUsers={setFilteredUsers} />
            <UserTable userData={data} isLoading={isLoading} filteredUsers={filteredUsers} />
        </div>
    );
};

export default UserManagement;
