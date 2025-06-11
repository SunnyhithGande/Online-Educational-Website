import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserManagement.css';
import Header from '../Header/Header';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
<<<<<<< HEAD
    const [currentUser, setCurrentUser] = useState(null);

    const API_URL = 'http://localhost:5003';

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setCurrentUser(user);
=======

    const API_URL = 'http://localhost:5001';

    useEffect(() => {
>>>>>>> origin/main
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
<<<<<<< HEAD
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            };
            const response = await axios.get(`${API_URL}/users`, config);
=======
            const response = await axios.get(`${API_URL}/users`);
>>>>>>> origin/main
            setUsers(response.data);
            setError('');
        } catch (error) {
            console.error('Error fetching users:', error);
<<<<<<< HEAD
            setError(error.response?.data?.message || 'Failed to fetch users. Please try again.');
=======
            setError('Failed to fetch users. Please try again.');
>>>>>>> origin/main
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
<<<<<<< HEAD
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            };
            if (editingId) {
                await axios.put(`${API_URL}/users/${editingId}`, formData, config);
                setSuccess('User updated successfully');
            } else {
                await axios.post(`${API_URL}/signup`, formData, config);
=======
            if (editingId) {
                await axios.put(`${API_URL}/users/${editingId}`, formData);
                setSuccess('User updated successfully');
            } else {
                await axios.post(`${API_URL}/signup`, formData);
>>>>>>> origin/main
                setSuccess('User created successfully');
            }
            setFormData({ name: '', email: '', password: '' });
            setEditingId(null);
            fetchUsers();
            setError('');
        } catch (error) {
            console.error('Error in form submission:', error);
            setError(error.response?.data?.message || 'Operation failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (user) => {
        setFormData({
            name: user.name,
            email: user.email,
            password: ''
        });
        setEditingId(user._id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setLoading(true);
            try {
<<<<<<< HEAD
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                };
                await axios.delete(`${API_URL}/users/${id}`, config);
=======
                await axios.delete(`${API_URL}/users/${id}`);
>>>>>>> origin/main
                setSuccess('User deleted successfully');
                fetchUsers();
                setError('');
            } catch (error) {
                console.error('Error deleting user:', error);
<<<<<<< HEAD
                setError(error.response?.data?.message || 'Failed to delete user. Please try again.');
=======
                setError('Failed to delete user. Please try again.');
>>>>>>> origin/main
            } finally {
                setLoading(false);
            }
        }
    };

    return (
<<<<<<< HEAD
        <>
=======
        <div>
>>>>>>> origin/main
            <Header />
            <div className="user-management-container">
                <h2>User Management</h2>
                
                {error && <div className="alert alert-error">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                
                <div className="user-form-container">
                    <h3>{editingId ? 'Edit User' : 'Create New User'}</h3>
                    <form onSubmit={handleSubmit} className="user-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                disabled={loading}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                disabled={loading}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required={!editingId}
                                disabled={loading}
                            />
                        </div>
                        <div className="form-actions">
                            <button 
                                type="submit" 
                                className="btn-primary"
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : (editingId ? 'Update User' : 'Create User')}
                            </button>
                            {editingId && (
                                <button 
                                    type="button" 
                                    className="btn-secondary"
                                    onClick={() => {
                                        setEditingId(null);
                                        setFormData({ name: '', email: '', password: '' });
                                    }}
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                <div className="users-list-container">
                    <h3>Users List</h3>
                    {loading ? (
                        <div className="loading">Loading users...</div>
                    ) : users.length === 0 ? (
                        <div className="no-users">No users found</div>
                    ) : (
                        <div className="table-responsive">
                            <table className="users-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
<<<<<<< HEAD
                                    {users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td className="actions">
                                                {currentUser && currentUser.role === 'admin' && currentUser._id !== user._id && (
                                                    <>
                                                        <button 
                                                            className="btn-edit"
                                                            onClick={() => handleEdit(user)}
                                                            disabled={loading}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button 
                                                            className="btn-delete"
                                                            onClick={() => handleDelete(user._id)}
                                                            disabled={loading}
                                                        >
                                                            Delete
                                                        </button>
                                                    </>
                                                )}
                                                {currentUser && currentUser.role === 'admin' && currentUser._id === user._id && (
                                                    <span style={{ color: '#6c757d' }}>Cannot delete self</span>
                                                )}
=======
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <button
                                                    className="btn-edit"
                                                    onClick={() => handleEdit(user)}
                                                    disabled={loading}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn-delete"
                                                    onClick={() => handleDelete(user._id)}
                                                    disabled={loading}
                                                >
                                                    Delete
                                                </button>
>>>>>>> origin/main
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
<<<<<<< HEAD
        </>
=======
        </div>
>>>>>>> origin/main
    );
};

export default UserManagement;