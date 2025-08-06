import { useState } from 'react';
import UserForm, { type User } from './components/userForm';
import UserTable from './components/userTable';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);

  const handleAddUser = (user: Omit<User, 'id'>) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (user: User) => {
    setUserToEdit(user);
  };

  const handleUpdateUser = (updatedUser: Omit<User, 'id'>) => {
    if (!userToEdit) return;
    setUsers(
      users.map((user) =>
        user.id === userToEdit.id ? { ...updatedUser, id: userToEdit.id } : user
      )
    );
    setUserToEdit(undefined);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-400">
        User Management System
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-500 pb-2">
            {userToEdit ? 'Edit User' : 'Add New User'}
          </h2>
          <UserForm
            key={userToEdit ? userToEdit.id : 'add-form'}
            onSubmit={userToEdit ? handleUpdateUser : handleAddUser}
            initialData={userToEdit}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-500 pb-2">
            {' '}
            All Users
          </h2>
          <UserTable
            users={users}
            onDelete={handleDeleteUser}
            onEdit={handleEditUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
