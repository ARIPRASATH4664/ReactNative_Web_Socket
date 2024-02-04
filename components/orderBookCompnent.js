import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const OrderBookComponent = props => {
//   console.log("SUCK!!! ~ OrderBookComponent ~ props:", props)

  return (
    <View style={styles.sectionContainer}>
      <View style={{flexDirection: 'column', flex: 1, borderWidth: 1}}>
        <View style={styles.splitContainer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>TOTAL</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>PRICE</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',
    flex: 1,}}>
        <FlatList
          data={props.orders}
          renderItem={({index, item}) => {
            return (
              <View style={styles.splitNestedContainer}>
                <View style={styles.totalContainer}>
                  <Text style={styles.totalText}>{item.amount}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
              </View>
            );
          }}
        />
        </View>
      </View>
      <View style={{flexDirection: 'column', flex: 1, borderWidth: 1}}>
        <View style={styles.splitContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLeftText}>PRICE</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalRightText}>TOTAL</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',
    flex: 1,}}>
        <FlatList
          data={props.orders}
          renderItem={({index, item}) => {
            return (
              <View style={styles.splitNestedContainer}>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceLeftText}>{item.price}</Text>
                </View>
                <View style={styles.totalContainer}>
                  <Text style={styles.totalRightText}>{item.amount}</Text>
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
    height: moderateScale(26)
  },
  splitNestedContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
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
    paddingRight: 3,
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
    paddingRight: 10,
  },
  priceLeftText: {
    borderBottomWidth: 1,
    flex: 1,
    width: '100%',
    textAlign: 'left',
    paddingLeft: 10,
  },
});
