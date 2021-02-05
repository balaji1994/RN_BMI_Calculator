'use strict';
import React, { PureComponent, useState } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput,Button, TouchableOpacity, View, SafeAreaView } from 'react-native';
// import { RNCamera } from 'react-native-camera';


export default function App(){
    const [height, setheight] = useState('');
    const [weight, setweight] = useState('');
    const[bmi,setbmi] = useState('');
    const [bmiText,setbmitext] = useState('');
    const calculateBMI = () =>{
        let height_in_m = parseFloat(height) * 0.0254;
        let Bmi = Math.round(parseFloat(weight)/(height_in_m*height_in_m));
        setbmi(Math.round(parseFloat(weight)/(height_in_m*height_in_m)));
        console.log(Bmi);

        if (Bmi <= 18.5){
            setbmitext("You are underweight.");
        }
        else if(Bmi > 18.5 && Bmi < 25){
            setbmitext("You are normal");
        }
        else if(Bmi > 25 && Bmi < 30){
            setbmitext("You are Over weight");
        }
        else if(Bmi >= 30){
            setbmitext("You are Obese");
        }
        
    };
    const resetFields = () =>{
        setbmi('');
        setheight('');
        setweight('');
        setbmitext('');
    };
  return(
    // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <SafeAreaView style={{
        flex: 1,
        flexDirection: 'column',
        marginTop:20
      }}>
          
          <View style={{marginTop:25,paddingLeft:15}}>
          <Text style={{fontSize:16, fontWeight:'bold', color:"darkcyan"}}>BMI calculator</Text>
      <TextInput
      style={styles.inputtext}
      placeholder="Enter your height in Inches"
      onChangeText={height => setheight(height)}
      defaultValue={height}
    />
    <TextInput
      style={styles.inputtext}
      placeholder="Enter your weight in Kg"
      onChangeText={weight => setweight(weight)}
      defaultValue={weight}
    />
    <View style={{justifyContent:"space-around", alignItems:"stretch", marginTop:20}}>

    <Button style={styles.buttonstyle} onPress={calculateBMI} title="Calculate BMI" color="darkcyan"/>
    <Button style={{marginTop:20}} onPress={resetFields} title="Reset"/>
    </View>
    {bmi != "" && bmi != NaN && 
    <View style={{flex:1, marginTop:100, alignItems:"center"}}>
    <Text style={{fontSize:100, fontWeight:"bold", color:"darkcyan"}}>{Math.round(bmi,1)}</Text>
    <Text>{bmiText}</Text>
</View>
    }
    
      </View>
      </SafeAreaView>


      
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
    },
    inputtext:{
        height: 40,
        marginTop:15,
        borderColor:"darkcyan",
        borderWidth:1
    },
    buttonstyle:{
        paddingTop:15,
        marginTop:20
    }
})
