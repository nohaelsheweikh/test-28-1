import React, { Component } from 'react';
import { View , Text } from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';


class ListViewAxios extends React.Component{



    constructor(props){
    super(props);
     this.state= {
        data :[],

}

    }



   async componentDidMount(){
   try{
  const json =  await axios.get('https://aghezty.ivascloud.com/api/categorys')
    .then(response => response.data)
    .then(data =>{
    console.log('ABDELAZIM Status' , data.message);
    console.log('title_en' , data.title_en);


    
    this.setState ({
       // myText : data.message ,
        data : json.data

       })
    }
    )}
     catch(error){
    console.log('Fetch Error:', error)

}
}


    render(){
        return (
            <View>
               
                <FlatList
                data = {this.state.data}
               keyExtractor = {(x ,i) => i }
                renderItem = {({item}) => 
          <Text>{`${item.title_ar}`}</Text> }>
                </FlatList>
            </View>
        )}
    }


export default ListViewAxios;