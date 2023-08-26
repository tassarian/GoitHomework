import {
    ImageBackground,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { useState } from "react";
import UserPhoto from "../Components/UserPhoto/UserPhoto";

const Registration = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisible = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const [isFocused, setIsFocused] = useState({
        email: false,
        name: false,
        password: false,
    });

    const onHandleBlur = (inputName) => {
        setIsFocused({ ...isFocused, [inputName]: false });
    };
    const onHandleFocus = (inputName) => {
        setIsFocused({ ...isFocused, [inputName]: true });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                style={{
                    flex: 1,
                }}
            >
                <ImageBackground
                    style={{ flex: 1, justifyContent: "flex-end" }}
                    source={require("../assets/images/backgroundimg.jpg")}
                >
                    <View style={styles.box}>
                        <UserPhoto />
                        <Text style={styles.title}>Реєстрація</Text>
                        <View style={styles.inputBox}>
                            <View
                                style={[
                                    styles.inputItem,
                                    isFocused.name ? styles.inputFocus : null,
                                ]}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder="Логін"
                                    onBlur={() => {
                                        onHandleBlur("name");
                                    }}
                                    onFocus={() => {
                                        onHandleFocus("name");
                                    }}
                                />
                            </View>
                            <View
                                style={[
                                    styles.inputItem,
                                    isFocused.email ? styles.inputFocus : null,
                                ]}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder="Адреса електронної пошти"
                                    onBlur={() => {
                                        onHandleBlur("email");
                                    }}
                                    onFocus={() => {
                                        onHandleFocus("email");
                                    }}
                                />
                            </View>
                            <View
                                style={[
                                    styles.inputItem,
                                    styles.inputPasswordCont,
                                    isFocused.password
                                        ? styles.inputFocus
                                        : null,
                                ]}
                            >
                                <TextInput
                                    style={[styles.input, styles.inputPassword]}
                                    placeholder="Пароль"
                                    onBlur={() => {
                                        onHandleBlur("password");
                                    }}
                                    onFocus={() => {
                                        onHandleFocus("password");
                                    }}
                                    secureTextEntry={!isPasswordVisible}
                                />
                                <TouchableOpacity
                                    onPress={togglePasswordVisible}
                                    style={styles.showBtn}
                                >
                                    <Text style={styles.showBtnText}>
                                        Показати
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.submitBtn}>
                                <Text style={styles.submitBtnText}>
                                    Зареєстуватися
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                marginBottom: 45,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    lineHeight: 19,
                                    color: "#1B4371",
                                }}
                            >
                                Вже є акаунт?{" "}
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 19,
                                        color: "#1B4371",
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#1B4371",
                                    }}
                                >
                                    Увійти
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Registration;

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
    },
    box: {
        paddingHorizontal: 16,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        backgroundColor: "white",
        position: "relative",
    },
    title: {
        marginTop: 92,
        marginBottom: 33,
        color: "#212121",
        textAlign: "center",
        // fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: "500",
        lineHeight: 35,
        letterSpacing: 0.3,
    },
    inputBox: {
        gap: 16,
    },
    inputItem: {
        backgroundColor: "#f6f6f6",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        color: "#212121",
        // fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 19,
    },
    inputPassword: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        color: "#212121",
        // fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 19,
        width: "100%",
        maxWidth: "85%",
    },
    inputFocus: {
        borderColor: "#FF6C00",
        backgroundColor: "#FFF",
    },
    inputPasswordCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    showBtn: {
        paddingVertical: 5,
        marginRight: 16,
    },
    showBtnText: {
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    },
    submitBtn: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        alignItems: "center",
        marginTop: 43,
        marginBottom: 16,
        backgroundColor: "#FF6C00",
        borderRadius: 100,
    },
    submitBtnText: {
        fontSize: 16,
        lineHeight: 19,
        color: "#fff",
    },
});
