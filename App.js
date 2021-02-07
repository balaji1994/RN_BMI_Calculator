'use strict';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Sandbox from "./components/flexUsage.js"

// import { RNCamera } from 'react-native-camera';


class App extends Component{
    render(){
        return(
            <SafeAreaView>
                <Sandbox></Sandbox>
            </SafeAreaView>
        )
    }
}

export default App

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignContent:'center',
//     },
//     inputtext:{
//         height: 40,
//         marginTop:15,
//         borderColor:"darkcyan",
//         borderWidth:1
//     },
//     buttonstyle:{
//         paddingTop:15,
//         marginTop:20
//     }
// })
