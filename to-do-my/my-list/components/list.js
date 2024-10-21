import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 15,
        // backgroundColor: "111111",
        borderWidth: 1,
        borderColor: "AABBdd",
        width: "70%",
        marginLeft: "15%",
        marginTop: "15%",
    },
});