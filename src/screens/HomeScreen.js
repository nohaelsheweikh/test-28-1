import React from 'react';
import { Text, StyleSheet, View , Button ,TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  return(
    <View style={styles.Container}>

  
  {/* <Button 
 on onPress = {() => navigation.navigate('List') }
 title = "Open ListScreen"
   />

<Button 
 on onPress = {() => navigation.navigate('Component') }
 title = "Open Component"
   />

<Button 
 on onPress = {() => navigation.navigate('ImageScreen') }
 title = "Open ImageScreen"
   />
<Button 
 on onPress = {() => navigation.navigate('TestApi') }
 title = "TestApi"
   />

<Button 
 on onPress = {() => navigation.navigate('ListView') }
 title = "List View Fetch"
   />

<Button 
 on onPress = {() => navigation.navigate('ListViewAxios') }
 title = "List View Axios"
   />
<Button 
 on onPress = {() => navigation.navigate('NewTest') }
 title = "New Test"
   />
<Button 
 on onPress = {() => navigation.navigate('Uxbert') }
 title = "Uxbert"
   />
<Button 
 on onPress = {() => navigation.navigate('CounterScreen') }
 title = "CounterScreen"
   />

<Button 
 on onPress = {() => navigation.navigate('ColorScreen') }
 title = "ColorScreen"
   />
<Button 
 on onPress = {() => navigation.navigate('SquareScreen') }
 title = "SquareScreen"
   />


<Button 
 on onPress = {() => navigation.navigate('TextScreen') }
 title = "TextScreen"
   /> */}


<Button 
 on onPress = {() => navigation.navigate('BoxScreen') }
 title = "Pay Now"
   />




{/* <TouchableOpacity style = {styles.Button }
onPress ={() => navigation.navigate('Component')}>
<Text>  Go to Component Demo </Text>
</TouchableOpacity> */}

  </View>
  );
};  

const styles = StyleSheet.create({
  Container:{
   marginTop:100
  },
  text: {
    fontSize: 30,
    margin :20

  }, 
  Button:{
    margin :30
  }
});



export default HomeScreen;
