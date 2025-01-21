

// interface das props do componente
interface IncrementButtonProps {
    onIncrement: () => void;
}

export function IncrementButtonProps({onIncrement}: IncrementButtonProps){
    return(
        <>
        <button onClick={onIncrement}>+</button>
        </>
    )
}