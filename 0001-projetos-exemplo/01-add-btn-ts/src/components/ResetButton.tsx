import styles from './ResetButton.module.css'


interface PropsResetButton{
  handleReset: () => void;
}

export function ResetButton({handleReset}:PropsResetButton ){
  return(
    <>
    <button className={styles.reset}  onClick={handleReset}>Resetar</button>
    </>
  )
}