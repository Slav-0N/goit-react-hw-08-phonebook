import React from 'react';

const FormRegistration = ({ registration }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    registration({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    console.log(`{ name, email, password }--->>>`, {
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div className="card p-5 mx-auto" style={{ width: 500 }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName"
            autoComplete="current-password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" name="name" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputName1"
            autoComplete="current-password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword"
            autoComplete="current-password"
            required
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Registration
        </button>
      </form>
    </div>
  );
};

export default FormRegistration;
