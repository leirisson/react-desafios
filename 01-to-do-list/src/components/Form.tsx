import styles from './Form.module.css'
import { useState } from 'react';

interface FormInterface {
    task: string;
}
export function Form({task}: FormInterface){
    const [task, setTask]: FormInterface = useState('')
    
    return(
        <>

        </>
    )
}