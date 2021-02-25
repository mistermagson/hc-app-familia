//TODO página inicial que mostra o resumo dos plantoes
//TODO página de boas vindas
import React from 'react';

import {View, Text, Button} from 'react-native';
import ListaPlantao from '../../components/ListaPlantao';

const Main = () => {

    // TODO Buscar informação no BD
    const proximaDataPlantao = '01/01/1901 18:00';
    const plantoes = [
        {
            key: '1',
            dataPlantao: '01/01/1901 18:00',
            tipoPlantao: 'Regional',
            subsecao: 'Campo Grande',
            vara: '1',
        },
        {
            key: '2',
            dataPlantao: '01/01/1901 18:00',
            tipoPlantao: 'Local',
            subsecao: 'Campo Grande',
            vara: '1',
        },
        {
            key: '3',
            dataPlantao: '01/01/1901 18:00',
            tipoPlantao: 'Distribuidor',
            subsecao: 'Dourados',
            vara: 'N/A',
        },
        {
            key: '4',
            dataPlantao: '01/01/1901 18:00',
            tipoPlantao: 'Distribuidor',
            subsecao: 'Campo Grande',
            vara: 'N/A',
        },
        {
            key: '5',
            dataPlantao: '01/01/1901 18:00',
            tipoPlantao: 'Distribuidor',
            subsecao: 'Campo Grande',
            vara: 'N/A',
        },
    ];
    return (
        <View>
            <ListaPlantao plantoes={plantoes} itemPlantao={proximaDataPlantao} />

            <View>
                <Button title={'Salvar'} />
                <Button title={'Fechar'} />
            </View>
        </View>
    );
};

export default Main;
