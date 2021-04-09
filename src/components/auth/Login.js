const Login = () => {
  return (
    <form className="login">
      <div className="form-control">
        <p>Enter your email</p>
        <input type="text"></input>
      </div>
      <div className="form-control">
        <p>Enter your password</p>
        <input type="password"></input>
      </div>
      <button type="button" className="button">
        Login
      </button>
    </form>
  );
};

export default Login;
