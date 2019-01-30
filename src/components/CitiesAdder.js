import React, {Component} from 'react';

import { Typography, Paper, TextField, List, ListItem, ListItemText, Button } from '@material-ui/core';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress
} from 'react-places-autocomplete';

class CitiesAdder extends Component {

	constructor(props) {
	    super(props);
	    this.state = { 
		    address: '',
		    abilityToAdd: false
	    };
	    this.cityObj = {
		  	coordinates: {}
	  	};
  	}
 
	handleChange = address => {
	    this.setState({ 
	    	address: address,
	    	abilityToAdd: false
	    });
	};
 
	handleSelect = address => {	
	  	this.setState({
	  		address: address
	  	});
	  	geocodeByAddress(address).then(results => {
	  		this.cityObj.name = results[0]['address_components'][0]['long_name'];
	  		return results;
	  	})
	  	.then(results => {
	  		this.cityObj.coordinates.lat = results[0].geometry.location.lat();
	  		this.cityObj.coordinates.lng = results[0].geometry.location.lng();
	  		this.setState({
	  			abilityToAdd: true
	  		});
	  		return results;
	  	})
	  	.catch(error => console.error('Error', error));
	};

	handleButton = () => {
		this.cityObj.uniqueId = new Date().valueOf();
		this.props.addCityAction({...this.cityObj});
		this.setState({
	  		address: '',
	  		abilityToAdd: false
	  	});
	}

	render() {
		const searchOptions = {
			types: ['(cities)']
		};
		
		return (
			<Paper elevation={1} className="cities-adder">
				<Typography variant="h6" component="h6"
					align="center"
					style={{lineHeight: 'normal', fontSize: '1.15rem', marginBottom: '16px'}}>
          			Добавьте нужный город в список
        		</Typography>
      			<PlacesAutocomplete
        			value={this.state.address}
        			onChange={this.handleChange}
        			onSelect={this.handleSelect}
        			searchOptions={searchOptions}
      				>
        		{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          		<div style={{position: 'relative', marginBottom: '16px'}}>
		            <TextField
		            	variant="outlined"
		            	label="Название города"
		            	className="cities-adder-field"
						{...getInputProps()}
		      			/>
			            <List className="autocomplete-dropdown-container">
			              {loading && <ListItem style={{backgroundColor: '#ffffff'}}>
			              				<ListItemText>Поиск...</ListItemText>
			              			  </ListItem>}
			              {suggestions.map(suggestion => {
			                const className = suggestion.active
			                  ? 'suggestion-item--active'
			                  : 'suggestion-item';
			                // inline style for demonstration purpose
			                const style = suggestion.active
			                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
			                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
			                return (
			                  <ListItem
			                    {...getSuggestionItemProps(suggestion, {
			                      className,
			                      style,
			                    })}
			                  >
			                    <ListItemText>{suggestion.description}</ListItemText>
			                  </ListItem>
			                );
			              })}
			            </List>
          		</div>
        		)}
      			</PlacesAutocomplete>
		      	<Button variant="contained" 
		      			align="center"
		      			onClick={this.handleButton}
		      			disabled={!this.state.abilityToAdd} 
		      			color="primary" style={{width: '100%'}}>
		        	Добавить
		      	</Button>
			</Paper>
		)
	}
}

export default CitiesAdder