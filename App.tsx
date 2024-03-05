import 'react-native-gesture-handler';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StackNavigation } from '@/navigations';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'IBM_Regular': require('./assets/fonts/IBMPlexSans-Regular.ttf'),
    'IBM_Semibold': require('./assets/fonts/IBMPlexSans-SemiBold.ttf'),
    'IBM_Bold': require('./assets/fonts/IBMPlexSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
   <StackNavigation/>
  );
}

