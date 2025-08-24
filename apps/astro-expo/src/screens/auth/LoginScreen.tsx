import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function LoginScreen({ navigation }: any) {
	const [countryCode, setCountryCode] = useState('+91');
	const [phone, setPhone] = useState('');

	return (
		<View className="flex-1 bg-white p-6">
			<Text className="text-2xl font-semibold mb-6">Login</Text>
			<View className="flex-row gap-3 mb-4">
				<TextInput className="border rounded-xl px-4 py-3 w-24" value={countryCode} onChangeText={setCountryCode} />
				<TextInput className="flex-1 border rounded-xl px-4 py-3" value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholder="Phone number" />
			</View>
			<Pressable className="bg-black rounded-xl px-6 py-4" onPress={() => navigation.navigate('OTP', { phone: `${countryCode}${phone}` })}>
				<Text className="text-white text-center">Send OTP</Text>
			</Pressable>
		</View>
	);
}