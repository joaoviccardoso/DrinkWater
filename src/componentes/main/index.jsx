import './main.css';
import Botao from '../botao';
import Barra from '../barra';
import { useState } from 'react';

function Main(){
    const [contador, setContador] = useState( () => {
        const valorSalvoNoLocalStorage = localStorage.getItem('contador');
        return valorSalvoNoLocalStorage ? parseFloat(valorSalvoNoLocalStorage) : 0;
    });

    function adicionarValor(valor){
        const novoValor = contador + valor
        setContador(novoValor)
        localStorage.setItem('contador', novoValor)
    }

    function tirarValor(valor){
        if(contador - valor >= 0){
            const novoValor = contador - valor
            setContador(novoValor)
            localStorage.setItem('contador', novoValor)
        }
    }

    function resetar(valor){
        setContador(valor)
        localStorage.setItem('contador', valor)
    }

    return(
        <div className='container-main'>
            <div className='container-agua-bebida'>
                <h2>Quantidade de agua bebida:</h2>
                <p>{contador} Ml</p>
                <Botao
                    className="btn-resetar"
                    texto="Resetar"
                    onClick={() => resetar(0)}
                />
            </div>
            <div className='container-btns'>
                <Botao
                    className="btn-quantidade"
                    texto="250ml"   
                    onClick={() => adicionarValor(250)}         
                />
                <Botao
                    className="btn-quantidade"
                    texto="500ml"
                    onClick={() => adicionarValor(500)}
                />
                <Botao
                    className="btn-quantidade"
                    texto="700ml"
                    onClick={() => adicionarValor(700)}
                />
                <Botao
                    className="btn-quantidade-tirar"
                    texto="-250ml" 
                    onClick={() => tirarValor(250)}
                />
                <Botao
                    className="btn-quantidade-tirar"
                    texto="-500ml" 
                    onClick={() => tirarValor(500)}
                />
                <Botao
                    className="btn-quantidade-tirar"
                    texto="-700ml" 
                    onClick={() => tirarValor(700)}
                />
            </div>
            <div className='container-barra'>
                <Barra
                    contador={contador}
                />
            </div>
        </div>
    )
}

export default Main