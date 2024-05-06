import { useState } from 'react';
import './styles.css';

function BarraDePesquisa(){
    const [termoPesquisa, setTermoPesquisa] = useState('');

    return(
        <input 
            // No value estou declarando que o campo vai iniciar com o valor do termoPesquisa, no caso, vai inicar vazio
            value={termoPesquisa}
            // Vai pegar o evento de digitação e com a função setTermoPesquisa vai atribuir o valor
            onChange={(evento) => setTermoPesquisa(evento.target.value)}
            className='barra-pesquisa'
            type="search"
            placeholder="Digite o que você procura"
        />
    )
}

export default BarraDePesquisa;