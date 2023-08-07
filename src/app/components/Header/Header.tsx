import Image from 'next/image'; 
import styles from './styles.module.css';



export default function Header() {
    return (
        <>
        
        <header className={styles.header}>

        <Image src="Logo.svg" alt="imagem fundo" width={85} height={40} quality={100} className=""/>
        <div className={styles.buttons}>
        <button className={styles.buttonLocation}><Image src="Vector.svg" alt="imagem fundo" width={18} height={18} quality={100}className="" /> 
        <span> Porto Alegre, RS</span></button>
        <button className={styles.buttonCart}> <Image src="cartButton.svg" alt="imagem fundo" width={18} height={18} quality={100} className=""/></button>
    </div>
</header>
        </>
    )
}