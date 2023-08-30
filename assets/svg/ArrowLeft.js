import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function ArrowLeft() {
    return (
        <View style={styles.container}>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Path
                    d="M20 12H4"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M10 18L4 12L10 6"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
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
