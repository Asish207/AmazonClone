// setup data layer
// we need this to track the basket

import { createContext, useContext, useReducer } from "react";

// THIS IS TH EDATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);