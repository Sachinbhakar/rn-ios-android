import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
		places: [],
		selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({key: Math.random(), name: placeName, image: {uri: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_397624165.jpg'}})
      };
    });
  };

	placeDeletedHandler = () => {
		this.setState(prevState => {
			return {
				places: prevState.places.filter(place => {
					return place.key !== prevState.selectedPlace.key;
				}),
				selectedPlace: null
			};
		});
	}

	modalClosedHandler = () => {
		this.setState({
			selectedPlace: null
		});
	}

	placeSeletedHandler = (key) => {
		this.setState(prevState =>{
			return {
				selectedPlace: prevState.places.find(place => {
					return place.key === key;
				})
			};
		});
	}

  render() {
    return (
			<View style={styles.container}>
				<PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}/>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList places={this.state.places} onItemSeleted={this.placeSeletedHandler}/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 46,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
	}
});
