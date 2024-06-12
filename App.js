import React, { useEffect, useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    const loadResources = async () => {
      try {
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    };
    loadResources();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator />
  );
}