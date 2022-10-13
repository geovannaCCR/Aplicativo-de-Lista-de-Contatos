import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContatoList from './ContatoList';
import ContatoForm from './ContatoForm';
import { Button, Icon } from '@rneui/base';
import ContatoFormAdd from './ContatoFormAdd';
import { ContatosProvider } from './ContatosContext';

const Stack = createNativeStackNavigator();

export default props => {
  return(
    <ContatosProvider>
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName=" Inicio"
      screenOptions={screenOptions}>
        <Stack.Screen name="ContatoList" component={ContatoList}
        options={({navigation}) => {
          return{
            title: "Lista de Contatos",
            headerRight: () => (
              <Button
              onPress={() => navigation.navigate('ContatoFormAdd')}
              type="clear"
              icon={<Icon name="add" size={25} color="white"/>}
              />
            )
          }
        }}/> 
        <Stack.Screen name="ContatoFormAdd" component={ContatoFormAdd}
        options={{
          title: "Adicionar Contato"
        }}
        /> 
        <Stack.Screen name="ContatoForm" component={ContatoForm}
        options={{
          title: "Formulário de Contato"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ContatosProvider>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#4b7fce'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
}