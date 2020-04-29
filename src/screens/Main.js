import React from 'react'
import {
  Text, View, Button
} from 'react-native'

const Main = ({ navigate }) => {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>first</Text>
        <Button
          title="test"
          onPress={() => console.log("@@test")}
        />
      </View>
    )
  }

  export default Main