import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function User() {
    return (
        <View style={styles.container}>
            <Svg width={24} height={24} viewBox="0 0 32 32">
                <Path
                    fill="none"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-miterlimit="4"
                    stroke-width="1.3333"
                    stroke="#000"
                    d="M26.667 28v-2.667c0-2.945-2.388-5.333-5.333-5.333h-10.667c-2.946 0-5.333 2.388-5.333 5.333v2.667"
                ></Path>
                <Path
                    fill="none"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-miterlimit="4"
                    stroke-width="1.3333"
                    stroke="#000"
                    d="M16 14.667c2.945 0 5.333-2.388 5.333-5.333s-2.388-5.333-5.333-5.333c-2.946 0-5.333 2.388-5.333 5.333s2.388 5.333 5.333 5.333z"
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
