import React, { useEffect } from 'react'
import { View, Button, Text, StyleSheet, FlatList } from 'react-native'
import { DETAIL } from '../screens/Navigator'

export default ({ navigate, fetchMotocycles, motocycles  }) => {
    useEffect(() => { fetchMotocycles() }, [])

    return (
      <View style={styles.container}>
        <FlatList
          data={motocycles}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
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
      justifyContent: 'center', 
      alignItems: 'center'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })