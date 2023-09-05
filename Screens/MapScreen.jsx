import { useState } from "react";
import { useEffect } from "react";
import { Dimensions, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = ({ route, navigation }) => {
    const { longitude, latitude } = route.params.location;

    useEffect(() => {
        navigation.setOptions({ tabBarStyle: { display: "none" } });
    }, []);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <MapView
                style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                }}
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType="standard"
                minZoomLevel={15}
            >
                <Marker
                    title="I am here"
                    coordinate={{ latitude, longitude }}
                />
            </MapView>
        </View>
    );
};

export default Map;
