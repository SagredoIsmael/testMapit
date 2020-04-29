import React from 'react'
import NavigationWrapper from '@sagredoismael/navigation_rn'
import mainScreen from '../redux/containers/main'
import detailScreen from '../redux/containers/detail'
import { screensNames } from '../utils/screens'
import colors from '../utils/colors'

export const { MAIN, DETAIL} = screensNames

const Navigator = () =>
  <NavigationWrapper screens={screens} headerCommonsOptions={headerCommonsOptions} />

const screens = [ 
  {
    name: MAIN,
    component: mainScreen,
  },
  {
    name: DETAIL,
    component: detailScreen,
    hasDrawer: true,
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
