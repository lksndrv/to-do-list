import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput 
            style={styles.input} 
            onChangeText={onChange} 
            placeholder="Впишите задачу..."
            />
            <Button
            color = "#AAbbDD"
            onPress={() => addHandler(text)}
            title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        textAlign: "center",
        marginLeft: "5%",
        marginTop: "5%",
        marginBottom: "5%",
        width: "90%",
        borderBottomWidth: 1,
    },
});