import React, { useEffect } from 'react'
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { DETAIL } from '../screens/Navigator'
import Alert from '../components/Alert'
import colors from '../utils/colors'

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
              <View >
                <Text style={styles.textItem}>{item.id}</Text>
                <Text>{item.modelo} - {item.nombre}</Text>
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
    marginTop: 20,
  },
  item: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    padding: 10
  },
  textItem: {
    fontWeight: 'bold',
    fontSize: 18
  },
})