'use strict';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Sandbox from "./components/flexUsage.js"

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
