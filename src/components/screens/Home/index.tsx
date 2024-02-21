import React from 'react';
import { Button, View } from 'react-native';

import { router } from 'expo-router';

const Home = (): JSX.Element => {
  const toCategories = (): void => router.push('categories');

  return (
    <View>
      <Button onPress={toCategories} title="to categories" />
    </View>
  );
};

export default Home;
