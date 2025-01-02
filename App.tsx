import { StyleSheet, View } from 'react-native';
import { LineChart } from './src/components/LineChart';

export default function App() {
 const data = [500, 200, 180, 220, 300, 250, 400, 370, 50, 420, 500, 600];
 const total = data.reduce((total, current) => total + current, 0).toLocaleString("pt-br", { style: 'currency', currency: 'BRL' });
 
  return (
    <View style={styles.container}>
      <LineChart data={data} color='#C5F04D' title={total} subtitle='Evolução de janeiro à Agosto de 2024'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1D1F',
    paddingTop: 64
  },
});
