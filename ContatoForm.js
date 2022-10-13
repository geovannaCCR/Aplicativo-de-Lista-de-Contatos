import React, { useContext, useState} from 'react';
import {Text, TextInput, ScrollView, Image, View} from 'react-native';
import ContatosContext from './ContatosContext';

export default props = ({route, navigation}) => {

    const {dispatch} = useContext(ContatosContext)
    const [contato, setContato] = useState(route.params ? route.params: {})

    return (
        <ScrollView style = {{padding: 18}}>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{uri: contato.avatarUrl}} style = {{width: 200, height: 200, marginVertical: 10, borderRadius: 10, position: 'relative'}}/>
            </View>
                <Text style = {{paddingLeft: 12, paddingRight: 12, marginTop: 10, fontWeight: 'bold', color: 'black', backgroundColor: 'white', fontSize: 17}}>Nome:</Text>
                <TextInput 
                    style = {{paddingLeft: 12, paddingRight: 12, height: 50, width: '100%', marginBottom: 0, fontSize: 17, backgroundColor: 'white'}}
                    multiline = {true} numberOfLines = {1}
                    value = {contato.name}/>
                <Text style = {{paddingLeft: 12, paddingRight: 12, fontWeight: 'bold', fontSize: 17, backgroundColor: 'white'}}>Apelido:</Text>
                <TextInput 
                    style = {{paddingLeft: 12, paddingRight: 12, height: 50, width: '100%', marginBottom: 0, fontSize: 17, backgroundColor: 'white'}}
                    multiline = {true} numberOfLines = {1}
                    value = {contato.apelido}/>
                <Text style = {{paddingLeft: 12, paddingRight: 12, fontWeight: 'bold', fontSize: 17, backgroundColor: 'white'}}>E-mail:</Text>
                <TextInput 
                    style = {{paddingLeft: 12, paddingRight: 12, height: 50, marginBottom: 0, width: '100%', fontSize: 17, backgroundColor: 'white'}}
                    multiline = {true} numberOfLines = {1}
                    value = {contato.email}/>
                <Text style = {{paddingLeft: 12, paddingRight: 12, fontWeight: 'bold', backgroundColor: 'white', fontSize: 17}}>Telefone:</Text>
                <TextInput 
                    style = {{paddingLeft: 12, paddingRight: 12, height: 50, width: '100%', marginBottom: 10, fontSize: 17, backgroundColor: 'white'}}
                    multiline = {true} numberOfLines = {1}
                    value = {contato.telefone}/>
        </ScrollView>
    )
}
