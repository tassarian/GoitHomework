import { SafeAreaView, View } from "react-native";
import Header from "../Components/Header/Header";
import AndroidSafeAreaView from "../Components/SafeArea/AndroidSafeAreaView";

const CreatePost = ({ navigation, action }) => {
    return (
        <SafeAreaView style={AndroidSafeAreaView.AndroidSafeArea}>
            <Header
                create={true}
                title="Створити публікацію"
                navigation={navigation}
                action={action}
            />
            <View style={{ flex: 0.5 }}></View>
        </SafeAreaView>
    );
};

export default CreatePost;
