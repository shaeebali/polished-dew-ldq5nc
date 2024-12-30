import { User } from "../types/User";
import { useState } from "react";

function paginateUsers(
  usersList: User[] | undefined,
  page: number,
  pageSize: number,
) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
 
  const pageUsers = usersList?.slice(start, end);
  const totalPages = usersList===undefined ? 0 : Math.ceil(usersList.length / pageSize);
  return { pageUsers, totalPages };
}

export const UserTable = ({ userData, filteredUsers, isLoading }: { userData: User[] | undefined, filteredUsers: User[], isLoading: boolean }) => {
  
  const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
   
    const { totalPages, pageUsers } = paginateUsers(
      userData=filteredUsers.length > 0 ? filteredUsers : userData,
      page,
      pageSize,
    );

  return (
    <div className="flex flex-col items-center pt-4 w-full h-full">
      {isLoading ? (
        <p aria-live="polite">Loading User Data...</p>
      ) : (
        <table className="table-auto w-full h-full" aria-label="Table dispaying user data">
          <thead className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <tr>
              <th aria-label="User ID">ID</th>
              <th aria-label="User Name">Name</th>
              <th aria-label="User Email">Email</th>
              <th aria-label="User Status">Status</th>
            </tr>
          </thead>
          <tbody>
            {pageUsers?.map((user) => (
              <tr key={user.id} className="even:bg-slate-800">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="pagination pt-2" aria-label="Pagination Controls">
        <select
          aria-label="Select number of rows per page"
          onChange={(event) => {
            setPageSize(Number(event.target.value));
            setPage(1);
          }}>
          {[5, 10, 20].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
        <div className="pages pt-2" aria-label="Page navigation">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}>
            Prev
          </button>
          <span aria-label="Page number">
            Page {page} of {totalPages}
          </span>
          <button
            aria-label="Next page"
            disabled={page === totalPages}
            onClick={() => {
              setPage(page + 1);
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
