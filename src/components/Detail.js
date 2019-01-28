import React, {Component, PureComponent} from 'react';
import { Paper, Typography, Table, TableBody, TableRow, TableCell, LinearProgress } from '@material-ui/core';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Forecast from './Forecast';

class Detail extends PureComponent {

	render(){
		const {cityDetail} = this.props;
		const {getForecastAction} = this.props;

		const empty = <Typography variant="h6" component="h5">
          				Выберите нужный город из списка 
        			  </Typography>;

		return(
			<Paper elevation={1} style={{padding: '24px'}}>
				{ cityDetail && 'weather' in cityDetail ? <DetailForecast 
															cityDetail={cityDetail}
															getForecastAction={getForecastAction}
															weather={cityDetail.weather} /> : empty } 
			</Paper>
		)
	}

}

class DetailForecast extends PureComponent {

	render() {
		const { weather, cityDetail } = this.props;
		const { getForecastAction } = this.props;
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
						<Table style={{background: '#FFFFFF', fontSize: '13px'}}>
							<TableBody>
								<TableRow>
									<TableCell>Атмосферное давление</TableCell>
									<TableCell><b>{weather.main.pressure}  гПа</b></TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Влажность</TableCell>
									<TableCell><b>{weather.main.humidity}  %</b></TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Скорость ветра</TableCell>
									<TableCell><b>{weather.wind.speed}  м/с</b></TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Направление ветра</TableCell>
									<TableCell>
										<ArrowUpward 
											style={{transform: `rotate(${weather.wind.deg}deg)`, color: '#DD4F43'}}/>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>
				<div className="forecast-wrap">
					<h6 className="forecast-header">
	        			Прогноз:
	      			</h6>
	      			{'forecast' in cityDetail ? <Forecast forecast={cityDetail.forecast} /> : <LinearProgress /> }
				</div>
				
			</div>
		);
	}

	componentDidMount(){
		let {getForecastAction} = this.props;
		getForecastAction(this.props.cityDetail);
	}

	componentWillReceiveProps(nextProps) {
		let {getForecastAction} = this.props;
		let {cityDetail} = this.props;

		setTimeout(()=>{
			if(JSON.stringify(cityDetail) !== JSON.stringify(nextProps.cityDetail)) {
				getForecastAction(nextProps.cityDetail);
			}
		},2000);
	}

}

export default Detail