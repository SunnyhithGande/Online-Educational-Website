import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [userBlogs, setUserBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedUser = JSON.parse(localStorage.getItem('user'));
                if (!storedUser) {
                    setError('Please login to view dashboard');
                    return;
                }

                setUser(storedUser);

                // Fetch enrolled courses
                const coursesResponse = await axios.get('http://localhost:5001/courses');
                const userCourses = coursesResponse.data.filter(course => 
                    course.enrolledStudents && course.enrolledStudents.some(studentId => 
                        studentId.toString() === storedUser._id
                    )
                );
                setEnrolledCourses(userCourses);

                // Fetch user's blogs
                const blogsResponse = await axios.get('http://localhost:5001/blogs');
                const userBlogs = blogsResponse.data.filter(blog => 
                    blog.author && blog.author._id.toString() === storedUser._id
                );
                setUserBlogs(userBlogs);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                setError('Failed to load dashboard data');
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className="dashboard-loading">
                <div className="spinner"></div>
                <p>Loading dashboard...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dashboard-error">
                <p>{error}</p>
                <Link to="/login" className="btn btn-primary">Login</Link>
            </div>
        );
    }

    return (
        <div className="dashboard">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="dashboard__header">
                            <h2>Welcome, {user.name}!</h2>
                            <p>Here's your learning dashboard</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg="4">
                        <Card className="dashboard__card profile-card">
                            <h3>Profile Information</h3>
                            <div className="profile-info">
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                            </div>
                            <div className="quick-actions">
                                <Link to="/brain-break" className="btn btn-primary">
                                    Take a Brain Break
                                </Link>
                            </div>
                        </Card>
                    </Col>

                    <Col lg="8">
                        <Card className="dashboard__card courses-card">
                            <h3>Your Courses</h3>
                            {enrolledCourses.length === 0 ? (
                                <p>You haven't enrolled in any courses yet.</p>
                            ) : (
                                <div className="courses-list">
                                    {enrolledCourses.map(course => (
                                        <div key={course._id} className="course-item">
                                            <h4>{course.title}</h4>
                                            <p>{course.description}</p>
                                            <div className="course-stats">
                                                <span>
                                                    <i className="ri-book-open-line"></i> {course.lessons.length} Lessons
                                                </span>
                                                <Link to={`/courses/${course._id}`} className="btn btn-sm btn-outline-primary">
                                                    Continue Learning
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col lg="12">
                        <Card className="dashboard__card blogs-card">
                            <h3>Your Blog Posts</h3>
                            {userBlogs.length === 0 ? (
                                <p>You haven't written any blog posts yet.</p>
                            ) : (
                                <div className="blogs-list">
                                    {userBlogs.map(blog => (
                                        <div key={blog._id} className="blog-item">
                                            <h4>{blog.title}</h4>
                                            <p className="blog-category">{blog.category}</p>
                                            <p className="blog-content">{blog.content.substring(0, 150)}...</p>
                                            <div className="blog-meta">
                                                <span>
                                                    <i className="ri-calendar-line"></i> {new Date(blog.createdAt).toLocaleDateString()}
                                                </span>
                                                <span className={blog.published ? 'published' : 'draft'}>
                                                    {blog.published ? 'Published' : 'Draft'}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="create-blog">
                                <Link to="/blogs" className="btn btn-primary">
                                    Create New Blog Post
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard; 