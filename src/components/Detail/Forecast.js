import React from 'react';

const Forecast = (props) => {
	const { forecast } = props;
	const sortedKeys = Object.keys(forecast).sort((a, b)=>{ return forecast[a][0].dt - forecast[b][0].dt }); 
	//сортируем по дате ключи
	return(
		<div className="forecast">
			{ 	sortedKeys.map(function(day,index){
				let item = forecast[day];
				let date = new Date( Number(item[0]['dt'] + '000') );
				let show = (itemArray) => {
					return itemArray.length > 5 ? itemArray[5] : itemArray[itemArray.length - 1]
					}
				return (
					<div key={index} className="content-last">
						<h6 style={{textTransform: 'capitalize'}}>
							{date.toLocaleString('ru-ru', {  weekday: 'long' })}
						</h6>
						<div style={{textTransform: 'capitalize'}} className="data">
							{date.getDate()} {date.toLocaleString('ru-ru', {  month: 'short' })}
						</div>
						<img src={`https://openweathermap.org/img/w/${show(item).weather[0].icon}.png`} alt=" " />
						<div style={{textTransform: 'capitalize'}} className="data">
							{show(item).weather[0].description}
						</div>
						<p>{Math.floor(show(item).main.temp) + '\u2103'}</p>
					</div>
					)
				}) 
			}
		</div>
		)
}

export default Forecast