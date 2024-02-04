import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {OrderBookComponent} from '../components/orderBookCompnent';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {orderActionCreator} from '../store/action';
import {moderateScale} from 'react-native-size-matters';

export const OrderBookScreen = () => {
    
  var ws = React.useRef(
    new WebSocket('wss://api-pub.bitfinex.com/ws/2'),
  ).current;

  const isConnected = useRef();

  const dispatch = useDispatch();

  const openWSConnection = () => {
    ws.onopen = () => {
      let msg = JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        symbol: 'tBTCUSD',
        freq: 'F1',
        prec: 'P2',
      });

      ws.send(msg); // send a message
    };
  };

  const onCloseConnection = () => {
    ws.onclose = e => {
        setServerState('Disconnected. Check internet or server.');
      };
  }

  useEffect(() => {
    openWSConnection();
    ws.onmessage = e => {
      // let channelId =
      if (e.data) {
        try {
          let parsedData = JSON.parse(e.data);
          let channelId = parsedData[0];
          let price = parsedData[1][0];
          let amount = parsedData[1][2];
          if (typeof price === 'number' && typeof amount === 'number')
            dispatch(orderActionCreator({channelId, price, amount}));
        } catch (e) {}
      }
    };
    // onWSMessage();
    

    ws.onerror = e => {
      // an error occurred
      console.log('SUCK!!! ~ App ~ e on Error:', e);
    };

    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("SUCK!!! ~ unsubscribe ~ state:", state)
        if(isConnected.current !== state.isConnected) {
            if(state.isConnected) {
                openWSConnection();
            } else {
                onCloseConnection();
            }
            isConnected.current= state.isConnected;
        }
      
    });

    return () => {
      unsubscribe();
      onCloseConnection();
    };
  }, []);

  const orders = useSelector(state => state.orders);
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={styles.title}>
        OrderBook Screen
      </Text>
      <OrderBookComponent orders={orders} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {flex: 1, backgroundColor: '#fff'},
  title:{
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: '#000',
    paddingVertical: moderateScale(16),
  }
});
