import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../utils/colors'

export default ({ title, onPress }) =>
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
        <Text style={styles.textWrapper}>{title}</Text>
    </TouchableOpacity>

const styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        margin: 10,
        alignItems:'center',
        justifyContent: 'center'
    },
    textWrapper: {
        color: colors.white,
        fontSize: 20,
        padding: 10
    },
})