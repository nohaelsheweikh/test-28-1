import React from 'react';
import {View , Text , StyleSheet , Image} from 'react-native'
import axios from 'axios';

 class TestApi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
   //   imageURL: '',
      myText : null,
      myImage : null,
      ourImage :null ,
    }
  }


  async componentDidMount(){
    try{
       await axios.get('https://dog.ceo/api/breeds/image/random')
       .then(response => {
             console.log(response);

          //   this.setState({ imageURL: response.data.message });

          console.log('ABDELAZIM Status' , response.data.status);
          console.log('ABDELAZIM Message' , response.data.message);

          this.setState ({
           myText : response.data.status ,
            myImage : response.data.message ,
          //  ourImage : response.data.message,
          })

          this.setState({text : response.data.status});
          this.setState({isLoading: false, dataSource: response})})
       .catch(err => console.log(err));
    } catch(error){
        console.log('Fetch Error:', error)
    }
 }
 
  render() {
    const { myText , myImage } = this.state;


    return (
<View>
<Text style = {styles.textStyle } > the result {' is '} {myText} </Text>
 <Text style = {styles.textStyle}>{myImage}</Text>
</View>

      );

   
   }
}

const styles  = StyleSheet.create ({

  textStyle :{
      marginVertical : 50,
      marginHorizontal :50,
      fontSize :20

  }
});


export default TestApi;