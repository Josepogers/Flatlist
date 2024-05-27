import React from 'react';
import { Header } from './src/components/header';

import { Image, View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const Materias = [
  {
    title: 'Portugues',
    icon: require('./src/assets/images.png'),
  },
  {
    title: 'Matematica',
    icon: require('./src/assets/images.png'),
  },
  {
    title: 'Ingles',
    icon: require('./src/assets/images.png'),
  },
   {
     title: 'Historia',
     icon: require('./src/assets/images.png'),
  },
    {
      title: 'Geografia',
      icon: require('./src/assets/images.png'),
  }, {
      title: 'Biologia',
    icon: require('./src/assets/images.png'),
  }, {
      title: 'Redacao',
    icon: require('./src/assets/images.png'),
  }, {
      title: 'Filosofia',
    icon: require('./src/assets/images.png'),
  },
];

const Item = ({title, icon}) => (
  <View style={styles.item}>
    <Image source={icon} style={styles.icon } />
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity><Text style = {styles.b_estudar}>Estudar</Text></TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header />}
        data={Materias}
          renderItem={({item}) => <Item icon={item.icon} title={item.title} />}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#121212',
  },
  item: {
    backgroundColor: '#1E1E1E',
    gap: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
    color: '#BB86FC',
  },
  b_estudar: {
    fontSize: 18,
    color: '#03DAC6',
    marginLeft: 'auto',
  },
});

export default App;