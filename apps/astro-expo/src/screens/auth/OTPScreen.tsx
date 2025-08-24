import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useAuthStore } from '@/store/authStore';

export default function OTPScreen({ navigation, route }: any) {
	const [otp, setOtp] = useState('');
	const login = useAuthStore((s) => s.login);

	const onVerify = async () => {
		if (otp.length === 4) {
			await login(route.params?.phone ?? '');
			navigation.replace('ProfileCompletion');
		}
	};

	return (
		<View className="flex-1 bg-white p-6">
			<Text className="text-2xl font-semibold mb-6">Enter OTP</Text>
			<TextInput className="border rounded-xl px-4 py-3 mb-4 tracking-[12px] text-center" value={otp} onChangeText={setOtp} keyboardType="number-pad" maxLength={4} />
			<Pressable className="bg-black rounded-xl px-6 py-4" onPress={onVerify}>
				<Text className="text-white text-center">Verify</Text>
			</Pressable>
		</View>
	);
}