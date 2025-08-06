import './botao.css'

function botao({texto}){
    return(
        <button className='btn-quantidade'> 
            {texto}
        </button>
    )
}

export default botao