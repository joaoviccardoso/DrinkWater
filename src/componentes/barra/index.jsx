import './barra.css'
import Botao from '../botao'
import { useState } from 'react';

function Barra({contador}){
    const [inputValor, setInput] = useState('')
    const [meta, setMeta] = useState(()=>{
        const valorMeta = localStorage.getItem('meta')
        return valorMeta ? parseFloat(valorMeta) : 0;
    })
    const porcentagem = (contador / meta) * 100;

    function definirMeta(){
        setMeta(inputValor)
        localStorage.setItem('meta', inputValor)
    }

    return(
        <div className='container-barra'>
            <p>{contador}ml de {meta}ml</p>
            <div className='barra'>
                <div 
                    className='preenchimento'
                    style={{width: `${porcentagem}%`}}
                ></div>
            </div>
            <div className='container-meta'>
                <h3>Definir Meta</h3>
                <input 
                    type="number" 
                    className='definirMeta'
                    onChange={(e) => setInput(e.target.value)}
                />
                <Botao
                    className={'salvarMeta'}
                    texto="Salvar Meta"
                    onClick={() => definirMeta()}
                />
            </div>
        </div>
    )
}

export default Barra