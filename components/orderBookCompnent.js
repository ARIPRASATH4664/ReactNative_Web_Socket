import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const OrderBookComponent = props => {
    console.log('SUCK!!! ~ OrderBookComponent ~ props:', props);

  return (
    <View style={styles.sectionContainer}>
      <View style={{flexDirection: 'column', flex: 1, borderRightWidth :0}}>
        <View style={styles.splitContainer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>TOTAL</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>PRICE</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <FlatList
            data={Object.keys(props.orders)}
            renderItem={({index, item}) => {
              let width = Math.abs( Math.round(Math.abs(props.orders[item] * item))% 100);
              return (
                <View style={styles.splitNestedContainer}>
                  <View style={{...styles.leftListBackground, width:`${width}%`}} />
                  <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>{props.orders[item]}</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{item}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={styles.splitContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLeftText}>PRICE</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalRightText}>TOTAL</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <FlatList
            data={Object.keys(props.orders)}
            renderItem={({index, item}) => {
              let width = Math.abs( Math.round(Math.abs(props.orders[item] * item))% 100);
              return (
                <View style={styles.splitNestedContainer}>
                  <View style={{...styles.rightListBackground, width:`${width}%`,}} />
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceLeftText}>{props.orders[item]}</Text>
                  </View>
                  <View style={styles.totalContainer}>
                    <Text style={styles.totalRightText}>{item}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {flexDirection: 'row', flex: 1, backgroundColor: '#fff'},
  splitContainer: {
    flexDirection: 'row',
    flex: 0.05,
    backgroundColor: '#fff',
    width: '100%',
    height: moderateScale(26),
  },
  splitNestedContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
  },
  leftListBackground: {
    backgroundColor: '#rgba(255, 99, 71, 0.4)',
    position: 'absolute',
    zIndex: -1,
    right: 0,
    height: '100%',
  },
  rightListBackground: {
    backgroundColor: 'rgba(194, 237, 120, 0.8)',
    position: 'absolute',
    zIndex: -1,
    left: 0,
    height: '100%',
  },
  totalContainer: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
  },
  totalText: {
    borderBottomWidth: 1,
    flex: 1,
    width: '100%',
    paddingLeft: 3,
  },
  totalRightText: {
    borderBottomWidth: 1,
    flex: 1,
    width: '100%',
    paddingRight: 10,
    textAlign: 'right',
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-end',
    width: '100%',
  },
  priceText: {
    borderBottomWidth: 1,
    flex: 1,
    width: '100%',
    textAlign: 'right',
    paddingRight: 3,
  },
  priceLeftText: {
    borderBottomWidth: 1,
    flex: 1,
    width: '100%',
    textAlign: 'left',
    paddingLeft: 3,
  },
});
