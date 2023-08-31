import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Posts from "./PostsScreen";
import CreatePost from "./CreatePostsScreen";
import Profile from "./ProfileScreen";
import Grid from "../assets/svg/Grid";
import { Ionicons } from "@expo/vector-icons";
import User from "../assets/svg/User";
import TabBar from "../Components/TabBar/TabBar";
import { useHide } from "../hooks/useHide";

const Tab = createBottomTabNavigator();

const Home = () => {
    const { show } = useHide();
    return (
        <Tab.Navigator
            initialRouteName="Posts"
            tabBar={(props) => <TabBar {...props} />}
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
                name="Posts"
                component={Posts}
                options={{ tabBarIcon: <Grid /> }}
            />
            <Tab.Screen
                name="CreatePost"
                component={CreatePost}
                action={() => show()}
                options={{
                    tabBarIcon: (
                        <Ionicons name="add-outline" size={24} color="white" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: <User />,
                }}
            />
        </Tab.Navigator>
    );
};

export default Home;
