import React, {Component} from 'react';
import { connect } from 'react-redux';
import { CssBaseline, Grid, AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import './App.css';

import CitiesAdder from './containers/CitiesAdder';
import CitiesList from './components/CitiesList';
import { addCity } from './actions/citiesActions';


class App extends Component {

	render() {
		const {citiesList} = this.props.cities;
		const {addCityAction} = this.props;

		return(
			<CssBaseline>
				<AppBar position="static" color="primary" style={{marginBottom: '40px'}}>
			        <Toolbar>
			          <Typography variant="h6" color="inherit">
			            Погода в мире
			          </Typography>
			        </Toolbar>
      			</AppBar>
      			<Grid className="container" container spacing={16}>
      				<Grid item xs={3}>
      					<CitiesAdder addCityAction={addCityAction} />
						<CitiesList citiesList={citiesList} />
      				</Grid>
      				<Grid item xs={9}>
      					<Paper elevation={1} style={{padding: '24px'}}>
							<Typography variant="h6" component="h5">
          						Погода в городе <b>Киев</b> 
        					</Typography>
        					     
						</Paper>
      				</Grid>
      			</Grid>
					
			</CssBaseline>
		)
	}
}

const mapStateToProps = store => {
	return {
		ui: store.ui,
		cities: store.cities
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addCityAction: city => dispatch(addCity(city))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)