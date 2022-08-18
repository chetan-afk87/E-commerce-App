import React from 'react';
import {View, FlatList, Image, StyleSheet, Text} from 'react-native';
import CartItem from '../../components/CartItem';
import useStore from '../../../useStore';

const CartScreen = () => {
  const CartList = useStore(state => state.cartList);
  console.log(CartList);
  if (CartList.length) {
    return (
      <View>
        <FlatList
          data={CartList}
          renderItem={({item}) => <CartItem prop={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Image
          style={styles.emptyImg}
          source={require('../../../assets/empty-cart.webp')}
        />
        <Text style={styles.text}>Your Cart is Empty!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  emptyImg: {
    height: 300,
    width: 400,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  bgScreen: {
    backgroundColor: 'cyan',
  },
});
export default CartScreen;
