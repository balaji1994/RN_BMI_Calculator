import React,{Component, useState, useEffect} from 'react'

import {View, StyleSheet, Text, TextInput} from 'react-native'

import {Picker} from '@react-native-picker/picker'

import { Icon } from 'react-native-elements'
import { Button } from 'react-native';


class Sandbox extends Component{
    // Constructor
    constructor(props){
        super(props);
        this.state = {
            height_in:0,
            height_ft:5,
            weight:'',
            bmiText:'',
            language:"java",
            bmi:'',
            heights_ft:[
                {label:"4'",value:4},
                {label:"5'",value:5},
                {label:"6'",value:6},
                {label:"7'",value:7},
            ],
            heights_in:['0','1','2','3','4','5','6','7','8','9','10','11']
            // ,4,5,6,7,8,9,10]
        }
    }
    calculateBMI = () =>{
        // console.log(this.state.height_ft);
        if(this.state.weight!=""){
            console.log(this.state.height_in)

            let height = (this.state.height_ft * 12 + parseInt(this.state.height_in)) * 0.0254;
            let Bmi = Math.round(parseFloat(this.state.weight)/(height*height));
            // this.setState({bmi:Math.round(parseFloat(this.state.weight)/(height_in_m*height_in_m))});
            // console.log(this.state.language);
    
            if (Bmi <= 18.5){
                this.setState({bmiText:"You are underweight."});
            }
            else if(Bmi > 18.5 && Bmi < 25){
                this.setState({bmiText:"You are normal"});
            }
            else if(Bmi > 25 && Bmi < 30){
                this.setState({bmiText:"You are Over weight"});
            }
            else if(Bmi >= 30){
                this.setState({bmiText:"You are Obese"});
            }

            this.setState({bmi:Bmi})
            // console.log('This is BMI '+Bmi);
        }
        
    };

    resetFields = () =>{
        
        this.setState({bmi:""});
        this.setState({bmiText:""});
        this.setState({height:""});
        this.setState({weight:""});
    };



    render(){
        return(
            <View style={styles.container}>
                {/* HEADER*/}
                <View style={styles.header}>
                    <Text style={styles.headerText}>BMI Calculator</Text>
                </View>

                {/* Body*/}
                <View style={styles.body}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Height ft' in</Text>
                        <Picker
                            selectedValue={this.state.height_ft}
                            style={styles.field}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({height_ft: itemValue})
                            }>
                            {this.state.heights_ft.map((obj) =>{
                                return(<Picker.Item label={obj.label} value={obj.value} key={obj.value}/>)
                            })
                            }
                        </Picker>
                        <Picker
                            selectedValue={this.state.height_in}
                            style={styles.field,{width:100}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({height_in: itemValue})
                            }>
                            {this.state.heights_in.map((obj,index) =>{
                                return(<Picker.Item label={obj} value={obj} key={index}/>)
                            })
                            // <Picker.Item label={"text"} value={"text"}/>
                            }
                        </Picker>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Weight Kgs</Text>
                        <TextInput 
                            defaultValue={this.state.weight}
                            style={{padding:10}}
                            onChangeText={weight => this.setState({weight})} 
                            placeholder="Enter weight in Kgs">
                        </TextInput>
                    </View>

                    <View style={styles.inputGroup,{alignItems:"flex-end",paddingRight:40}}>
                        <Button style={{flex:1, }} title="Get BMI" color="darkcyan" onPress={this.calculateBMI}></Button>
                    </View>

                    {this.state.bmi != "" && 

                        <View style={styles.outputArea}>
                            <Text style={{fontSize:100, fontWeight:"bold", color:"darkcyan"}}>{this.state.bmi}</Text>
                            <Text>{this.state.bmiText}</Text>
                            <Icon
                                reverse
                                name='repeat'
                                type='font-awesome'
                                color='#dfdfdf'
                                onPress={this.resetFields}
                                />
                        </View>
                    }
                    
                </View>
                {/* Body ENDS */}


            </View>
        )
    }
}
export default Sandbox

const styles=StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"space-around",
        backgroundColor:"#fff",
        paddingTop:0,

    },

    header:{
        paddingBottom:30,
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"stretch",
    },

    headerText:{
        color:"#fff",
        fontSize:40,
        fontWeight:"bold",
        backgroundColor:"darkcyan",
        padding:10,
        paddingTop:40,
        flex:1,
        textAlign:"center"
    },

    body:{
        flexDirection:"column",
        alignItems:"stretch"
        
    },
    inputGroup:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-start",
        paddingBottom:10
    },

    label:{
        padding:10,
        backgroundColor:"darkcyan",
        fontSize:20,
        color:"#fff"
    },

    field:{
        paddingLeft:10,
        width:80,
    },
    
    outputArea:{
        flexDirection:"column",
        padding:50,
        alignItems:"center"
    }
});