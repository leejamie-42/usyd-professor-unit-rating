import React, { useState } from 'react';
import { Search, Star, ShoppingBag, Users, TrendingUp, BookOpen, MessageCircle, Shield } from 'lucide-react';
import "../styles/global.css";
import "../styles/HomePage.css";
import cartoonStudents from '../assets/cartoon-students.jpg';



const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('courses');

    const handleSearch = (e) => {
        e.preventDefault();
        // Navigate to search results
        console.log(`Searching ${searchType} for: ${searchQuery}`);
    };

    const stats = [
        { label: 'Course Reviews', value: '5,000+', icon: BookOpen },
        { label: 'Active Students', value: '2,500+', icon: Users },
        { label: 'Marketplace Listings', value: '1,200+', icon: ShoppingBag },
        { label: 'Average Rating', value: '4.2★', icon: Star }
    ];

    const features = [
        {
            icon: Star,
            title: 'Course & Professor Ratings',
            description: 'Read honest reviews from students who\'ve been there. Make informed decisions about your units.',
            cta: 'Browse Reviews'
        },
        {
            icon: ShoppingBag,
            title: 'Student Marketplace',
            description: 'Buy and sell textbooks, tutoring services, and study notes. Connect with peers safely.',
            cta: 'Explore Marketplace'
        },
        {
            icon: Shield,
            title: 'Safe & Anonymous',
            description: 'Share your experiences anonymously. All reviews are moderated to ensure quality and respect.',
            cta: 'Learn More'
        }
    ];

    const trendingCourses = [
        { code: 'INFO1110', name: 'Introduction to Programming', rating: 4.5, reviews: 234 },
        { code: 'DATA1001', name: 'Foundations of Data Science', rating: 4.3, reviews: 189 },
        { code: 'COMP2123', name: 'Data Structures & Algorithms', rating: 3.8, reviews: 312 }
    ];

    const featuredListings = [
        { title: 'COMP2017 Textbook', price: 45, condition: 'Like New' },
        { title: 'Python Tutoring', price: 35, condition: 'Per Hour' },
        { title: 'FINC2011 Notes', price: 20, condition: 'HD Quality' }
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-left">
                        <h1 className="hero-title">
                            Your <span className="highlight">USyd</span> Community Hub
                        </h1>
                        <p className="hero-subtitle">
                            Find the best courses, connect with students, and buy/sell what you need—all in one place.
                        </p>
                        {/*<div className="hero-buttons">*/}
                        {/*    <button className="btn-primary">Get Started</button>*/}
                        {/*    <button className="btn-secondary">Learn More</button>*/}
                        {/*</div>*/}
                    </div>
                    <div className="hero-right">
                        <div className="hero-image">
                            <img src={cartoonStudents} alt="Cartoon Students" />
                        </div>
                    </div>
                </div>
            </section>


         {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <stat.icon className="stat-icon" size={32} />
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">Everything You Need, One Platform</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <button className="feature-cta">{feature.cta} →</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trending Courses */}
            <section className="trending-section">
                <div className="section-header">
                    <h2 className="section-title">
                        <TrendingUp size={28} />
                        Trending Courses
                    </h2>
                    <button className="view-all-btn btn-primary">View All →</button>
                </div>
                <div className="courses-grid">
                    {trendingCourses.map((course, index) => (
                        <div key={index} className="course-card">
                            <div className="course-header">
                                <span className="course-code">{course.code}</span>
                                <div className="course-rating">
                                    <Star size={16} fill="currentColor" />
                                    {course.rating}
                                </div>
                            </div>
                            <h3 className="course-name">{course.name}</h3>
                            <p className="course-reviews">
                                <MessageCircle size={14} />
                                {course.reviews} reviews
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Marketplace */}
            <section className="marketplace-section">
                <div className="section-header">
                    <h2 className="section-title">
                        <ShoppingBag size={28} />
                        Featured Listings
                    </h2>
                    <button className="view-all-btn btn-primary">View All →</button>
                </div>
                <div className="listings-grid">
                    {featuredListings.map((listing, index) => (
                        <div key={index} className="listing-card">
                            <div className="listing-image"></div>
                            <div className="listing-content">
                                <h3 className="listing-title">{listing.title}</h3>
                                <div className="listing-footer">
                                    <span className="listing-price">${listing.price}</span>
                                    <span className="listing-condition">{listing.condition}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA (Call to Action) Section */}
            <section className="cta-section">
                <h2 className="cta-title">Ready to Get Started?</h2>
                <p className="cta-subtitle">Join thousands of USyd students making smarter academic decisions</p>
                <div className="cta-buttons">
                    <button className="btn-primary">Create Account</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </section>

        </div>
    );
};

export default Home;