import React, { useState, useEffect } from 'react';
import { Layout, Divider, TopNavigation, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { placeholder, screen } from '../const';
import { Loading } from '../components/Loading';
import { CustomInput } from '../components/CustomInput';

export function TechnoAddingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState();
  const [count, setCount] = useState();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#383838' }}>
      <TopNavigation title={screen.technoAdding} alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <CustomInput
          placeholder={placeholder.technoTitle}
          setInputValue={setTitle}
        />
        <CustomInput
          placeholder={placeholder.technoCount}
          setInputValue={setCount}
        />
        <Button>Добавить новую запись</Button>
      </Layout>
    </SafeAreaView>
  );
}
