import Image from 'next/image'; 
import styles from './styles.module.css';
import Header from '../components/Header/Header';


export default function Checkout() {
    return (
        <>

        <Header />
        
        <div className={styles.page}>
        <main className={styles.main}>

            <section className={styles.section1}>
                <h1>Complete seu pedido</h1>


                <form className={styles.form}>

                <div className={styles.div}>
                    <div className={styles.alignText}>
                <Image src="iconVectorOrange.svg" alt=""  width={22} height={22} quality={100} id={styles.iconVector}/>
                <h2>Endereço de entrega</h2>
                </div>
                <p className={styles.p}>Informe o endereço onde deseja receber seu pedido:</p>
                    <fieldset className={styles.fieldset}>

                        <div className={styles.form1}>
                        <input className={styles.input} type="text" id="event-text" placeholder='CEP' />
                        </div>

                        <div className={styles.form2}>
                        <input className={styles.input} type="text" id="event-text" placeholder='Rua' />
                        </div>


                        <div className={styles.form3}>
                        <input className={styles.input}  type="number" id={styles.eventTextNumber} placeholder='Número' />
                        <input className={styles.input} type="text" id={styles.eventTextComplement} placeholder='Complemento' />
                    
                        </div>

                        <div className={styles.form4}>
                        <input className={styles.input} type="text" id={styles.eventTextBairro} placeholder='Bairro' />
                        <input className={styles.input} type="text" id={styles.eventTextCity} placeholder='Cidade' />
                        <input className={styles.input} type="text" id={styles.eventTextUF} placeholder='UF' />
                       

                        </div>

                        
                    </fieldset>
                    </div>
                </form>

            
            </section>

            
            <section className={styles.section2}>
                <div className={styles.alignText}>
            <Image src="cifao.svg" alt=""  width={22} height={22} quality={100} className="" /> 
            <h2 className={styles.h2}>Pagamento</h2>
            </div>
             <p className={styles.p}>O pagamento é feito na entrega. Escolha a forma que deseja pagar:</p>
         
          
          
          <div className={styles.btns}>
           <button className={styles.button}> <Image src="credit.svg" alt=""  width={22} height={22} quality={100}/>CARTÃO DE CRÉDITO</button>
            <button className={styles.button}> <Image src="debit.svg" alt=""  width={22} height={22} quality={100} className=""/> CARTÃO DE DÉBITO</button>
            <button  className={styles.button}> <Image src="money.svg" alt=""  width={22} height={22} quality={100} className=""/> DINHEIRO</button>
            </div>
          
            </section>

        </main>




        <article className={styles.article}>

        <h1>Cafés selecionados</h1>
        <div className={styles.div}>

        <div className={styles.finishPedido}>
        <Image src="expTradicional.svg" alt=""  width={64} height={64} quality={100} className="" />
        <ul className={styles.ul}>
        <li className={styles.li}><span className={styles.span}>Expresso Tradicional</span></li>
        <div className={styles.botaoeInput}>
        <li className={styles.li}> <strong className={styles.textInput}>- <input className={styles.inputFinish} type="number"/>+ </strong></li>
        <li className={styles.li}><button className={styles.button}>  <Image src="lixo.svg" alt=""  width={16} height={16} quality={100} className="" />REMOVER</button></li>
        
        </div>
        </ul>
        

        <strong>R$ 9,90</strong>

        
        </div>

        <div className={styles.finishPedido}>
        <Image src="latte.svg" alt=""  width={64} height={64} quality={100} className="" />
        <ul className={styles.ul}>
        <li className={styles.li}><span className={styles.span}>Expresso Tradicional</span></li>
        <div className={styles.botaoeInput}>
        <li className={styles.li}> <strong className={styles.textInput}>- <input className={styles.inputFinish} type="number"/>+ </strong></li>
        <li className={styles.li}><button className={styles.button}>  <Image src="lixo.svg" alt=""  width={16} height={16} quality={100} className="" />REMOVER</button></li>
        
        </div>
        </ul>
        

        <strong>R$ 9,90</strong>

        
        </div>

        



        

        <button className ={styles.buttonConfirmar}>CONFIRMAR PEDIDO</button>

    
        </div>
    
        </article>
        

        </div>
        </>
    )
}