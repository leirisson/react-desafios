import styles from './ReservationList.module.css'
import { IAgendamento } from "../interfaces/IAgendahmento"
import img from '../assets/trash-bin.png'

interface PropsReservationList {
    onPassarLista: IAgendamento[];
    onDeleteAgendamento: (agendamento: IAgendamento) => void;
}

export function ReservationList({ onPassarLista, onDeleteAgendamento }: PropsReservationList) {
    return (
        <>
            <ul className={styles.container}>
                {

                    onPassarLista.map(agendamento => (
                        <li className={styles.container__item} key={agendamento.id}>
                            <button onClick={() => onDeleteAgendamento(agendamento)}  className={styles.apagar}>
                                <img src={img} />
                            </button>
                            <p className={styles.header}>{agendamento.nome}</p>
                            <p className={styles.header}>{agendamento.numeroDaMesa}</p>
                            <p className={styles.header}>{agendamento.horario}</p>

                        </li>
                    )
                    )
                }
            </ul>
        </>
    )
}