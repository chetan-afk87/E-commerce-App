import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CartImg = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CartScreen');
        }}>
        <Image style={styles.cart} source={require('../../assets/cart.png')} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cart: {
    width: 35,
    height: 35,
    marginRight: 15,
  },
});
export default CartImg;
