import React ,{Component} from 'react';
import {View , Text , StyleSheet , FlatList} from 'react-native'

 class ListView extends Component {

// Test FlatList With Fetch

    state = {
    data :[],
    }

 componentDidMount(){
      this.fetchData();
  }

  fetchData = async () => {
     const response = await fetch('https://aghezty.ivascloud.com/api/categorys');
     const json = await response.json();
     this.setState(
       {data : json.data})
  }


//   async componentDidMount(){
//     try{
//        await axios.get('https://dog.ceo/api/breeds/image/random')
//        .then(response => {
//              console.log(response);

//           //   this.setState({ imageURL: response.data.message });

//           console.log('ABDELAZIM Status' , response.data.status);
//           console.log('ABDELAZIM Message' , response.data.message);

//           this.setState ({
//            myText : response.data.status ,
//             myImage : response.data.message ,
//           })

//           this.setState({text : response.data.status});
//           this.setState({isLoading: false, dataSource: response})})
//        .catch(err => console.log(err));
//     } catch(error){
//         console.log('Fetch Error:', error)
//     }
//  }
 
  render() {
    return (
<View style = {styles.container} >
    <FlatList 
    data = {this.state.data}
    keyExtractor = {(x ,i) => i }
    renderItem = {({item}) => 
  <Text>
      {`${item.title_en}
       `}
  </Text>
}
    
    >

         
    </FlatList>
</View>

      );

   
   }
}

const styles  = StyleSheet.create ({

  container :{
      marginVertical : 50,
      marginHorizontal :50,
      fontSize :20,
      flex :1 ,
      justifyContent : "center",
      alignItems :"center",
      backgroundColor : "#F5FCFF"


  }
});


export default ListView;