import React, { useState, useEffect } from 'react';
import { Layout, Divider, TopNavigation, Button } from '@ui-kitten/components';
import { SafeAreaView, ScrollView } from 'react-native';
import { screen } from '../const';
import { TechnoCard } from '../components/TechnoCard';
import { Loading } from '../components/Loading';

export function TechnoListScreen({ navigation }) {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchItems() {
    try {
      const responce = await fetch(
        'https://63da83aab28a3148f6893a8a.mockapi.io/techno'
      );
      const result = await responce.json();
      setItems(result);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  function addPress() {
    navigation.navigate(screen.technoAdding);
  }
  function logoutPress() {
    navigation.navigate(screen.authorization);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#383838' }}>
      <ScrollView>
        <TopNavigation title={screen.techoList} alignment="center" />
        <Divider />
        <Layout>
          <Button style={{ marginTop: 10 }} onPress={addPress}>
            Добавить новую запись
          </Button>
          <Button style={{ marginTop: 10 }} onPress={logoutPress}>
            Выйти
          </Button>
          {items.map((item) => (
            <TechnoCard
              key={item.id}
              id={item.id}
              title={item.title}
              count={item.count}
              navigation={navigation}
            />
          ))}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}
