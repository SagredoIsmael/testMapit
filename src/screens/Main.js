import React, { useEffect } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { MAIN } from '../screens/Navigator'

export default ({ navigate, fetchMotocycles  }) => {
    useEffect(() => { fetchMotocycles() }, [])

    return (
      <View style={styles.container}>
        <Button
          title="go to detail"
          onPress={() => navigate(MAIN)}
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
  })