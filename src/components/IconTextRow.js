import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const IconTextRow = ({ textLeft, leftIcon, rightIcon, onPress, backgroundColor, color }) => {
    const styles = StyleSheet.create({
        rowContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
            paddingHorizontal: 10,
            backgroundColor: backgroundColor
        },
        leftContainer: {
            flex:1,
            flexDirection: "row",
            justifyContent: "flex-start",
            paddingHorizontal: 15
        },
        rightContainer:{
            alignItems: "flex-end",
        },
        textLeft: {
            fontSize: 14,
            color: color,
            fontWeight: "480"
        },
        iconWrapper: {
            marginRight: 15
        }
    });

    return (
        <TouchableOpacity
            style={styles.rowContainer}
            onPress={onPress}
            activeOpacity={1}
        >
            <View style={styles.leftContainer}>
                <View style={styles.iconWrapper}>
                    {leftIcon}
                </View>
                <Text style={styles.textLeft}>{textLeft}</Text>
            </View>
            <View style={styles.rightContainer}>
                {rightIcon}
            </View>
        </TouchableOpacity>
    );
};

export default IconTextRow;


