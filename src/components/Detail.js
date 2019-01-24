import React, {Component} from 'react';
import { Paper, Typography } from '@material-ui/core';

class Detail extends Component {

	render(){
		const {cityDetail} = this.props;

		const empty = <Typography variant="h6" component="h5">
          				Выберите нужный город из списка 
        			  </Typography>;

		return(
			<Paper elevation={1} style={{padding: '24px'}}>
				{ cityDetail ? <DetailForecast weather={cityDetail.weather} /> : empty }
			</Paper>
		)
	}
}

class DetailForecast extends Component {

	render() {
		const { weather } = this.props;
		const date = new Date().toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric'});

		return(
			<div className="content-top">
        		<div className="top">
					<div className="content-left">
						<h6>{date}</h6>
						<h2>{Math.floor(weather.main.temp)}&#176;C</h2>
					</div>
					<div className="content-right">
						<h5 style={{textTransform: 'capitalize'}}>{weather.weather[0].description}</h5>
						<img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=" " />
					</div>
					<div className="content-table">
						<table>
							<tr>
								<td>Атмосферное давление</td>
								<td>{weather.main.pressure} гПа</td>
							</tr>
							<tr>
								<td>Влажность</td>
								<td>{weather.main.humidity} %</td>
							</tr>
							<tr>
								<td>Скорость ветра</td>
								<td>{weather.wind.speed} м/с</td>
							</tr>
							<tr>
								<td>Направление ветра</td>
								<td>{weather.wind.deg}</td>
							</tr>
						</table>
					</div>
				</div>
				<div className="forecast">
					<div className="content-last">
						<h6>WED</h6>
							<img src="images/sun1.png" alt="" />
						<p>25°</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Detail