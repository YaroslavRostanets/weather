import React, {Component} from 'react';
import { connect } from 'react-redux';
import { CssBaseline, Grid, AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';

import CitiesAdder from './containers/CitiesAdder';
import CitiesList from './components/CitiesList';
import Detail from './components/Detail';

import { addCity} from './actions/citiesActions';

class App extends Component {

	render() {
		const {addCityAction} = this.props;
		const {cityDetail} = this.props;

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
						<CitiesList />
      				</Grid>
      				<Grid item xs={9}>
      					<Detail cityDetail={cityDetail} />
      				</Grid>
      			</Grid>
					
			</CssBaseline>
		)
	}
}

const mapStateToProps = store => {
	return {
		activeListItemId: store.ui.activeListItemId,
		cityDetail: store.cities.detailCity
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addCityAction: city => dispatch(addCity(city)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)