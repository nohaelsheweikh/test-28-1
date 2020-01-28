import React ,{useState}  from 'react';
import {View , Text , Button ,StyleSheet , TextInput} from 'react-native';


const TextScreen =() =>{

    const [name , setName] = useState('');
    const [password , setPassword] = useState('');

    return(
        <View>

            <Text>Entre your name : 
            </Text>
<TextInput 

style = {style.input}
autoCapitalize = "none"
autoCorrect ={false}
value = {name}
onChangeText ={newValue => setName(newValue)}

/>

    {true ? <Text>That was true</Text> : null}


    <Text>Entre your Password : 
            </Text>
<TextInput 

style = {style.input}
autoCapitalize = "none"
autoCorrect ={false}
value = {password}
onChangeText ={newValue => setPassword(newValue)}

/>

    {password.length < 4 ?  <Text>Password must be 4 character</Text> : null}



        </View>
    )
}

const style = StyleSheet.create({
    input :{
        margin :15 ,
        borderColor : 'black',
        borderWidth : 1,
        fontSize :20,
    }

})

export default TextScreen;
