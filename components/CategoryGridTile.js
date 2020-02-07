import React from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
  return (
    <View style={styles.item}>
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default CategoryGridTile;