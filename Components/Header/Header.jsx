import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import LogOut from "../../assets/svg/LogOut";

const Header = ({ posts = false, title, create = false, navigation }) => {
    return (
        <View style={styles.header}>
            {create && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft />
                </TouchableOpacity>
            )}
            {posts && <View style={styles.EmptyBox}></View>}
            <Text style={styles.title}>{title}</Text>
            {create && <View style={styles.EmptyBox}></View>}
            {posts && (
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <LogOut />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        // borderWidth: 1,
        // borderColor: "red",
        padding: 10,
        paddingTop: 11,
        paddingBottom: 11,
        borderBottomWidth: 1,
        borderBottomColor: "#b3b3b3",
        height: 44,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // flex: 1,
    },
    title: {
        flex: 1,
        textAlign: "center",
        color: "#212121",
        fontSize: 17,
    },
    EmptyBox: {
        width: 24,
        height: 24,
    },
});
