import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import axios from 'axios';


const { width, height } = Dimensions.get('window');

class NewTest extends Component{


    constructor(props){
    super (props);

  this.state = {
       isLoading: true,
        data: "" }
        
    }

    componentDidMount() {
        axios.get('https://aghezty.ivascloud.com/api/categorys')
           .then(res => {
                this.setState({
                    isLoading: false,
                    data: res.data.data,
                 //   data: res.data.data.sub_cats,

        
                })
            })
    }

    renderItem(item) {
        const { id, title_en, title_ar, image } = item.item;
        return (
            <View style={styles.itemView}>
                <View style={styles.imgContainer}>
                    <Image style={styles.imageStyle}
                        source={{ uri: image }}
                    />
                </View>
                
                <View style={styles.itemInfo}>
                    <Text style={styles.name}>
                        {title_en}
                    </Text>
                    <Text numberOfLines={1}>{title_ar}</Text>
                </View>
            </View>
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
               <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
   },
   itemView: {
       flex: 1,
       width,
       borderBottomWidth: 0.5,
       borderColor: '#cdcdcd',
       borderStyle: 'solid',
       paddingHorizontal: 12,
       flexDirection: 'row',
   },
   imgContainer: {
       flex: 0,
       borderColor: '#f4f4f4',
       borderWidth: 1.5,
       height: 60,
       width: 60,
       alignItems: 'center',
       justifyContent: 'center',
   },
   itemInfo: {
       flex: 1,
       marginHorizontal: 10,
   },
   name: {
       fontFamily: 'Verdana',
       fontSize: 18,
       color: '#ff0000',
       textAlign: 'left',
   },
   imageStyle: {
       height: 50,
       width: 50,
   }
});

export default NewTest;