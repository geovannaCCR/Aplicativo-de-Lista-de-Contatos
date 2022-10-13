import { useContext } from 'react';
import { View, ToastAndroid, FlatList, Alert } from 'react-native';
import { ListItem, Button, Icon, Avatar } from '@rneui/base';
import ContatosContext from './ContatosContext';

export default props => {

    const {state, dispatch} = useContext(ContatosContext);

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
      }; 

    function confirmContatoDeletion(contato){
        Alert.alert("Excluir Contato", "Deseja excluir o Contato?", [
            {
                text:'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteContato',
                        payload: contato,
                    });
                    showToast('Contato deletado!')
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getContatoItem({item: contato}){
        return(
            <View>
            <ListItem bottomDivider
            key = {contato.id}
            onPress = {() => props.navigation.navigate ('ContatoForm', contato)}>
                <Avatar size = "medium" source = {{uri: contato.avatarUrl}}/>
                <ListItem.Content>
                    <ListItem.Title style = {{fontSize: 20, marginVertical: 0}}>{contato.apelido}</ListItem.Title> 
                    <ListItem.Subtitle style = {{fontSize: 14, marginVertical: 0}}>{contato.email}</ListItem.Subtitle> 
                </ListItem.Content>
                <Button
                    onPress={()=> props.navigation.navigate('ContatoFormAdd', contato)}    
                    type="clear"
                    icon={<Icon name="edit" size={23} color="orange"/>}
                />                
                <Button
                    onPress={()=> confirmContatoDeletion(contato)}    
                    type="clear"
                    icon={<Icon name="delete" size={23} color="red"/>}
                />
            </ListItem>
            </View>
        )
    }
    return(
        <View>
            <FlatList
                keyExtractor={contato => contato.id.toString()}
                data={state.contatos}
                renderItem={getContatoItem}
            />
        </View>
    )
    }
