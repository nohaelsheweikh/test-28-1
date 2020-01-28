import React from 'react';
import {View , Text , StyleSheet } from 'react-native';
import ImageDetails from '../component/ImageDetails'


const ImageScreen = () =>{
    return (
        <View>
<ImageDetails title ="Forest"    imageSource ={require('../assets/forest.jpg') }  score ="image score = 9"   />
<ImageDetails title ="Beach"     imageSource ={require('../assets/beach.jpg')} score ="image score = 7"   />
<ImageDetails title ="Mountain"  imageSource ={require('../assets/mountain.jpg')}  score ="image score = 4"   />

        </View>
    )
}


const styles = StyleSheet.create({

});

export default ImageScreen;