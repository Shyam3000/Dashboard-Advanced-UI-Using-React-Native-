import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import styles from './Styles/App';
import MultiBox from './Components/MultiBox';
import ExampleProps from './Components/ExampleProps';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Dashboard</Text>
      <View style={styles.circle}>
        <Text style={styles.cirChange}>+</Text>
      </View>
      <MultiBox/>
      <Text style={styles.txtStyle}>Dashboard</Text>
      {/* <ExampleProps name='shyam' age='44' image=''/> */}
      <StatusBar />
    </View>
  );
}