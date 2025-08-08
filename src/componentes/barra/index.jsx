import './barra.css'

function Barra({contador}){
    const meta = 2000;
    const porcentagem = (contador / meta) * 100;

    return(
        <div className='container-barra'>
            <p>{contador}ml de {meta}</p>
            <div className='barra'>
                <div 
                    className='preenchimento'
                    style={{width: `${porcentagem}%`}}
                ></div>
            </div>
        </div>
    )
}

export default Barra