import React from 'react'
import NavigationWrapper from '@sagredoismael/navigation_rn'
import MainScreen from './Main'
import DetailScreen from './Detail'
import { screensNames } from '../utils/screens'
import colors from '../utils/colors'

const { MAIN, DETAIL} = screensNames

const Navigator = () =>
  <NavigationWrapper screens={screens} headerCommonsOptions={headerCommonsOptions} />

const screens = [ 
  {
    name: MAIN,
    component: MainScreen,
  },
  {
    name: DETAIL,
    component: DetailScreen,
  }
]

const headerCommonsOptions = {
  gestureEnabled: true,
  cardOverlayEnabled: true,
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: '#f5f0ed',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

export default Navigator
