import Image from 'next/image';
import styles from './styles.module.css';

export default function Checkout() {
    return (
    
        <>
        div
<main className={styles.main}>
    
    <section className={styles.section}>
        <h1>Complete seu pedido</h1>
        <Image src="Vector.svg" alt="imagem fundo" width={22} height={22} quality={100}className=""/> <span>Endereço de entrega</span>
        <p>Informe o endereço onde deseja receber seu pedido</p>

        <div className="input-wrapper">
            <input id="search" type="text" placeholder="CEP">
        </div>
        <div className="input-wrapper">
            <input id="search" type="text" placeholder="Rua">
        </div>
        <div className="input-wrapper">
            <input id="search" type="text" placeholder="Número">
            <input id="search" type="text" placeholder="Complemento">
        
        </div>
        <div className="input-wrapper">
            <input id="search" type="text" placeholder="Bairro">
            <input id="search" type="text" placeholder="Cidade">
            <input id="search" type="text" placeholder="UF">
        </div>

    </section>


<article>

    
<img src="img/cifao.svg" alt=""> <span>Pagamento</span>
<p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

<div class="buttonsCheck">
    <button><img src="img/card.svg" alt="">CARTÃO DE CRÉDITO</button>
    <button><img src="img/debit.svg" alt="">CARTÃO DE DÉBITO</button>
    <button><img src="img/money.svg" alt="">DINHEIRO</button>
</div>

</article>
</main>

<aside>

<h2>Total de itens</h2>

<strong>Total</strong>

</aside>

</>
    )
}