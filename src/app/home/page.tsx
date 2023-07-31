import Image from 'next/image';
import styles from './styles.module.css';


export default function Home() {
    return (
        <>
        <div className={styles.page}>

        <header className={styles.header}>

        <Image src="Logo.svg" alt="imagem fundo" width={85} height={40} quality={100} className=""/>
            <div className={styles.buttons}>
                <button className={styles.buttonLocation}> <Image src="Vector.svg" alt="imagem fundo" width={22} height={22} quality={100}className=""/>
                <span>Porto Alegre, RS</span></button>
                <button className={styles.buttonCart}> <Image src="cartButton.svg" alt="imagem fundo" width={22} height={22} quality={100} className=""/></button>
            </div>
        </header>
       
        <main className={styles.main}>
        <section>
            
            <div className={styles.container1}>
            <h1 className={styles.h1}>Encontre o café perfeito para qualquer hora do dia</h1>
            <p className={styles.p}>Com o Coffee Dellivery você recebe seu café onde estiver, a qualquer hora
            </p>

            <ul className={styles.ul}>
                <li className={styles.li}>
                <Image src="iconCart.svg" alt="imagem fundo" width={16} height={16} quality={100}  className=""/>
                <h3 className={styles.h3}>Compra simples e segura</h3>
                </li>

                <li className={styles.li}>
                <Image src="iconBox.svg" alt="imagem fundo" width={16} height={16} quality={100} className=""/>
                <h3 className={styles.h3}>Embalagem mantém o café intacto</h3>
                </li>

                <li className={styles.li}>
                <Image src="iconClock.svg" alt="imagem fundo"  width={16} height={16} quality={100} className=""/>
                <h3 className={styles.h3} >Entrega rápida e rastreada</h3></li>

                <li className={styles.li}>
                <Image src="iconCoffee.svg" alt="imagem fundo" width={16} height={16} quality={100} className=""/>
                <h3 className={styles.h3}>O café chega fresquinho até</h3>
</li>

            </ul>
            </div>
            </section>

            <Image src="imgMain.svg" alt="imagem fundo"  width={476} height={360} quality={100} className=""/>

        </ main>


        <div className={styles.align}>

        <strong className={styles.strong}>Nossos cafés</strong>

        <div className={styles.menu}>
            <div className={styles.item}>
            <Image src="expTradicional.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                <span>Tradicional</span>
                <h4>Expresso Tradicional</h4>
                <p>O tradicional café feito com água quente e grãos moídos</p>
                
               
            </div>

            <div className={styles.item}>
            <Image src="expAmericano.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                 <span>Tradicional</span>
                 <h4>Expresso Americano</h4>
                 <p>Expresso diluído, menos intenso que o tradicional</p>

            </div>

            <div className={styles.item}>
            <Image src="expCremoso.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                <span>Tradicional</span>
                <h4>Expresso Cremoso</h4>
                <p>Café expresso tradicional com espuma cremosa</p>

            </div>

            <div className={styles.item}>
            <Image src="expGelado.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>

            <div className={styles.item}>
            <Image src="cafeComLeite.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
            <div className={styles.item}>
            <Image src="latte.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
            <div className={styles.item}>
            <Image src="capuccino.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p></div>

            <div className={styles.item}>
            <Image src="macchiato.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
            <div className={styles.item}>
            <Image src="mocaccino.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                <span>Tradicional</span>
                <h4>Expresso Gelado</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
            <div className={styles.item}>
            <Image src="chocQuente.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
            <div className={styles.item}>
            <Image src="cubano.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
            <div className={styles.item}>
            <Image src="havaiano.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
            <div className={styles.item}>
            <Image src="arabe.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
            <div className={styles.item}>
            <Image src="irlandes.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
                
                <span>Tradicional</span>
                <h4>Expresso Geledo</h4>
                <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
        </div>
        </div>
        </div>

        </>
    )
    }
    