const defaultState = {
  isUserLoggedIn: false,
  usernameOrEmail: null,
  userAuthorities: null,
  accessToken: null,
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        usernameOrEmail: action.payload.usernameOrEmail,
        userAuthority: action.payload.userAuthorities[0].authority,
        isUserLoggedIn: true,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

export default loginReducer;
