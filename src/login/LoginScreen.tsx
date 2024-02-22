import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



function LoginScreen(): JSX.Element{
    return (
        <View style={styles.cotainer}>
            <Image style={styles.logo} resizeMode="contain"
            source={require('../assets/imagens/user.png')} />

            <View style={styles.card}>
                <Text style={styles.tile}>Login</Text>
            
                <TextInput style={styles.input} placeholder="E-mail"
                placeholderTextColor={"#151413"}
                />
                <TextInput style={styles.input} placeholder="Senha"
                placeholderTextColor={"#151413"}
                />
                <TouchableOpacity>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    ); 
}

const styles= StyleSheet.create({
cotainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a03de'
},
logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    marginTop: -150
},
card: {
    backgroundColor: '#FFFFFF',
    width: 300,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: { width:0, height:2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
},
tile: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#151413',
    marginBottom: 20,
    textAlign: "center"
},
input: {
    backgroundColor: '#D7D4D1',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black'
}

});


export default LoginScreen;