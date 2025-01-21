
interface DecrementButtonProps {
    onDecrement: () => void;
}


export function DecrementButtonProps({ onDecrement }: DecrementButtonProps) {
    return(
        <>
        <button onClick={onDecrement}>-</button>
        </>
    )
}