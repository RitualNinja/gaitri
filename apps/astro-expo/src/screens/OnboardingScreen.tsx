import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function OnboardingScreen({ navigation }: any) {
	return (
		<View className="flex-1 items-center justify-center bg-white p-6">
			<Text className="text-3xl font-bold mb-4 font-devanagari">Welcome to Astro</Text>
			<Text className="text-gray-600 mb-8 text-center">Get personalized daily horoscope and connect with your Guru.</Text>
			<Pressable className="bg-black rounded-xl px-6 py-4" onPress={() => navigation.navigate('Login')}>
				<Text className="text-white text-base">Get Started</Text>
			</Pressable>
		</View>
	);
}