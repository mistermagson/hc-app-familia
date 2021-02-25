import React from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';

import ListaProximoPlantao from '../ListaPlantao/ListaProximoPlantao'
import ListaItemPlantao from '../ListaPlantao/ListaItemPlantao';

const ListaPlantao = ({navigation,itemPlantao, plantoes}) => {

    return (
        <View style={styles.container}>
           <View>
               <ListaProximoPlantao itemPlantao={itemPlantao} />
               <ListaItemPlantao plantoes={plantoes}/>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },

});

export default ListaPlantao;
