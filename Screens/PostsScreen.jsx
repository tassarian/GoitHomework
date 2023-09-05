import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from "react-native";
import { useSavePhoto } from "../hooks/useSavePhoto";
import { useSaveUserData } from "../hooks/useSaveUserData";
import { useState } from "react";
import { useEffect } from "react";
import MessageCircle from "../assets/svg/MessageCircle";
import MapPin from "../assets/svg/MapPin";

const Posts = ({ navigation }) => {
    const { photo } = useSavePhoto();
    const { userData } = useSaveUserData();
    const [data, setData] = useState(null);
    const posts = false;
    const window = useWindowDimensions();

    console.log(photo);

    useEffect(() => {
        setData(userData);
    }, []);

    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    paddingVertical: 32,
                    paddingHorizontal: 16,
                    flexDirection: "column",
                    gap: 32,
                }}
            >
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Image
                        style={{
                            width: 60,
                            height: 60,
                            marginRight: 8,
                            borderRadius: 16,
                        }}
                        source={require("../assets/images/avatar.jpg")}
                    />
                    <View style={{ flexDirection: "column" }}>
                        <Text
                            style={{
                                color: "#212121",
                                fontSize: 13,
                                fontWeight: 700,
                            }}
                        >
                            Natali Romanova
                        </Text>
                        <Text
                            style={{
                                color: "rgba(33, 33, 33, 0.80)",
                                fontSize: 11,
                                fontWeight: 400,
                            }}
                        >
                            email@example.com
                        </Text>
                    </View>
                </View>
                {!posts && (
                    <View
                        style={{
                            width: "100%",
                            gap: 8,
                        }}
                    >
                        <Image
                            source={require("../assets/images/qwe.jpg")}
                            style={{
                                // resizeMode: "cover",
                                // width: Dimensions.get("window").width,
                                flex: 1,
                                width: 489,
                                height: 400,
                                borderRadius: 8,
                            }}
                        />
                        <Text>Ліс</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                                onPress={() =>
                                    navigation.navigate("Comments", {
                                        prevScreen: "Home",
                                    })
                                }
                            >
                                <MessageCircle />
                                <Text>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                                onPress={() =>
                                    navigation.navigate("Map", {
                                        location: location,
                                    })
                                }
                            >
                                <MapPin />
                                <Text>Ivano-Frankivs'k Region, Ukraine</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Posts;
