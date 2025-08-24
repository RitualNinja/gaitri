import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RootNavigator from './src/navigation/RootNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		'TiroDevanagariSanskrit-Regular': require('./assets/fonts/TiroDevanagariSanskrit-Regular.ttf'),
		'TiroDevanagariSanskrit-Italic': require('./assets/fonts/TiroDevanagariSanskrit-Italic.ttf'),
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<RootNavigator />
	);
}
