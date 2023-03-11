import { useState } from "react";
import axios from "axios";


const Search = ({data, messageModal, theme}) => {

    const [city, setCity] = useState('')
    const searchDark = theme ? 'input' : ' input input_dark'
    const btndark = theme ? 'btn__search' : 'btn__search btn_dark__search'
    
    const onSubmit = e => {
        // este método evita que se cargue la página
        e.preventDefault();
    }


    const functionSearchCity = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fb11a0079cd98b2e305f5727e30d0a1&units=metric`)
            .then(reps => data(reps.data))
            .catch(messageModal)

        
        setCity('')
    }

    return (
        <div className="search">
            <form onSubmit={onSubmit}>
                <div className="search__container">
                    <input type="text" placeholder="Busca una ciudad" 
                        onChange={e => setCity(e.target.value)} 
                        value={city} className={searchDark}
                    />
                    <button type="submit" 
                        className={btndark} 
                        onClick={functionSearchCity}>
                        <i className='bx bx-search-alt-2'></i>
                    </button>
                </div>
            </form> 
            
        </div>
    );
};

export default Search;