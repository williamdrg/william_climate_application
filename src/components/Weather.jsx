

const Weather = ({data, icon, btn}) => {

    
    return (
        <div className='containerCard'>
            <div className="temperature">
                {btn ? <h3>{Math.floor(data.main?.temp)}<span className="symbol">°c</span></h3> : <h3>{Math.round(Math.floor(data.main?.temp)*1.8+32)} <span className="symbol">°F</span></h3>}
            </div>
            <div className="dataClimate">
                <p> <span className="spanData">Viento:</span> {data.wind?.speed} m/s</p>
                <p> <span className="spanData">Humedad:</span> {data.main?.humidity} % </p>
                <p> <span className="spanData">Presión:</span> {data.main?.pressure} mbar</p>
            </div>
            <h2 className="city"><span>{data.name}</span>, <span>{data.sys?.country}</span></h2>
            <div className="containerImg"><img src={icon} alt="climate image" /></div>
            <h2 className="description">{data.weather?.[0].description.toUpperCase()}</h2>
        </div>
    );
};

export default Weather;