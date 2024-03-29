import { Stack } from 'expo-router';

const CategoriesLayout = (): JSX.Element => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default CategoriesLayout;
