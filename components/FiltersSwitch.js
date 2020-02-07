import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const FiltersSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={'white'}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    margin: 10
  },
});

export default FiltersSwitch;