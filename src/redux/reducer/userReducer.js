const initialState = {
    userInfo : {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "LOGIN":
    return { ...state, userInfo: payload }

  default:
    return state
  }
}
