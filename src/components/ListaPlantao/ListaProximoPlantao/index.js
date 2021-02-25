import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';


const ListaProximoPlantao = ({itemPlantao}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Próximo Plantão</Text>
            <Text style={styles.data}>{itemPlantao}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignSelf: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    data: {},
});

export default ListaProximoPlantao;
