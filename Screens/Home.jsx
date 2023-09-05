import { createStackNavigator } from "@react-navigation/stack";
import Map from "./MapScreen";
import { TouchableOpacity, View } from "react-native";
import MainTabs from "./MainTabs";
import Comments from "./CommentsScreen";
import { useNavigation } from "@react-navigation/native";
import ArrowLeft from "../assets/svg/arrowLeft";

const HomeStack = createStackNavigator();

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
export const Home = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            initialRouteName="MainTabs"
            screenOptions={{
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
                headerTitleAlign: "center",
            }}
        >
            <HomeStack.Screen
                name="MainTabs"
                component={MainTabs}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStack.Screen
                name="Map"
                component={Map}
                options={
                    {
                        // headerBackTitleVisible: false,
                        // headerTintColor: "#212121",
                    }
                }
            />
            <HomeStack.Screen
                name="Comments"
                component={Comments}
                options={{
                    title: "Коментарі",
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
        </HomeStack.Navigator>
    );
};
