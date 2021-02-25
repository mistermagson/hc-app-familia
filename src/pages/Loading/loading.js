//TODO página de carregamento | verificar se está logado
import React  from 'react';
import {   StyleSheet,   View, Image, Text,Button} from 'react-native';
import Colors from '../../styles/Colors';

// TODO  inserir imagem logo do app
const Loading = ({navigation}) =>  {

    return (

        <View style={styles.container}>
            <Text >Carregando...</Text>
            <View>
                <Text style={{alignSelf:'center'}}>EscalaJuizApp</Text>
                <Image style={styles.logo}

                source={require( '../../assets/images/logo.png')} />
            </View>

            <Button title={'Continuar'} onPress = {() =>
                (navigation.navigate('Login'))
            } />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.white
    },
    logo: {
        alignSelf:'center'
    },

});

export default Loading;

