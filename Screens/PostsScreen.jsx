import { SafeAreaView, View } from "react-native";
import Header from "../Components/Header/Header";
import AndroidSafeAreaView from "../Components/SafeArea/AndroidSafeAreaView";

const Posts = ({ navigation }) => {
    return (
        <SafeAreaView style={AndroidSafeAreaView.AndroidSafeArea}>
            <Header navigation={navigation} posts={true} title="Публікації" />

            <View style={{ backgroundColor: "green", flex: 1 }}></View>
        </SafeAreaView>
    );
};

export default Posts;
