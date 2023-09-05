import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Add from "../../assets/svg/Add";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useActionSheet } from "@expo/react-native-action-sheet";
import Cross from "../../assets/svg/Cross";

const UserPhoto = () => {
    const [image, setImage] = useState("");
    const { showActionSheetWithOptions } = useActionSheet();

    useEffect(() => {
        (async () => {
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                alert(
                    "Sorry, we need camera roll permissions to make this work!"
                );
            }
        })();
    }, []);

    const showActionSheet = () => {
        const options = ["Take Photo", "Choose from Gallery", "Cancel"];
        const cancelButtonIndex = 2;

        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
            },
            (buttonIndex) => {
                if (buttonIndex === 0) {
                    pickImage("camera");
                } else if (buttonIndex === 1) {
                    pickImage("gallery");
                }
            }
        );
    };

    const pickImage = async (source) => {
        let result;

        if (source === "camera") {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
        } else if (source === "gallery") {
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
        }

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(result.assets);
        }
    };

    const deleteImage = () => {
        setImage(null);
    };
    return (
        <View
            style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                top: -60,
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
                <View>
                    {image && (
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: "cover",
                                borderRadius: 16,
                            }}
                        />
                    )}
                </View>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 40,
                        height: 40,
                        right: -19,
                    }}
                    onPress={image ? deleteImage : showActionSheet}
                >
                    {image ? <Cross /> : <Add />}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserPhoto;

const styles = StyleSheet.create({});
