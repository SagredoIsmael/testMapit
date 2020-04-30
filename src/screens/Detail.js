import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapView from 'react-native-maps'
import constants from '../utils/map'
import colors from '../utils/colors'

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
                <MapView.Marker
                    coordinate={{ 
                        latitude: motocycle.coordenadas.latitud,
                        longitude: motocycle.coordenadas.longitud,
                     }}
                    title={motocycle.nombre}
                />
            </MapView>

        }

        {motocycle.precioCompra ?
            <View style={styles.textWrapper}>
                <Text style={styles.descriptionText}>
                    El valor mostrado a continuación es una
                    estimación de precio de recompra aproximado, es necesario realizar una tasación en un taller.
                    Por favor, consulta con tu concesionario para obtener una oferta en firme.
                </Text>
                <Text style={styles.titleText}>
                    El valor calculado de recompra de su motocicleta {motocycle.modelo} es de:
                </Text>
                <Text style={styles.priceText}>
                    {motocycle.precioCompra} €
                </Text>
            </View >
            :
            <View style={styles.textWrapper}>
                <Text style={styles.titleText}>
                    Error al obtener detalles de la moto
                </Text>
            </View>
        }
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: '40%'
    },
    textWrapper: {
        marginTop: '50%',
        margin: '5%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.primary
    },
    descriptionText: {
        margin: '5%',
        color: colors.secondary,
        textAlign: 'center',
        fontSize: 12
    },
    titleText: {
        color: colors.primary,
        textAlign: 'center',
        margin: '5%',
        fontWeight: 'bold',
        fontSize: 16
    },
    priceText: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center',
    }
})

export default Detail