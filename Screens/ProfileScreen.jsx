import {
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import UserPhoto from "../Components/UserPhoto/UserPhoto";
import MessageCircle from "../assets/svg/MessageCircle";
import MapPin from "../assets/svg/MapPin";
import MessageCircleProf from "../assets/svg/MessageCircleProf";
import Likes from "../assets/svg/Likes";

const Profile = ({ navigation, route }) => {
    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <ImageBackground
                style={{ flex: 1, justifyContent: "flex-end" }}
                source={require("../assets/images/backgroundimg.jpg")}
            >
                <View
                    style={{
                        flex: 1,
                        marginTop: 120,
                        backgroundColor: "#fff",
                        borderTopRightRadius: 25,
                        borderTopLeftRadius: 25,
                        position: "relative",
                        alignItems: "center",
                        paddingTop: 92,
                        gap: 32,
                        paddingHorizontal: 16,
                    }}
                >
                    <UserPhoto />
                    <Text
                        style={{
                            fontSize: 30,
                        }}
                    >
                        Natali Romanova
                    </Text>
                    <View>
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
                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: 24,
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
                                        <MessageCircleProf />
                                        <Text>0</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Likes />
                                        <Text>0</Text>
                                    </TouchableOpacity>
                                </View>
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
                                    <Text>
                                        Ivano-Frankivs'k Region, Ukraine
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default Profile;
