import './filter.scss'

function Filter() {
    return (  
        <div className="filter">
            <h1>Résultats de recherche pour <b>Gabes</b></h1>
            <div className='top'>
                <div className='item'>
                    <label htmlFor='city'>Emplacement</label>
                    <input type="text" id="city" name='city' placeholder='City Location'/>                
                </div>
                
            </div>
            <div className='bottom'>
                <div className='item'>
                    <label htmlFor='type'>Type</label>
                    <select name='type' id='type'>
                        <option value="">choix</option>
                        <option value="buy">Acheter</option>
                        <option value="rent">Louer</option>
                    </select>                    
                </div> 
                <div className='item'>
                    <label htmlFor='property'>Propriété</label>
                    <select name='property' id='property'>
                        <option value="">choix</option>
                        <option value="apartment">Appartement</option>
                        <option value="House">Maison</option>
                        <option value="condo">Copropriété</option>
                        <option value="land">Terre</option>
                    </select>                
                </div>
                <div className='item'>
                    <label htmlFor='minPrice'>Min Price</label>
                    <input 
                    type="number" 
                    id="minPrice" 
                    name='minPrice' 
                    placeholder='choix'/>                
                </div>
                <div className='item'>
                    <label htmlFor='maxPrice'>Max Price</label> 
                    <input 
                    type="text" 
                    id="maxPrice"
                    name='maxPrice' 
                    placeholder='choix'/>                
                </div>
                <div className='item'>
                    <label htmlFor='bedroom'>Bedroom</label>
                    <input 
                    type="text" 
                    id="bedroom" 
                    name='bedroom' 
                    placeholder='choix'/>                
                </div>
                <button>
                    <img src="/search.png" alt=''/>
                </button>
            </div>
        </div>
    )
}

export default Filter;