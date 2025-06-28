import React, { useEffect, useState } from 'react';

const UserForm = ({ onSave, editingUser, onUpdate }) => {
  const [details, setDetails] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editingUser) {
      setDetails(editingUser);
    } else {
      setDetails({ name: '', email: '' });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editingUser ? onUpdate(details) : onSave(details);
    setDetails({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={details.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={details.email}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {editingUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
