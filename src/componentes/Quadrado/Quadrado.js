import React from "react";
import { View, StyleSheet } from "react-native";

const QuadradoPequeno = ({ cor }) => {
    return (
        <View style={{ ...styles.pequeno, backgroundColor: cor }} />
    );
}

const QuadradoMedio = ({ cor }) => {
    return (
        <View style={{ ...styles.medio, backgroundColor: cor }} />
    );
}

const QuadradoGrande = ({ cor }) => {
    return (
        <View style={{ ...styles.grande, backgroundColor: cor }} />
    );
};

const Quadrado = () => {
    return (
        <View style={styles.container}>
            <QuadradoPequeno cor={"pink"} />
            <QuadradoMedio cor={"violet"} />
            <QuadradoGrande cor={"purple"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch"
    },
    pequeno: {
        width: '50%',
        height: '50%',
        flexDirection: 'row'
    },
    medio: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    grande: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

export default Quadrado;
