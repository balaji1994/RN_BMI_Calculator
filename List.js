import React,{Component} from 'react'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'

class List extends Component
{
    state = {
        names:[
            {id:1,name:"Harshinee"},
            {id:2,name:"Balaji"},
            {id:3,name:"Jeevan"},
            {id:4,name:"Surya"},
        ]
    };
    showItemName = (item) =>{
        alert(item.name);
    }
    render(){
        return(
            <View>
                {
                    this.state.names.map((item,index) => (
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress = {() => this.showItemName(item)}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}
export default List;

const styles = StyleSheet.create({
    container:{
        padding:10,
        marginTop:10,
        backgroundColor:"#dfdfdf",
        alignItems:'center',
    },
    text:{
        color: '#4f603c'
    }
});