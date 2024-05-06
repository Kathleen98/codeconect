import './style.css'

function Filtro(){
    return(
        <section className='container-filtro'>
            <ul>
                <li id='container-filtro-li--active'>
                    Front-end
                </li>

                <li>
                    React
                </li>

                <li>
                    Acessibilidade
                </li>
            </ul>

            <button>
                Limpar tudo
            </button>
        </section>
    )
}

export default Filtro;