import './main.css';
import Botao from '../botao';

function main(){
    return(
        <div className='container-main'>
            <div className='container-agua-bebida'>
                <h2>Quantidade de agua bebida:</h2>
                <p>0</p>
            </div>
            <div className='container-btns'>
                <Botao
                    texto="250ml"            
                />
                <Botao
                    texto="500ml"
                />
                <Botao
                texto="700ml"
                />
            </div>
        </div>
    )
}

export default main