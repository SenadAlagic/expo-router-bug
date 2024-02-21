import { Stack } from 'expo-router';

const HomeLayout = (): JSX.Element => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default HomeLayout;
