import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  ImageBackground,
  Dimensions
} from "react-native";

import colors from "../styles/colors";

import logoImg from "../assets/logo.png";
import backgroundImg from "../assets/bgimg.png";
import { Button } from "../components/button";

export function Login() {
  return (
    <ImageBackground source={backgroundImg} style={styles.bgimg}>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg} style={styles.logo} resizeMode="contain" />
                    <View style={styles.form}>
                        <TextInput style={styles.input} placeholder="Usuário"  autoCapitalize="none"/>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" />
                        <Button title="LOGIN" pageStyles={styles.button} />
                    </View>
            </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around'
  },
  logo:{
    height: Dimensions.get("window").height * 0.20,
    marginTop:58
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
    paddingBottom:250,
    paddingTop:150
  },
  bgimg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
//   bgfilter: {
//     flex: 1,
//     width:'100%',
//     backgroundColor: colors.filter,
//     opacity: 0.5
//   },
  input: {
    borderBottomWidth: 1,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 58,
  },
  button:{
      marginTop: 150,
      paddingHorizontal:100
  }
});
