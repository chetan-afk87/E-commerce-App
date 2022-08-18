import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const CartItem = ({prop}) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={
          prop.image_url
            ? {
                uri: prop.image_url,
              }
            : require('../../../assets/default.jpeg')
        }
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{prop.name}</Text>
        <Text style={styles.title}>Quantity : {prop.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fad42a',
    marginVertical: 5,
    height: 140,
    width: '90%',
  },
  image: {
    flex: 1,
    height: 120,
    resizeMode: 'center',
    marginTop: 8,
    marginBottom: 5,
    marginLeft: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  rightContainer: {
    padding: 5,
    flex: 2,
  },
  title: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 20,
    color: 'black',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#60f731',
    padding: 10,
    marginTop: 40,
    width: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default CartItem;
