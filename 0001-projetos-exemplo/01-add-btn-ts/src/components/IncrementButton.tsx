import styles from './IncrementButton.module.css'

// interface das props do componente
interface IncrementButtonProps {
    onIncrement: () => void;
}

export function IncrementButtonProps({onIncrement}: IncrementButtonProps){
    return(
        <>
        <button className={styles.increment} onClick={onIncrement}>+</button>
        </>
    )
}