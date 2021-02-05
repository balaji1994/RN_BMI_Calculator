import React,{Component, component, useState, useEffect} from 'react'
import {Text, View, TextInput, StyleSheet, Button, FlatList} from 'react-native'

class Login extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            isLoading:true,
            data:[],
        }

        
    }
    onLogin(){
        alert(this.state.username+" "+this.state.password);
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => this.state.data = json.movies)
            .then(() => console.log(this.state.data))
            .catch((error) => console.error(error))
            .finally(() => this.state.isLoading = false);
        this.state.isLoading=false;
    }
    

    render(){
        return(<View>
            <TextInput value={this.state.username}
            onChangeText = {(username) => this.setState({username})}
            placeholder = "Username"
            style = {styles.input} />

            <TextInput value={this.state.password}
                onChangeText = {(password) => this.setState({password})}
                placeholder = "Password"
                style = {styles.input}/>

        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
        {this.state.data.length == 0 ? <Text>Please login to see the data</Text>:<FlatList data = {data} 
            keyExtractor = {({id},index) => id}
            renderItem={({item}) => (
                <Text>{item.title},{item.releaseyear}</Text>
            )}/>}
        
        </View>
        );
    }
}
export default Login


const styles = StyleSheet.create({
    input:{
        color:"#dfdfdf",
        fontSize:14,
        fontWeight:'bold',
        borderColor:"#000",
        borderWidth:0.5,
        paddingTop:15
    }
});