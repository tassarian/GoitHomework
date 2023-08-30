import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function LogOut() {
    return (
        <View style={styles.container}>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Path
                    id="Shape"
                    d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    id="Shape_2"
                    d="M17 16L21 12L17 8"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    id="Shape_3"
                    d="M21 12H9"
                    stroke="#BDBDBD"
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
