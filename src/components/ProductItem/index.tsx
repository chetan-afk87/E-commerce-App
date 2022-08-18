import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useStore from '../../../useStore';

const ProductItem = ({prop}) => {
  const addToCart = useStore(state => state.addToCart);
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={
          prop.image_url
            ? {uri: prop.image_url}
            : require('../../../assets/default.jpeg')
        }
      />
      <View style={styles.rightContainer}>
        <Text numberOfLines={2} style={styles.title}> {prop.name}</Text>
        <Text style={styles.price}>Price : {prop.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => addToCart(prop)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#fad42a',
    marginVertical: 5,
    height: 250,
    width: '47%',
    marginLeft: 5.5,
    marginRight: 4.5,
  },
  image: {
    flex: 3,
    height: 150,
    width: 150,
    marginTop: 10,
    marginLeft: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#c7305d',
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#60f731',
    padding: 5,
    marginTop: 10,
    width: 150,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
  },
});

export default ProductItem;
