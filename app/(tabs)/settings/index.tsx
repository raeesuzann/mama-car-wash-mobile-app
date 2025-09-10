import { useGetProfile } from '@/services/settings/settings.query';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Settings() {
  const { data: profileData } = useGetProfile();
  return (
    <SafeAreaView>
      <Text>{profileData?.toString()}</Text>
    </SafeAreaView>
  );
}

export default Settings;
