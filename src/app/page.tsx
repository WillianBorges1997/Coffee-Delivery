import Image from 'next/image'; 
import styles from './styles.module.css';
import Header from './components/Header/Header';




export default function Home() {
    return (
        <>
        
            <Header />
       
        <main className={styles.main}>
        
        <section className={styles.section}>
            
            <h1 className={styles.h1}>Encontre o café perfeito para qualquer hora do dia</h1>
           
            <p className={styles.p}>Com o Coffee Dellivery você recebe seu café onde estiver, a qualquer hora</p>

            <ul className={styles.ul}>

                <li className={styles.li}>
                <Image src="iconCart.svg" alt="imagem fundo" width={32} height={32} quality={100}  className=""/>
                <h3 className={styles.h3}>Compra simples e segura</h3>
                </li>

                <li className={styles.li}>
                <Image src="iconBox.svg" alt="imagem fundo" width={32} height={32} quality={100} className=""/>
                <h3 className={styles.h3}>Embalagem mantém o café intacto</h3>
                </li>

                <li className={styles.li}>
                <div className={styles.iconli}>
                <Image src="clock.svg" alt="imagem fundo"  width={32} height={32} quality={100} className=""/>
                </div>
                <h3 className={styles.h3} >Entrega rápida e rastreada</h3></li>

                <li className={styles.li}>
                <Image src="iconCoffee.svg" alt="imagem fundo" width={32} height={32} quality={100} className=""/>
                <h3 className={styles.h3}>O café chega fresquinho até você</h3>
        </li>

            </ul>
            
            </section>

            <Image src="imgMain.svg" alt="imagem fundo"  width={476} height={360} quality={100} className=""/>

            </main>


            
        
        <article className={styles.article}>
            
            <div className={styles.menuTitle}>
            <strong className={styles.strong}>NOSSOS CAFÉS</strong>
            </div>
        
       
            <div className={styles.menu}>
            <div className={styles.display}>
                <div className={styles.imageIcon}>
            <Image src="expTradicional.svg" alt=""  width={120} height={120} quality={100}/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span> 
                <h4 className={styles.h4}>Expresso Tradicional</h4>
                <p className={styles.p}>O tradicional café feito com água quente e grãos moídos</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>


            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="expAmericano.svg" alt="imagem fundo"  width={120} height={120} quality={100}  className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Expresso Americano</h4>
                <p className={styles.p}>Expresso diluído, menos intenso que o tradicional</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>




            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="expCremoso.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Expresso Cremoso</h4>
                <p className={styles.p}>Café expresso tradicional com espuma cremosa</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>



            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="expGelado.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Expresso Gelado</h4>
                <p className={styles.p}>Bebida preparada com café expresso e cubos de gelo</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>

            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="havaiano.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Café com Leite</h4>
                <p className={styles.p}>Meio a meio de expresso tradicional com leite vaporizado</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
               
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>




            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="cafeComLeite.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Latte</h4>
                <p className={styles.p}>Uma dose de café expresso com o dobro de leite e espuma cremosa</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>



            <div className={styles.display}>

            <div className={styles.imageIcon}>
            <Image src="latte.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Capuccino</h4>
                <p className={styles.p}>Bebida com canela feita de doses iguais de café, leite e espuma</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>



            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="capuccino.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Macchiato</h4>
                <p className={styles.p}>Café expresso misturado com um pouco de leite quente e espuma</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>


            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="macchiato.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Mocaccino</h4>
                <p className={styles.p}>Café expresso com calda de chocolate, pouco leite e espuma</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>

        
            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="mocaccino.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Chocolate Quente</h4>
                <p className={styles.p}>Bebida feita com chocolate dissolvido no leite quente e café</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>


            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="chocQuente.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Cubano</h4>
                <p className={styles.p}>Drink gelado de café expresso com rum, creme de leite e hortelã</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>


            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="cubano.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Havaiano</h4>
                <p className={styles.p}>Bebida adocicada preparada com café e leite de coco</p> 

                <div className={styles.optionSelection}>
                    
                <text className={styles.text}>R$ 9,90</text>
                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
               
            
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>


            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="arabe.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
            <h4 className={styles.h4}>Árabe</h4>
                <p className={styles.p}>Bebida preparada com grãos de café árabe e especiarias</p> 

                <div className={styles.layoutComprar}>
                    
                <text className={styles.text}>R$ 9,90</text>
               
                    <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>

            <div className={styles.display}>
            <div className={styles.imageIcon}>
            <Image src="irlandes.svg" alt="imagem fundo"  width={120} height={120} quality={100} className=""/>
            </div>
            <div className={styles.alignTextMenu}>
            <span className={styles.span}>Tradicional</span>
                <h4 className={styles.h4}>Irlandês</h4>
                <p className={styles.p}>Bebida a base de café, uísque irlandês, açúcar e chantilly</p> 

                <div className={styles.layoutComprar}>
                    
                <text className={styles.text}>R$ 9,90</text>

                <strong className={styles.textInput}>- <input className={styles.input} type="number"/>+ </strong>
               
                   
                
                <button className={styles.buttonPurple}> <Image src="cartPurple.svg" alt=""  width={38} height={38} quality={100}/></button>
                </div>
                </div>
                
            </div>
            </div>
        
        </article>
        

        </>
    )
    }
    