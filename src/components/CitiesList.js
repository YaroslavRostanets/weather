import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem, Paper, Typography } from '@material-ui/core';
import CitiesListItem from './CitiesListItem';
import InfoIcon from '@material-ui/icons/Info';
import { removeCity, getWeatherNow, setDetailCity } from '../actions/citiesActions';

class CitiesList extends PureComponent {

	render() {

	const cities = this.props.citiesList;
	const { removeCityAction, getWeatherNowAction, setActiveItemAction, setDetailCityAction } = this.props;
	const { activeUniqueId } = this.props;
	const empty = <ListItem>
					<Typography gcomponent="p" style={{padding: '15px'}}>
            		 	Список городов пуст
          		  	</Typography>
          		  	<InfoIcon/>
          		  	</ListItem>

		return (
			<Paper>
				<List component="nav">
					{ cities.length ? null : empty }
					{cities.map( function(city, index){
						return(
							<CitiesListItem 
								key={index}
								city={city} 
								index={index}
								selected={city.uniqueId === activeUniqueId}
								getWeatherNowAction={getWeatherNowAction}
								setDetailCityAction={setDetailCityAction}
								removeCityAction={removeCityAction.bind(null,index)} />
						)
					} )}
				</List>
			</Paper>	
		)
	}
}

CitiesList.propTypes = {
	citiesList: propTypes.array.isRequired
}

const mapStateToProps = store => {
	return {
		activeUniqueId: store.cities.activeUniqueId,
		citiesList: store.cities.citiesList
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeCityAction: index => dispatch(removeCity(index)),
		getWeatherNowAction: city => dispatch(getWeatherNow(city)),
		setDetailCityAction: uniqueId => dispatch(setDetailCity(uniqueId))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CitiesList)