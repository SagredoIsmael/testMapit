import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import constants from '../utils/map'

const Detail = ({ motocycle, goBack }) =>
    <View style={styles.container}>
        {motocycle &&
            <MapView
                style={styles.map}
                region={{
                    latitude: motocycle.coordenadas.latitud,
                    longitude: motocycle.coordenadas.longitud,
                    latitudeDelta: constants.LATITUDE_DELTA,
                    longitudeDelta: constants.LONGITUDE_DELTA,
                }}
            >
            </MapView>
        }
    </View>

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default Detail