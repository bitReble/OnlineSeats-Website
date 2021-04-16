const initalState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const authReducer = (state = initalState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default authReducer;
