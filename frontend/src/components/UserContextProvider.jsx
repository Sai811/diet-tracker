import { Children, createContext, useRef } from "react";

export const UserContext = createContext()

export default function UserContextProvider({children}){

    const userId = useRef(localStorage.getItem("userId") || null);

    return(
        <UserContext.Provider value={{userId}}>
            {children}
        </UserContext.Provider>
    )



}