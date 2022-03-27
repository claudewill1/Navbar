import React, {useContext} from 'react';
import MyContext from './MyContext';
import style from './Form.module.css'
const Form = (props) => {
    const {state,setState} = useContext(MyContext)

    const onChange = (e) => {
        e.preventDefault();
        setState(e.target.value);
    }
    return (
        <div>
            <label id={style.label}>Your Name: <input type='text' id={style.input} placeholder='Bob Smith' value={state} onChange={onChange}/></label>
        </div>
    )
}

export default Form;