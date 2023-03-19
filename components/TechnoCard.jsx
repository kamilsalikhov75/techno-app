import { Card, Text, Button } from '@ui-kitten/components';
import { screen } from '../const';

export function TechnoCard({ title, count, id, navigation }) {
  function editTechno() {
    navigation.navigate(screen.editor, { id });
  }

  return (
    <Card style={{ width: '100%', marginTop: 10 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{title}</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Остаток: {count}шт.
      </Text>
      <Button onPress={editTechno}>Редактировать</Button>
    </Card>
  );
}
