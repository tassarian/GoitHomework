import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Posts from "./PostsScreen";
import CreatePost from "./CreatePostsScreen";
import Profile from "./ProfileScreen";
import TabBar from "../Components/TabBar/TabBar";

import Grid from "../assets/svg/Grid";
import { Ionicons } from "@expo/vector-icons";
import User from "../assets/svg/User";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import LogOut from "../assets/svg/LogOut";
import ArrowLeft from "../assets/svg/arrowLeft";
import { useNavigation } from "@react-navigation/native";

const MainTabs = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
    const backBtn = () => {
        const navigation = useNavigation();
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <ArrowLeft />
            </TouchableOpacity>
        );
    };
    return (
        <Tab.Navigator
            initialRouteName="Posts"
            // tabBar={(props) => <TabBar {...props} />}
            screenOptions={{
                tabBarShowLabel: false,

                tabBarStyle: styles.tabBarStyle,
                headerTitleAlign: "center",
                headerRightContainerStyle: {
                    paddingRight: 16,
                },
                headerLeftContainerStyle: {
                    paddingLeft: 16,
                },
                headerStyle: {
                    borderBottomColor: "#E5E5E5",
                    borderBottomWidth: 1,
                },
                headerShadowVisible: true,
            }}
        >
            <Tab.Screen
                name="Posts"
                component={Posts}
                options={{
                    tabBarItemStyle: {
                        width: 40,
                        flex: 0,
                        marginRight: 30,
                        height: 40,
                    },
                    tabBarIcon: () => <Grid />,
                    title: "Публікації",
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <LogOut />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <View
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        ></View>
                    ),
                }}
            />
            <Tab.Screen
                name="CreatePost"
                component={CreatePost}
                options={{
                    tabBarItemStyle: {
                        backgroundColor: "#FF6C00",
                        flex: 0,
                        width: 70,
                        height: 40,
                        borderRadius: 25,
                    },
                    tabBarIcon: () => (
                        <Ionicons name="add-outline" size={24} color="white" />
                    ),
                    title: "Створити публікацію",
                    headerRight: () => (
                        <View
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        ></View>
                    ),
                    headerLeft: () => backBtn(),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarItemStyle: {
                        width: 40,
                        flex: 0,
                        marginLeft: 30,
                        height: 40,
                    },
                    tabBarIcon: () => <User />,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabs;

const styles = StyleSheet.create({
    tabBarStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 9,
        paddingBottom: 10,
        height: 67,
    },
});
