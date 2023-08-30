import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Grid() {
    return (
        <View style={styles.container}>
            <Svg width={24} height={24} viewBox="0 0 32 32">
                <Path fill="transparent" d="M0 0h32v32h-32v-32z"></Path>
                <Path
                    fill="none"
                    stroke="#212121"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-miterlimit="4"
                    stroke-width="1.3333"
                    d="M4 4h9.333v9.333h-9.333v-9.333z"
                ></Path>
                <Path
                    fill="none"
                    stroke="#212121"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-miterlimit="4"
                    stroke-width="1.3333"
                    d="M18.667 4h9.333v9.333h-9.333v-9.333z"
                ></Path>
                <Path
                    fill="none"
                    stroke="#212121"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-miterlimit="4"
                    stroke-width="1.3333"
                    d="M18.667 18.667h9.333v9.333h-9.333v-9.333z"
                ></Path>
                <Path
                    fill="none"
                    stroke="#212121"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-miterlimit="4"
                    stroke-width="1.3333"
                    d="M4 18.667h9.333v9.333h-9.333v-9.333z"
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
