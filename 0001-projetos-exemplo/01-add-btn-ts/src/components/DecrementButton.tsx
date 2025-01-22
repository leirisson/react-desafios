import styles from './DecrementButton.module.css'

interface DecrementButtonProps {
    onDecrement: () => void;
}


export function DecrementButtonProps({ onDecrement }: DecrementButtonProps) {
    return(
        <>
        <button className={styles.decrement} onClick={onDecrement}>-</button>
        </>
    )
}