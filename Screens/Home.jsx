import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity } from "react-native";
import Posts from "./PostsScreen";
import CreatePost from "./CreatePostsScreen";
import Profile from "./ProfileScreen";
import Grid from "../assets/svg/Grid";
import { Ionicons } from "@expo/vector-icons";
import User from "../assets/svg/User";
import Trash from "../assets/svg/Trash";

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName="Posts"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 64,
                    paddingTop: 9,
                    paddingBottom: 15,
                    alignItems: "center",
                    borderTopColor: "#b3b3b3",
                    borderTopWidth: 1,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <TouchableOpacity
                            style={styles.TabBarItemFirst}
                            onPress={() => {
                                navigation.navigate("Posts");
                            }}
                        >
                            <Grid />
                        </TouchableOpacity>
                    ),
                })}
                name="Posts"
                component={Posts}
            />
            <Tab.Screen
                options={({ navigation, route }) => ({
                    tabBarButton: () => (
                        <TouchableOpacity
                            style={[
                                styles.TabBarMiddleItem,
                                {
                                    backgroundColor:
                                        !route.name === "CreatePost"
                                            ? "#F6F6F6"
                                            : styles.TabBarMiddleItem
                                                  .backgroundColor,
                                },
                            ]}
                            onPress={() => {
                                if (route.name === "CreatePost") {
                                    navigation.navigate("CreatePost");
                                } else {
                                    navigation.goBack();
                                }
                            }}
                        >
                            {!route.name === "CreatePost" ? (
                                <Trash />
                            ) : (
                                <Ionicons
                                    name="add-outline"
                                    size={24}
                                    color="white"
                                />
                            )}
                        </TouchableOpacity>
                    ),
                })}
                name="CreatePost"
                component={CreatePost}
            />
            <Tab.Screen
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <TouchableOpacity
                            style={styles.TabBarItem}
                            onPress={() => {
                                navigation.navigate("Profile");
                            }}
                        >
                            <User />
                        </TouchableOpacity>
                    ),
                })}
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
};

export default Home;

const styles = StyleSheet.create({
    TabBarMiddleItem: {
        flex: 1,
        maxWidth: 70,
        height: 40,
        marginRight: 31,
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    TabBarItem: {
        width: 40,
    },
    TabBarItemFirst: {
        width: 40,
        marginRight: 31,
    },
});
