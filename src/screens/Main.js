import React, { useEffect } from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { DETAIL } from '../screens/Navigator'
import Alert from '../components/Alert'
import colors from '../utils/colors'
import Icon from '../components/Icon'

export default ({ navigate, fetchMotocycles, motocycles, isLoading, error, setSelected }) => {
  useEffect(() => { fetchMotocycles() }, [])
  error && Alert('Fetch error', error.message)

  return (
    <View style={styles.container}>
      {motocycles.length > 0 &&
        <FlatList
          data={motocycles}
          onRefresh={() => fetchMotocycles()}
          refreshing={isLoading}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.item} onPress={() => {
              setSelected(item)
              navigate(DETAIL)
            }}>
              <View style={styles.cardWrapper} >
                <View >
                  <Text style={styles.textItem}>{item.id}</Text>
                  <Text>{item.modelo} - {item.nombre}</Text>
                </View>
                <Icon name={'motorcycle'} />
              </View>
            </TouchableOpacity>
          }
        />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    padding: 10
  },
  textItem: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.secondary
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center'
  }
})