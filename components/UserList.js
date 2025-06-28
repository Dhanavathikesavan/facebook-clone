import React from 'react';

const UserList = ({ data, onDelete, onEdit }) => {
  return (
    <table className="user-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button className="edit-btn" onClick={() => onEdit(user)}>Edit</button>
          <button className="delete-btn" onClick={() => onDelete(user.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  );
};

export default UserList;
