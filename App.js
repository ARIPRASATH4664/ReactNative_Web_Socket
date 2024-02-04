/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store/index';
import { OrderBookScreen } from './screens/orderBookScreen';

function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.sectionContainer}>
          <OrderBookScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {flex: 1, backgroundColor: '#fff', margin: 10, borderWidth: 1},
});

export default App;
