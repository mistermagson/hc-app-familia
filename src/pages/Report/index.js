import React from 'react';

import {View, Picker, Button} from 'react-native';
import ListaPlantao from '../../components/ListaPlantao';
import {PickerItem} from 'react-native/Libraries/Components/Picker/Picker';

const Report = () => {
    return (
        <View>
            <View>
                <Picker>
                    <PickerItem label={'Todos os Plantões'} />
                </Picker>
                <Picker>
                    <PickerItem label={'Próximos 7 dias'} />
                </Picker>
            </View>
            <ListaPlantao />
            <View>
                <Button title={'Salvar'} />
                <Button title={'Fechar'} />
            </View>
        </View>
    );
};

export default Report;
