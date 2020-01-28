import React from 'react';
import { Text , StyleSheet , View } from 'react-native';
import axios from 'axios';


const ComponentScreen = () => {
    const greeting = 'Hi Abdelazim there!';
    const hello = <Text>Hello text</Text>
    const name  = 'Abdelazim Hesham'

return(
<View>
<Text style = {styles.textStyle } > This is the component screen  </Text> 
<Text style = {styles.subHeaderStyle} > My Name is {name} </Text>

<Text > {greeting}</Text>
{hello}
</View>
);





};

const styles = StyleSheet.create({
textStyle : {
fontSize : 30
}, 
subHeaderStyle :{
    fontSize :20
}



});



export default ComponentScreen;