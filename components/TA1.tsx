import { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const TA1 = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <View style={styles.container}>
            <Button title=" + " onPress={() => setCount(count + 1)} />
                <Text style={styles.text}>{count}</Text>
            <Button title=" - " onPress={() => setCount(count - 1)} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 170
    },
    text: {
        textAlign:'center',
        paddingVertical: 10
    }
})

export default TA1;