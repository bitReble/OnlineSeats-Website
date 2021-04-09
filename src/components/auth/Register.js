const Register = () => {
  return (
    <form className="register">
      <div className="form-control">
        <p>Enter your name</p>
        <input type="text"></input>
      </div>
      <div className="form-control">
        <p>Enter your email</p>
        <input type="text"></input>
      </div>
      <div className="form-control">
        <p>Enter your password</p>
        <input type="password"></input>
      </div>
      <button type="button" className="button">
        Sign Up
      </button>
    </form>
  );
};

export default Register;
