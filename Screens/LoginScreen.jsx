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

const Login = () => {
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
                        <Text style={styles.title}>Увійти</Text>
                        <View style={styles.inputBox}>
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
                                    style={[styles.inputPassword]}
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
                                <Text style={styles.submitBtnText}>Увійти</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                marginBottom: 111,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    lineHeight: 19,
                                    color: "#1B4371",
                                }}
                            >
                                Немає акаунту?{" "}
                            </Text>
                            <TouchableOpacity onPress={handle}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 19,
                                        color: "#1B4371",
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#1B4371",
                                    }}
                                >
                                    Зареєструватися
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Login;

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
    },
    box: {
        justifyContent: "flex-end",
        paddingHorizontal: 16,
        // position: "relative",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        backgroundColor: "white",
    },
    title: {
        marginTop: 32,
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
        paddingVertical: 16,
        color: "#212121",
        // fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 19,
        flex: 1,
    },
    inputPasswordCont: {
        paddingHorizontal: 16,

        flexDirection: "row",
        alignItems: "center",
    },
    showBtn: {
        paddingVertical: 5,
    },
    showBtnText: {
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    },
    inputFocus: {
        borderColor: "#FF6C00",
        backgroundColor: "#FFF",
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
