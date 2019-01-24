import React, {PureComponent} from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class CitiesListItem extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const {city} = this.props;
		const {removeCityAction} = this.props;
		const {selected} = this.props;
		//
		return (
			<ListItem button selected={selected} onClick={this.itemClickHeandler.bind(this)}>
			    <ListItemText
			        primary={city.name}
			        secondary={ ('weather' in city)? Math.floor(+city.weather.main.temp) + '\u2103' : null }/>
			    <ListItemSecondaryAction>
			        <IconButton aria-label="Delete" onClick={removeCityAction}>
			            <DeleteIcon />
			        </IconButton>
			    </ListItemSecondaryAction>
            </ListItem>
		)
	}

	componentDidMount() {
		this.props.getWeatherNowAction(this.props.city); //получаем погоду для элемента списка
	}

	itemClickHeandler() {
		let {city, setActiveItemAction, setDetailCityAction} = this.props;

		setActiveItemAction(city.uniqueId);
		setDetailCityAction(city);
	}

}

export default CitiesListItem