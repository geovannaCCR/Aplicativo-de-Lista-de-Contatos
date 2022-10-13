import React, { useContext, useState } from 'react';
import {Text, TextInput, ScrollView, Button, ToastAndroid} from 'react-native';
import ContatosContext from './ContatosContext';

export default ({route,navigation}) => {

    const {dispatch} = useContext(ContatosContext);
    const [contato, setContato] = useState(route.params ? route.params: {})

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
      }; 

    return (   
        <ScrollView style = {{padding: 14, flex: 1}}>
                <Text style = {{marginTop: 15, fontWeight: 'bold'}}>URL do Avatar:</Text>
                <TextInput
                    style = {{paddingLeft: 12, paddingRight: 12, height: 60, width: '100%', borderColor: 'black', borderWidth: 1, marginBottom: 20, fontSize: 15, backgroundColor: 'white'}}
                    multiline = {true} numberOfLines = {1}
                    onChangeText = {avatarUrl => setContato({...contato, avatarUrl})}
                    placeholder = "   Informe a Url do Avatar"
                    value = {contato.avatarUrl}/>

                <Text style = {{ fontWeight: 'bold'}}>Nome:</Text>
                <TextInput
                    style = {{paddingLeft: 12, paddingRight: 12, height: 60, width: '100%', borderColor: 'black', borderWidth: 1, marginBottom: 20, fontSize: 15, backgroundColor: 'white'}}
                    multiline = {true} numberOfLines = {1}
                    onChangeText = {name => setContato({...contato, name})}
                    placeholder = "   Informe o Nome"
                    value = {contato.name}/>
                <Text style = {{fontWeight: 'bold'}}>Apelido:</Text>
                <TextInput
                    style = {{paddingLeft: 12, paddingRight: 12, height: 60, width: '100%', borderColor: 'black', borderWidth: 1, marginBottom: 20, fontSize: 15, backgroundColor: 'white'}}
                    multiline = {true} numberOfLines = {1}
                    onChangeText = {apelido => setContato({...contato, apelido})}
                    placeholder = "   Informe o Apelido"
                    value = {contato.apelido}/>
                <Text style = {{fontWeight: 'bold'}}>E-mail:</Text>
                <TextInput
                    style = {{paddingLeft: 12, paddingRight: 12, height: 60, width: '100%', borderColor: 'black', borderWidth: 1, marginBottom: 20, fontSize: 15, backgroundColor: 'white'}}
                    multiline = {true} numberOfLines = {1}
                    onChangeText = {email => setContato({...contato, email})}
                    placeholder = "   Informe o e-mail"
                    value = {contato.email}
                />
                <Text style = {{fontWeight: 'bold'}}>Telefone:</Text>
                <TextInput
                    style = {{paddingLeft: 12, paddingRight: 12, height: 60, width: '100%', borderColor: 'black', borderWidth: 1, marginBottom: 20, fontSize: 15, backgroundColor: 'white'}}
                    multiline = {true} numberOfLines = {1}
                    onChangeText = {telefone => setContato({...contato, telefone})}
                    placeholder = "   Informe o telefone"
                    value = {contato.telefone}
                />
                <Button title='Salvar'
                onPress={() => {
                    dispatch({
                        type: contato.id ? 'updateContato' : 'createContato',
                        payload: contato,
                    })
                    navigation.goBack();
                    showToast('Alterações salvas!');
                }}/>    
</ScrollView>
    )
}
