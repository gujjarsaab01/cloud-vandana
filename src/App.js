import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    country: '',
    gender: '',
    profession: '',
    email: '',
    mobile: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      Object.values(formData).every((field) => field !== '') &&
      formData.email.includes('@')
    ) {
      setShowPopup(true);
    } else {
      toast.error('Please fill out all fields correctly.');
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      country: '',
      gender: '',
      profession: '',
      email: '',
      mobile: '',
    });
  };

  return (
    <div className="container mt-5  mx-auto p-5 bg-secondary">
      <div className='col-6 h-50 mx-auto  bg-primary p-5'>
      <h1 className='text-center'>Survey Form</h1>
      <form>
        
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth:
          </label>
          <input
            type="date"
            name="dob"
            className="form-control"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <select
            name="country"
            className="form-control"
            id="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="IND">India</option>
            <option value="AUS">Australia</option>
            <option value="ENG">England</option>
            <option value="CA">Canada</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="gender"
              className="form-check-input"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="gender"
              className="form-check-input"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="profession" className="form-label">
            Profession:
          </label>
          <input
            type="text"
            name="profession"
            className="form-control"
            id="profession"
            value={formData.profession}
            onChange={handleChange}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number:
          </label>
          <input
            type="tel"
            name="mobile"
            className="form-control"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="button-container ">
          <button
            type="button"
            className="btn btn-warning col-6 "
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-warning col-5 m-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
      {showPopup && (
        <div
          className="modal"
          style={{ display: 'block' }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Survey Results</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPopup(false)}
                ></button>
              </div>
              <div className="modal-body">
                <ul>
                  {Object.entries(formData).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setShowPopup(false);
                    handleReset();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
      </div>
    
    </div>
  );
}

export default App;
