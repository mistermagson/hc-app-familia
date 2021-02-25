import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';



const ListaItemPlantao = ({plantoes}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Próximos Plantões</Text>
            <FlatList //numColumns={4}
                horizontal={false}
                data={plantoes}
                //keyExtractor={(item) => item.id }
                renderItem={
                    ({item}) =>(
                        <View>
                            <Text style={styles.itemPlantao}>Data: {item.dataPlantao} | Tipo: {item.tipoPlantao} |
                                Subseção: {item.subsecao} | Vara: {item.vara}</Text>
                            <Text style={styles.entry}>**</Text>
                        </View>
                    )
                }
            />
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
    itemPlantao:{
        fontSize: 11,
    }
});

export default ListaItemPlantao;
