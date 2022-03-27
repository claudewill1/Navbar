import React, {useContext} from 'react'
import MyContext from './MyContext'
import styles from './Navbar.module.css'

export default function Navbar() {
    const {state} = useContext(MyContext);
    const name = () => {
        
            return `Hi ${state}!`;
        
    }
    return (
        <div id={styles.navbar}>
            {name()}
        </div>
    )
}
