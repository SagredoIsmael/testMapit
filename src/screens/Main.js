import React, { useEffect } from 'react'
import { View, Button, Text, StyleSheet, FlatList } from 'react-native'
import { DETAIL } from '../screens/Navigator'
import Alert from '../components/Alert'
import colors from '../utils/colors'

export default ({ navigate, fetchMotocycles, motocycles, isLoading, error }) => {
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
            <View
              style={styles.item}>
              <Text style={styles.textItem}>{item.id}</Text>
              <Text>{item.modelo} - {item.nombre}</Text>
            </View>
          }
        />}
      <Button
        title="go to detail"
        onPress={() => navigate(DETAIL)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
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