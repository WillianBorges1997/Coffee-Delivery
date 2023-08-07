import Image from 'next/image'; 
import styles from './styles.module.css';
import Header from '../components/Header/Header';
import { Roboto, Baloo_2 } from 'next/font/google';


export default function Success() {
    return (
        <>
        
        <Header />

    <main className={styles.main}>
        <section className={styles.section}>

           
    <h1 className={styles.h1}>Uhu! Pedido confirmado</h1>
    
    <p className={styles.p}>Agora é só aguardar que logo o café chegará até você</p>

    
      
    <ul className={styles.ul}>

        <li className={styles.li}>
       <button className={styles.btn1}><Image src="iconVector.svg" alt="" width={16} height={16} quality={100}/></button>
        <span>Entrega em <strong> Rua João Daniel Martinelli, 102 </strong> Farrapos - Porto Alegre, RS</span>
        </li>

        <li className={styles.li}>
        <button className={styles.btn2}><Image src="iconClock.svg" alt="" width={16} height={16} quality={100} /></button>
        <span>Previsão de entrega <strong> 20 min - 30 min</strong> </span>
        </li>

        <li className={styles.li}>
        <button className={styles.btn3}><Image src="iconSiphon.svg" alt="" width={16} height={16} quality={100} /></button>
        <span>Pagamento na entrega <strong>Cartão de crédito</strong></span>
        </li>

    </ul>
 
    </section>

   
    <Image src="deliveryMan.svg" alt="" width={492} height={293} quality={100}  className={styles.deliveryman}/>
    

    </main>

        </>
    )
}