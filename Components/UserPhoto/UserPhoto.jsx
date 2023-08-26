import { StyleSheet, TouchableOpacity, View } from "react-native";
import Add from "../../assets/svg/Add";

const UserPhoto = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <View
                style={{
                    width: 120,
                    height: 120,
                    backgroundColor: "#F6F6F6",
                    borderRadius: 16,
                    position: "relative",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                }}
            >
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 40,
                        height: 40,
                        right: -19,
                    }}
                >
                    <Add />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserPhoto;

const styles = StyleSheet.create({});
