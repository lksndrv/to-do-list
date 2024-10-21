import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: "10%",
        backgroundColor: '#AAbbDD',
        height: 100,
        width: "100%",
        // borderRadius: 20,
    },
    text: {
        fontSize: 30,
        textAlign: "center",
        color: "#FFFFFF",
        // fontFamily: "montserrat",

        marginTop: 0,

    },
});
