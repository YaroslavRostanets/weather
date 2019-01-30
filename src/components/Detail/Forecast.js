import React from 'react';

const Forecast = (props) => {
	const { forecast } = props;
	return(
		<div className="forecast">
			{ Object.keys(forecast).map(function(day,index){
				let item = forecast[day];
				let date = new Date( Number(item[0]['dt'] + '000') );
				return (
					<div key={index} className="content-last">
						<h6 style={{textTransform: 'capitalize'}}>
							{date.toLocaleString('ru-ru', {  weekday: 'long' })}
						</h6>
						<div style={{textTransform: 'capitalize'}} className="data">
							{date.getDate()} {date.toLocaleString('ru-ru', {  month: 'short' })}
						</div>
						<img src={`http://openweathermap.org/img/w/${item[5].weather[0].icon}.png`} alt=" " />
						<div style={{textTransform: 'capitalize'}} className="data">
							{item[5].weather[0].description}
						</div>
						<p>{Math.floor(item[5].main.temp) + '\u2103'}</p>
					</div>
					)
				}) }
		</div>
		)
}

export default Forecast