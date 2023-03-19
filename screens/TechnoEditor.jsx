import React, { useState, useEffect } from 'react';
import { Layout, Divider, TopNavigation, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { placeholder, screen } from '../const';
import { Loading } from '../components/Loading';
import { CustomInput } from '../components/CustomInput';

const inititalItem = {
  title: '',
  count: '',
};

export function TechnoEditorScreen({ route }) {
  const { id } = route.params;
  const [item, setItem] = useState(inititalItem);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState();
  const [count, setCount] = useState();

  async function fetchItem() {
    try {
      const responce = await fetch(
        `https://63da83aab28a3148f6893a8a.mockapi.io/techno/${id}`
      );
      const result = await responce.json();
      setItem(result);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchItem();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#383838' }}>
      <TopNavigation title={item.title} alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <CustomInput
          placeholder={placeholder.technoTitle}
          setInputValue={setTitle}
          defaultValue={item.title}
        />
        <CustomInput
          placeholder={placeholder.technoCount}
          setInputValue={setCount}
          defaultValue={item.count}
        />
        <Button>Изменить</Button>
      </Layout>
    </SafeAreaView>
  );
}
