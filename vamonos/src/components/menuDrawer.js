import React from 'react'
import {
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation'

import inicio from './pantalla1';
import Pantalla2 from './pantalla2';
import Pantalla3 from './pantalla3';
import PantallaInformacion from './pantalla-informacion'

import {
    Image,
} from 'react-native'

import CustomDrawerContentComponent from './custom-drawer';


const Pantalla1Navigator = createStackNavigator({
    inicio: {
      screen: inicio,
      navigationOptions: {
        title: 'Vamonos',
        headerStyle: {
          backgroundColor: '#193555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
  initialRouteName: 'inicio',
  
  })

const Pantalla2Navigator = createStackNavigator({
    Pantalla2: {
      screen: Pantalla2,
      navigationOptions: {
        title: 'Favoritos',
        headerStyle: {
          backgroundColor: '#193555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    });

    const Pantalla3Navigator = createStackNavigator({
        Pantalla3: {
          screen: Pantalla3,
          navigationOptions: {
            title: 'Mapa',
            headerStyle: {
              backgroundColor: '#193555',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
        },
        });


const PantallaInformacionNavigator = createStackNavigator({
  pantallaInformacion: {
    screen: PantallaInformacion,
    navigationOptions: {
      title: 'Atractivos',
      headerStyle: {
        backgroundColor: '#193555',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
},
{
  initialRouteName: 'pantallaInformacion',
})


export default TestMenuDrawer = createDrawerNavigator({
    Pantallan1: {
        screen: Pantalla1Navigator,
        navigationOptions: {
            drawerLabel: 'Inicio',
            drawerIcon: <Image source={require('../image/Inicio.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
    Pantalla2: {
        screen: Pantalla2Navigator,
        navigationOptions: {
            drawerLabel: 'Favoritos',
            drawerIcon: <Image source={require('../image/like-2.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
    Pantallan3: {
        screen: Pantalla3Navigator,
        navigationOptions: {
            drawerLabel: 'Mapa',
            drawerIcon: <Image source={require('../image/mapa.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
        },
    },
    PantallaInformacion: {
      screen: PantallaInformacionNavigator,
      navigationOptions: {
        drawerLabel: 'Atractivos',
        drawerIcon: <Image source={require('../image/safari.png')} style={{resizeMode: 'cover', width: 24, height: 24,}} />,
      },
    },
},{
    contentComponent: CustomDrawerContentComponent,
})
