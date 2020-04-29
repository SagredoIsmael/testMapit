import { Alert } from 'react-native'

export default (title, msg) => {
    Alert.alert(
      title,
      msg,
        [
          {text: 'OK'},
        ],
        {cancelable: false},
      )
}