import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Registration</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-block">
          Register
        </button>
      </form>
    </section>
  );
};

export default Registration;
