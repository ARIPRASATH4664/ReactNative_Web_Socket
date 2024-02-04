import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {OrderBookComponent} from '../components/orderBookCompnent';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {orderActionCreator} from '../store/action';
import { moderateScale } from 'react-native-size-matters';

export const OrderBookScreen = () => {
  var ws = React.useRef(
    new WebSocket('wss://api-pub.bitfinex.com/ws/2'),
  ).current;

//   const [,setOrderData] = useState([]);
    const orderDataRef =useRef([]);

  const dispatch = useDispatch();

  const openWSConnection = () => {
    ws.onopen = () => {
      let msg = JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        symbol: 'tBTCUSD',
        // freq: "F1",
        prec: 'P2',
      });

      ws.send(msg); // send a message
    };
  };

  useEffect(() => {
    openWSConnection();
    ws.onmessage = e => {
      // let channelId =
      if(e.data) {
        try {
          let parsedData = JSON.parse(e.data);
          let channelId= parsedData[0]
          let price = parsedData[1][0]
          let amount = parsedData[1][2]
          if(typeof price === 'number' && typeof amount === 'number')
          dispatch(orderActionCreator({channelId, price, amount}));
        }catch(e) {

        }
      }
    };
    // onWSMessage();
    ws.onclose = e => {
      setServerState('Disconnected. Check internet or server.');
      setDisableButton(true);
    };

    ws.onerror = e => {
      // an error occurred
      console.log('SUCK!!! ~ App ~ e on Error:', e);
    };

    return () => {
      // ws.onclose = (e) => {
      //   // connection closed
      //   console.log(e.code, e.reason);
      // };
    };
  }, []);

  const orders = useSelector(state => state.orders);

//   useEffect(() => {
//       console.log("SUCK!!! ~ OrderBookScreen ~ orders:", orders)
//       orderDataRef.current = orders
//   }, [orders])


 
  return (
    <View style={styles.sectionContainer}>
      <Text style={{fontSize: moderateScale(20), fontWeight: '600', color: '#000',paddingBottom: moderateScale(16)}}>OrderBook Screen</Text>
      <OrderBookComponent orders={orders}/>
    </View>
  );
};

const styles = StyleSheet.create({
    sectionContainer: {flex: 1, backgroundColor: '#fff'},
  });
  
