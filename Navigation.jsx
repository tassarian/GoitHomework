import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Registration from "./Screens/RegistrationsScreen";
import Login from "./Screens/LoginScreen";
import { TouchableWithoutFeedback, View } from "react-native";
import { Home } from "./Screens/Home";

const MainStack = createStackNavigator();

const Navigation = () => {
    const AuthScreens = () => (
        <MainStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
        >
            <MainStack.Screen name="Registration" component={Registration} />
            <MainStack.Screen name="Login" component={Login} />
            <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
    );

    return (
        <TouchableWithoutFeedback>
            <View style={{ flex: 1 }}>
                <NavigationContainer>
                    <AuthScreens />
                </NavigationContainer>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Navigation;
