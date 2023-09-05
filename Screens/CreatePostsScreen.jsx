import {
    Alert,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Trash from "../assets/svg/Trash";
import MapPin from "../assets/svg/MapPin";
import CameraImg from "../assets/svg/Camera";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

const CreatePost = ({ navigation }) => {
    const [cameraRef, setCameraRef] = useState(null);
    const [photo, setPhoto] = useState("");
    const [photoIsExist, setPhotoIsExist] = useState(false);
    const [comment, setComment] = useState("");
    const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState("");

    useEffect(() => {
        const requestCameraPermission = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status !== "granted") {
                console.log("Camera permission denied");
            } else {
                console.log("Camera permission granted");
            }
        };

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();

        requestCameraPermission();

        navigation.setOptions({ tabBarStyle: { display: "none" } });
    }, []);

    const takePhoto = async () => {
        try {
            const photo = await cameraRef.takePictureAsync();
            setPhoto(photo.uri);
            let location = await Location.getCurrentPositionAsync({});
            const coords = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };

            setLocation(coords);
            setPhotoIsExist(true);
        } catch (error) {
            console.log(error);
        }
    };

    const sendPhoto = () => {
        if (!photo) {
            Alert.alert("Зробіть фотографію!");
            return;
        }

        navigation.navigate("Posts");
    };
    const deletePhoto = () => {
        setComment("");
        setPhoto(Math.random().toString());
        setLocationName("");
        setPhotoIsExist(false);
    };

    console.log(location);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                paddingHorizontal: 16,
            }}
        >
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingBottom: 15 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View>
                            <Camera
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 420,
                                    marginTop: 32,

                                    position: "relative",
                                }}
                                ref={setCameraRef}
                            >
                                {photo && (
                                    <View
                                        style={{
                                            height: 420,
                                            width: "100%",
                                        }}
                                    >
                                        <Image
                                            style={{
                                                height: 420,
                                                width: "100%",
                                            }}
                                            source={{ uri: photo }}
                                        />
                                    </View>
                                )}
                                <TouchableOpacity
                                    style={{
                                        position: "absolute",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 1000,
                                        backgroundColor: "#FFF",
                                        width: 60,
                                        height: 60,
                                    }}
                                    onPress={takePhoto}
                                >
                                    <CameraImg />
                                </TouchableOpacity>
                            </Camera>
                            <Text
                                style={{
                                    marginBottom: 32,
                                    fontSize: 16,
                                    color: "#BDBDBD",
                                }}
                            >
                                {photoIsExist
                                    ? "Редагувати фото"
                                    : "Завантажте фото"}
                            </Text>
                            <TextInput
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#E8E8E8",
                                    paddingVertical: 16,
                                    marginBottom: 16,
                                }}
                                placeholder="Назва..."
                                value={comment}
                                onChangeText={(value) => setComment(value)}
                            />

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#E8E8E8",
                                    paddingVertical: 16,
                                    marginBottom: 32,
                                }}
                            >
                                <TouchableOpacity
                                    style={{ marginRight: 4 }}
                                    onPress={() =>
                                        navigation.navigate("Home", {
                                            screen: "Map",
                                            params: {
                                                location: location.coords,
                                            },
                                        })
                                    }
                                >
                                    <MapPin />
                                </TouchableOpacity>
                                <TextInput
                                    style={{ width: "100%", marginLeft: 4 }}
                                    placeholder="Місцевість"
                                    value={locationName}
                                    onChangeText={(value) =>
                                        setLocationName(value)
                                    }
                                />
                            </View>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#F6F6F6",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingVertical: 16,
                                    borderRadius: 100,
                                }}
                                onPress={sendPhoto}
                            >
                                <Text>Опублікувати</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#F6F6F6",
                                borderRadius: 20,
                                width: 70,
                                height: 40,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onPress={deletePhoto}
                        >
                            <Trash />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default CreatePost;
