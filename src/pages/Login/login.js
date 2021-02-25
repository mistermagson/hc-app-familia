import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';
import Colors from '../../styles/Colors';


// TODO  inserir imagem logo do app
const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [logado, setLogado] = useState(false);

    const doLogin = () => {
        meuAlerta();
    };
    const meuAlerta = () => {
        const nome = 'Magson';
        alert('Login  sucesso');
        //setLogado(true);
        console.log('estou no console');
    }

    return (

        <View >

            <View>
                <TextInput autoCompleteType='email'
                   onChangeText={(text) => setEmail(text)}
                   value={email}
                   placeholder={'E-mail'}
                />
                <TextInput
                    autoCompleteType='password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder={'Senha'}
                />
                <Button title={'Login'} onPress = {() =>
                    (navigation.navigate('Main'))
                } />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
       // flex: 1,
        padding: 10,
        //backgroundColor: Colors.cinzajf,
        alignItems: 'center',
    },

    textInput: {

        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        borderColor: 'gray',
        borderWidth: 1,
    },

});

export default Login;
