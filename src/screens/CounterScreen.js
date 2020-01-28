import React, { useState } from 'react';
import {view , Text , StyleSheet , Button, View} from 'react-native';
  


const CounterScreen = () =>{
    
// todo : fix this
const[counter , setCounter] = useState(0);

//let counter = 0;

    return(
    
    <View>
        <Button title = "Increase" onPress ={ () =>{
      
      // Dont do this
      //   counter++;
      setCounter(counter + 1 )
         console.log(counter)
        }} />
        <Button title = "Decrease"onPress ={() =>{

               setCounter(counter - 1 )
         //   counter--;
            console.log(counter)
        }} />
<Text>Current Count: {counter}</Text>

    </View>)
};



const styles = StyleSheet.create({

})

export default CounterScreen ; 