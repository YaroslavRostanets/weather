import React, {Component} from 'react';
import propTypes from 'prop-types'
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';

class CitiesList extends Component {



	render() {

	const cities = this.props.citiesList; 

		return (
			<Paper>
				<List>
					{cities.map( function(city, index){
						return(
							<ListItem key={index}>
		        				<ListItemText primary={city.name} secondary="+23 &#176;C" />
		      				</ListItem>
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

export default CitiesList