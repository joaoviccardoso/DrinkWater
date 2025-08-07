import './botao.css'

function botao({className ,texto, onClick}){
    return(
        <button className={className} onClick={onClick}> 
            {texto}
        </button>
    )
}

export default botao