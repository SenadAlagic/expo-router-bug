import React from 'react';

import { Tabs } from 'expo-router';

const Menu = (): JSX.Element => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="categories" />
    </Tabs>
  );
};

export default Menu;
