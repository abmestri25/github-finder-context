import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"
const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  // created default state
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  }

  // used useReducer hook
  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
