import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ProductItem from '../../components/ProductItem';

type Data = {
  name: string;
  description: string;
  price: number;
  image_url: string;
  id: string;
};
const objectList: Data[] = [];

const HomeScreen = () => {
  const fetchData = () => {
    const url = `https://api.opensea.io/api/v1/collections?offset=${offset}&limit=10`;

    fetch(url)
      .then(response => response.json())
      .then(json => {
        for (let obj of json.collections) {
          let item: Data = {
            name: obj.name,
            description: obj.description,
            price: obj.stats.average_price,
            id: obj.name,
            image_url: obj.image_url,
          };

          if (!objectList.find(product => product.id === item.id)) {
            objectList.push(item);
          }
        }
        setData(objectList);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchData();
    setOffset(offset + 10);
  }, []);

  console.log(data);
  return (
    <View style={styles.bgScreen}>
      <FlatList
        numColumns={2}
        data={data}
        onEndReached={() => {
          fetchData();
          setOffset(offset + 10);
        }}
        renderItem={({item}) => <ProductItem prop={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgScreen: {
    backgroundColor: 'cyan',
  },
});
export default HomeScreen;
