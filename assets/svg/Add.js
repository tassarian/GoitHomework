import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Add() {
    return (
        <View style={styles.container}>
            <Svg width={30} height={30} viewBox="0 0 32 32">
                <Path
                    fill="#fff"
                    stroke="#ff6c00"
                    stroke-linejoin="miter"
                    stroke-linecap="butt"
                    stroke-miterlimit="4"
                    stroke-width="0.9697"
                    d="M27.636 12.121c0 6.427-5.21 11.636-11.636 11.636s-11.636-5.21-11.636-11.636c0-6.427 5.21-11.636 11.636-11.636s11.636 5.21 11.636 11.636z"
                ></Path>
                <Path
                    fill="#ff6c00"
                    d="M16.485 5.818h-0.97v5.818h-5.818v0.97h5.818v5.818h0.97v-5.818h5.818v-0.97h-5.818v-5.818z"
                ></Path>
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
