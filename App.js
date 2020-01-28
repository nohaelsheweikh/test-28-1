

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'
import TestApi from './src/screens/TestApi'
import ListView from './src/screens/ListView'
import ListViewAxios from './src/screens/ListViewAxios'
import NewTest from './src/screens/NewTest'
import Uxbert from './src/screens/Uxbert'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen'
import ColorCounter from './src/component/ColorCounter'
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';



const navigator = createStackNavigator(
  {
    Home: HomeScreen ,
    Component : ComponentScreen,
    List : ListScreen,
    ImageScreen : ImageScreen,
    TestApi : TestApi,
    ListView : ListView, 
    ListViewAxios :ListViewAxios,
    NewTest :NewTest,
    Uxbert : Uxbert,
    CounterScreen : CounterScreen,
    ColorScreen : ColorScreen,
    SquareScreen :SquareScreen,
    ColorCounter:ColorCounter,
    TextScreen : TextScreen,
    BoxScreen : BoxScreen,


  },
  

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
     header:null,
      headerTintColor: 'Transparent',
      headerTitleStyle: {
        
      },
    }
  }
);


export default createAppContainer(navigator);

