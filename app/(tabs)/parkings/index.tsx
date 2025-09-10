import { useGetParkingList } from '@/services/parkings/parkings.query';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ParkingScreen = () => {
  const {data: parkingList} = useGetParkingList();

  console.log({parkingList})

  return (
    <SafeAreaView>
      <Text>ParkingScreen</Text>
    </SafeAreaView>
  );
};

export default ParkingScreen;
