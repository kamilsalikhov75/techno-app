import React, { useState } from 'react';
import { Layout, Button, Divider, TopNavigation } from '@ui-kitten/components';
import { CustomInput } from '../components/CustomInput';
import { placeholder, screen } from '../const';

import { SafeAreaView } from 'react-native';

export function AuthorizationScreen({ navigation }) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  function handlePress() {
    if (login === 'user' && password === '123') {
      navigation.navigate(screen.techoList);
    } else {
      alert('Данные неверные!');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#383838' }}>
      <TopNavigation title={screen.authorization} alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <CustomInput placeholder={placeholder.login} setInputValue={setLogin} />
        <CustomInput
          placeholder={placeholder.password}
          setInputValue={setPassword}
        />
        <Button style={{ width: '90%' }} onPress={handlePress}>
          Войти
        </Button>
      </Layout>
    </SafeAreaView>
  );
}
