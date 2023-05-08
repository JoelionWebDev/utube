import { NavLink } from "react-router-dom";
const Register = () => {
  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6  col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" name="email" className="form-control" />
          </div>

          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
