import { StyleSheet, TouchableOpacity, View } from "react-native";
import Trash from "../../assets/svg/Trash";
import { useHide } from "../../hooks/useHide";

const TabBar = ({ state, descriptors, navigation }) => {
    const { hide, show, isHidden } = useHide();

    return (
        <View
            style={{
                flexDirection: "row",
                height: 64,
                paddingTop: 9,
                paddingBottom: 15,
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                borderTopColor: "#b3b3b3",
                borderTopWidth: 1,
                justifyContent: "center",
                gap: 32,
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const icon = options.tabBarIcon;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                    });
                    if (route.name === "CreatePost") {
                        hide();
                    }

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[
                            { width: 40, height: 40 },
                            route.name === "CreatePost"
                                ? isFocused
                                    ? styles.FocusedMiddleBtn
                                    : styles.MiddleBtn
                                : isHidden
                                ? styles.hiddenBtn
                                : null,
                        ]}
                        key={route.name}
                    >
                        {route.name === "CreatePost" ? (
                            isFocused ? (
                                <Trash />
                            ) : (
                                icon
                            )
                        ) : (
                            icon
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar;

const styles = StyleSheet.create({
    hiddenBtn: {
        width: 0,
        height: 0,
        overflow: "hidden",
    },
    MiddleBtn: {
        width: 70,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6C00",
        borderRadius: 20,
    },
    FocusedMiddleBtn: {
        width: 70,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
        borderRadius: 20,
    },
});
