import React from 'react'
import colors from '../utils/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

export default ({ name }) =>
    <Icon name={name}
        size={30}
        color={colors.secondary} />