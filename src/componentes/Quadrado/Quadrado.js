import React from "react";
import { View } from "neact-native";

const QuadradoPequeno = () => {
    return(
        <View style ={{...styles.pequeno, 
        }} />
    )
}

const QuadradoMedio = (props) => {
    const { lado } = props;
    <View styles={{
        width: 100,
        heigth: 100,
        backgroudColor: 'red'
    }} />
}
const QuadradoGrande = () => {
     
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
        heigth: '100%'
        flexDirection: 'row'

    },
    pequeno:{
        width: '50%',
        heigth: '50%'
        flexDirection: 'row'


    }
})