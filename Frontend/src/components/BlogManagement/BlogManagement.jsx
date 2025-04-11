import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogManagement.css';

const BlogManagement = () => {
    const [blogs, setBlogs] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        content: '',
        image: null,
        published: false
    });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const API_URL = 'http://localhost:5001';

    useEffect(() => {
        console.log('Component mounted, fetching blogs...');
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            console.log('Fetching blogs from:', `${API_URL}/blogs`);
            const response = await axios.get(`${API_URL}/blogs`);
            console.log('Blogs fetched:', response.data);
            
            if (response.data && Array.isArray(response.data)) {
                setBlogs(response.data);
                setError('');
            } else {
                console.error('Invalid response format:', response.data);
                setError('Invalid response format from server');
                setBlogs([]);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
            console.error('Error response:', error.response?.data);
            setError('Failed to fetch blogs. Please make sure the backend server is running.');
            setBlogs([]);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                image: file
            });
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            console.log('Current user data:', user); // Debug log

            if (!user || !user._id) {
                setError('You must be logged in to create a blog. Please login first.');
                setLoading(false);
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('category', formData.category);
            formDataToSend.append('content', formData.content);
            formDataToSend.append('published', formData.published);
            formDataToSend.append('author', user._id);

            console.log('Form data being sent:', {
                title: formData.title,
                category: formData.category,
                content: formData.content,
                published: formData.published,
                author: user._id,
                hasImage: !!formData.image
            });

            if (formData.image) {
                formDataToSend.append('image', formData.image);
            }

            let response;
            if (editingId) {
                response = await axios.put(`${API_URL}/blogs/${editingId}`, formDataToSend);
                console.log('Update response:', response.data);
                setSuccess('Blog updated successfully');
            } else {
                response = await axios.post(`${API_URL}/blogs`, formDataToSend);
                console.log('Create response:', response.data);
                setSuccess('Blog created successfully');
            }

            setFormData({
                title: '',
                category: '',
                content: '',
                image: null,
                published: false
            });
            setPreviewImage(null);
            setEditingId(null);
            await fetchBlogs(); // Immediately fetch updated blogs
            setError('');
        } catch (error) {
            console.error('Error in form submission:', error);
            console.error('Error response:', error.response?.data);
            setError(error.response?.data?.message || 'Operation failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (blog) => {
        setFormData({
            title: blog.title,
            category: blog.category,
            content: blog.content,
            image: null,
            published: blog.published
        });
        setPreviewImage(blog.image ? `${API_URL}/${blog.image}` : null);
        setEditingId(blog._id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            setLoading(true);
            try {
                await axios.delete(`${API_URL}/blogs/${id}`);
                setSuccess('Blog deleted successfully');
                fetchBlogs();
                setError('');
            } catch (error) {
                console.error('Error deleting blog:', error);
                setError('Failed to delete blog. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="blog-management-container">
            <h2>Blog Management</h2>
            
            {error && <div className="alert alert-error">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            
            <div className="blog-form-container">
                <h3>{editingId ? 'Edit Blog' : 'Create New Blog'}</h3>
                <form onSubmit={handleSubmit} className="blog-form">
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter blog title"
                            disabled={loading}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter blog category"
                            disabled={loading}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter blog content"
                            disabled={loading}
                            rows="10"
                        />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            accept="image/*"
                            disabled={loading}
                        />
                        {previewImage && (
                            <div className="image-preview">
                                <img src={previewImage} alt="Preview" />
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="published"
                                checked={formData.published}
                                onChange={handleInputChange}
                                disabled={loading}
                            />
                            Publish Blog
                        </label>
                    </div>
                    <div className="form-actions">
                        <button 
                            type="submit" 
                            className="btn-primary"
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : (editingId ? 'Update Blog' : 'Create Blog')}
                        </button>
                        {editingId && (
                            <button 
                                type="button" 
                                className="btn-secondary"
                                onClick={() => {
                                    setEditingId(null);
                                    setFormData({
                                        title: '',
                                        category: '',
                                        content: '',
                                        image: null,
                                        published: false
                                    });
                                    setPreviewImage(null);
                                }}
                                disabled={loading}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div className="blogs-list-container">
                <h3>Blogs List</h3>
                {loading ? (
                    <div className="loading">Loading blogs...</div>
                ) : blogs.length === 0 ? (
                    <div className="no-blogs">No blogs found</div>
                ) : (
                    <div className="table-responsive">
                        <table className="blogs-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map(blog => (
                                    <tr key={blog._id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.category}</td>
                                        <td>{blog.published ? 'Published' : 'Draft'}</td>
                                        <td className="actions">
                                            <button 
                                                onClick={() => handleEdit(blog)}
                                                className="btn-edit"
                                                disabled={loading}
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(blog._id)}
                                                className="btn-delete"
                                                disabled={loading}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogManagement; 