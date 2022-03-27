import React, {useState} from 'react'
import MyContext from './MyContext';


export default function Wrapper (props) {
    const {children} = props;
    const [state,setState] = useState("");
    return (
        <MyContext.Provider value={{state,setState}}>
            {children}
        </MyContext.Provider>
    )
}
