import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
	return (
		<FlatList data={props.places} renderItem={(info) => (<ListItem placeName={info.item.value} onItemPressed={()=> props.onItemDeleted(info.item.key)}/>)} style={styles.listContainer}></FlatList>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		width: "100%"
	}
});

export default placeList;