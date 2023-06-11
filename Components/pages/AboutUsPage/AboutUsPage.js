import React from "react";
import { View,Text,Linking } from "react-native";
import {Ionicons} from '@expo/vector-icons';

export default AboutUsPage = () => {
    return(
        <View>
            <Text style={{fontSize:20, fontWeight:'bold',padding:15}}>
                Who are we?
            </Text>
            <Text style={{fontSize:20 ,padding:15}}>
                We are 2 computer engineering students in Dokuz Eylül University.
            </Text>
            <Text style={{fontSize:20 ,padding:15}}>
                Contact Us!!!
            </Text>
            <View style={{flexDirection:'row'}}>
                <Ionicons style={{padding:5}} name="logo-linkedin" size={32}></Ionicons>
                <Text style={{fontSize:20 ,padding:5,color:'blue',fontWeight:'bold'}} onPress={()=>Linking.openURL("https://www.linkedin.com/in/mehmet-fatih-birdir/")}>
                Mehmet Fatih Birdir
                </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Ionicons style={{padding:5}} name="logo-linkedin" size={32}></Ionicons>
                <Text style={{fontSize:20 ,padding:5,color:'blue',fontWeight:'bold'}} onPress={()=>Linking.openURL("https://www.linkedin.com/in/oguzalptekin/")}>
                Ismail Oğuz Alptekin
                </Text>
            </View>
            
        </View>
    )
}