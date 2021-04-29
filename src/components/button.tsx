import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps{
    title: string,
    pageStyles: any
}

export function Button({title, pageStyles, ...rest}: ButtonProps){
    return(
        <TouchableOpacity style={[styles.container, {...pageStyles}]} {...rest} activeOpacity={0.7}>
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgButton,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    buttonText: {
        color: colors.heading,
        fontSize: 16,
        fontFamily: fonts.heading,
        letterSpacing: 4
    }
})