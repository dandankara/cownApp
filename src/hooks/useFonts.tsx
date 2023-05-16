import { useFonts } from 'expo-font';

const [loaded] = useFonts({
  'Signika-Light': require('@livelo/alchemy-tokens/fonts/Signika-Light.ttf'),
  'Signika-Regular': require('@livelo/alchemy-tokens/fonts/Signika-Regular.ttf'),
  'Signika-Medium': require('@livelo/alchemy-tokens/fonts/Signika-Medium.ttf'),
  'Signika-SemiBold': require('@livelo/alchemy-tokens/fonts/Signika-SemiBold.ttf'),
  'Signika-Bold': require('@livelo/alchemy-tokens/fonts/Signika-Bold.ttf'),
  'MuseoSans-300': require('@livelo/alchemy-tokens/fonts/MuseoSans-300.otf'),
  'MuseoSans-300Italic': require('@livelo/alchemy-tokens/fonts/MuseoSans-300Italic.otf'),
  'MuseoSans-500': require('@livelo/alchemy-tokens/fonts/MuseoSans-500.otf'),
  'MuseoSans-500Italic': require('@livelo/alchemy-tokens/fonts/MuseoSans-500Italic.otf'),
  'MuseoSans-700': require('@livelo/alchemy-tokens/fonts/MuseoSans-700.otf'),
  'MuseoSans-700Italic': require('@livelo/alchemy-tokens/fonts/MuseoSans-700Italic.otf'),
  'MuseoSans-900': require('@livelo/alchemy-tokens/fonts/MuseoSans-900.otf'),
  'MuseoSans-900Italic': require('@livelo/alchemy-tokens/fonts/MuseoSans-900.otf'),
});

  if (!loaded) {
    return <Loading />;
  } else {
    return (null)
  }
