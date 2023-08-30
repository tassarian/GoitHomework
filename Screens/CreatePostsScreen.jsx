import { SafeAreaView, View } from "react-native";
import Header from "../Components/Header/Header";
import AndroidSafeAreaView from "../Components/SafeArea/AndroidSafeAreaView";

const CreatePost = ({ navigation }) => {
    return (
        <SafeAreaView style={AndroidSafeAreaView.AndroidSafeArea}>
            <Header
                create={true}
                title="Створити публікацію"
                navigation={navigation}
            />
            <View style={{ flex: 1 }}></View>
        </SafeAreaView>
    );
};

export default CreatePost;
