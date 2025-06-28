import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import './Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditUser(null);
  };

  const startEdit = (user) => {
    setEditUser(user);
  };

  return (
    <div className="dashboard">
      <h2>User Management Dashboard</h2>

      <UserForm
        onSave={addUser}
        editingUser={editUser}
        onUpdate={updateUser}
      />

      <UserList
        data={users}
        onDelete={deleteUser}
        onEdit={startEdit}
      />
    </div>
  );
};

export default Dashboard;
