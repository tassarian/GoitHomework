import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Send from "../assets/svg/Send";

const Comments = () => {
    const comments = false;
    const formatDate = (date) => {
        return format(Date.parse(date), "dd MMMM, yyyy | HH:mm:ss", {
            locale: en,
        });
    };
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#ffffff",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                paddingTop: 32,
                paddingBottom: 16,
            }}
        >
            <ScrollView>
                <View
                    style={{
                        gap: 32,
                    }}
                >
                    <Image
                        source={require("../assets/images/qwe.jpg")}
                        style={{
                            width: 489,
                            height: 400,
                            borderRadius: 8,
                        }}
                    />
                    <View
                        style={{
                            gap: 24,
                        }}
                    >
                        <View style={styles.commentBox}>
                            <Image
                                source={require("../assets/images/user2.jpg")}
                                style={styles.avatar}
                            />
                            <View style={styles.commentTextBox}>
                                <Text style={styles.commentText}>
                                    Really love your most recent photo. I’ve
                                    been trying to capture the same thing for a
                                    few months and would love some tips!
                                </Text>
                                <Text style={styles.commentDate}>
                                    09 червня, 2020 | 08:40
                                </Text>
                            </View>
                        </View>
                        <View style={styles.commentBox}>
                            <View style={styles.commentTextBox}>
                                <Text style={styles.commentText}>
                                    A fast 50mm like f1.8 would help with the
                                    bokeh. I’ve been using primes as they tend
                                    to get a bit sharper images.
                                </Text>
                                <Text style={styles.commentDate}>
                                    09 червня, 2020 | 09:14
                                </Text>
                            </View>
                            <Image
                                source={require("../assets/images/avatar.jpg")}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={styles.commentBox}>
                            <Image
                                source={require("../assets/images/user2.jpg")}
                                style={styles.avatar}
                            />
                            <View style={styles.commentTextBox}>
                                <Text style={styles.commentText}>
                                    Thank you! That was very helpful!
                                </Text>
                                <Text style={styles.commentDate}>
                                    09 червня, 2020 | 09:20
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        borderWidth: 1,
                        paddingRight: 8,
                        backgroundColor: "#F6F6F6",
                        borderColor: "#E8E8E8",
                        borderRadius: 1000,
                    }}
                >
                    <TextInput
                        style={{
                            flex: 1,
                            paddingVertical: 16,
                            paddingLeft: 16,
                            lineHeight: 19,
                            fontSize: 16,
                        }}
                        placeholder="Коментувати..."
                    />
                    <TouchableOpacity
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Send style={{}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Comments;

const styles = StyleSheet.create({
    commentBox: {
        gap: 16,
        flexDirection: "row",
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 10000,
    },
    commentTextBox: {
        padding: 16,
        flexDirection: "column",
        gap: 8,
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        flex: 1,
    },
    commentText: {
        fontSize: 13,
        fontWeight: "400",
        color: "#212121",
    },
    commentDate: {
        fontSize: 10,
        fontWeight: "400",
        color: "#BDBDBD",
    },
});
