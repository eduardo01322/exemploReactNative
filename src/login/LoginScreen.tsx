import React from "react";
import { Image, StyleSheet, View } from "react-native";



function LoginScreen(): JSX.Element{
    return (
        <View style={styles.cotainer}>
            <Image resizeMode="contain"
            source={require('../assets/imagens/user.png')} />
        </View>
    ); 
}

const styles= StyleSheet.create({
cotainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple'
}
});


export default LoginScreen;