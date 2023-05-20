import { StyleSheet } from 'react-native';
import { Button } from '@rneui/base';

const App = () => <Button title="Hello World!" />;
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Three</Text>
      <Button title="Hello World!" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/three.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
