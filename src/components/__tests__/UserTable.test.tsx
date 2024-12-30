import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserTable } from '../UserTable';
import { User } from '../../types/User';

describe('UserTable Component', () => {
  // Check if the component renders the loading message when isLoading is true
  test('when isLoading is true shows loading message', () => {
    render(
      <UserTable
        userData={undefined}
        filteredUsers={[]}
        isLoading={true}
      />
    );

    const loadingElement = screen.getByText(/Loading User Data.../i);
    expect(loadingElement).toBeInTheDocument();
  });
  
  test('renders data correctly when not loading and no filtered users', () => {
    const mockUsers: User[] = [
      { id: 1, name: 'John', email: 'john@gmail.com', status: 'Active' },
      { id: 2, name: 'Adam', email: 'adam@gmail.com', status: 'Inactive' },
      { id: 3, name: 'Jane', email: 'jane@gmail.com', status: 'Invite Expired' },
    ];
  
    render(
      <UserTable
        userData={mockUsers}
        filteredUsers={[]}
        isLoading={false}
      />
    );
  
    // Check if table headers are present
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  
    // Check if user data is rendered
    mockUsers.forEach((user) => {
      expect(screen.getByText(user.id.toString())).toBeInTheDocument();
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.status)).toBeInTheDocument();
    });
  });
  
  // Expecting this to fail as no message feature is not implemented when no users are shown
  test('renders filtered users when filteredUsers is not empty', () => {
    const mockUserData: User[] = [
      { id: 1, name: 'Alice', email: 'alice@example.com', status: 'Active' },
      { id: 2, name: 'Bob', email: 'bob@example.com', status: 'Inactive' },
    ];
  
    const mockFilteredUsers: User[] = [
      { id: 3, name: 'Charlie', email: 'charlie@example.com', status: 'Active' },
    ];
  
    render(
      <UserTable
        userData={mockUserData}
        filteredUsers={mockFilteredUsers}
        isLoading={false}
      />
    );
  
    // Ensure filtered users are rendered
    mockFilteredUsers.forEach((user) => {
      expect(screen.getByText(user.id.toString())).toBeInTheDocument();
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.status)).toBeInTheDocument();
    });
  
    // Ensure original user data is not rendered
    mockUserData.forEach((user) => {
      expect(screen.queryByText(user.name)).not.toBeInTheDocument();
    });
  });
  
  test('displays message when no users are available', () => {
    render(
      <UserTable
        userData={[]}
        filteredUsers={[]}
        isLoading={false}
      />
    );
  
    const noUsersMessage = screen.getByText(/No users available./i);
    expect(noUsersMessage).toBeInTheDocument();
  });
  
});
