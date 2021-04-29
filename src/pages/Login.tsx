import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";

import colors from "../styles/colors";

import logoImg from "../assets/logo.png";
import backgroundImg from "../assets/bgimg.png";

export function Login() {
  return (
    <ImageBackground source={backgroundImg} style={styles.bgimg}>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg}/>     
                    <View style={styles.form}>
                        <TextInput style={styles.input} placeholder="Usuário" />
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" />
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
  form: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
    paddingBottom:250
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
});
