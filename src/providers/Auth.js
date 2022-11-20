

import React, { useState } from "react";

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
    const [user,setUser] = useState({
        name: '',
        token: ''
    })

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {props.children}
        </AuthContext.Provider>
        
    )
} 