import React from 'react';
import { View , Text , StyleSheet , FlatList} from 'react-native';
import axios from 'axios';

const ListScreen =()=> {

    console.log('Test 1')

    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res);
      })
      }


    // function get_data () {
    // //     axios.get('https://www.orangevirtualivr.com/VirtualIVRAPI/MenuOptions/GetCompanyOptions?companyId=1')
    // //   .then(function (response) {
    // //     console.log(response);
    // //   })
    // //   .catch(function (error) {
    // //     console.log(error);
    // //   });
    //   axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(res => {
    //     console.log(res);
    //   })
    // }    

    // console.log(get_data);
    
const friends = [
    {name : 'friend 1', age : 1},
    {name : 'friend 2', age : 2},
    {name : 'friend 3', age : 3},
    {name : 'friend 4', age : 4},
    {name : 'friend 5', age : 5},
    {name : 'friend 6', age : 6},
    {name : 'friend 7', age : 7},
    {name : 'friend 8', age : 8},
    {name : 'friend 9', age : 9},
    {name : 'friend 10', age : 10},

    
];


return (
<FlatList
//horizontal = {true }
//showsHorizontalScrollIndicator ={false}
keyExtractor = {friends => friends.name}
data = {friends} 
renderItem = {
    ({item}) => {

return <Text style = {styles.textStyle} >{"name friend number  " + item.name +  "   the age is  "  +item.age}</Text>

}
} 
 
/>

    );
};


const styles  = StyleSheet.create ({

    textStyle :{
        marginVertical : 50,
        marginHorizontal :50,
        fontSize :20

    }
});




export default ListScreen ;