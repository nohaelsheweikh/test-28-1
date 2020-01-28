import React from 'react';
import {View , Text , StyleSheet ,Image } from 'react-native';

const ImageDetails = props => {
    console.log
return( 
<View>
<Image source ={props.imageSource} ></Image>
<Text> {props.title}</Text>
<Text> {props.score}</Text>

</View>
)
}


const styles = StyleSheet.create({

});

export default ImageDetails;



