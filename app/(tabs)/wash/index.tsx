import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetWashList } from '../../../services/wash/wash.query';

function Wash() {
  const { data: washList } = useGetWashList();

  console.log(washList);
  return (
    <SafeAreaView>
      <Text>Wash</Text>
    </SafeAreaView>
  );
}

export default Wash;
