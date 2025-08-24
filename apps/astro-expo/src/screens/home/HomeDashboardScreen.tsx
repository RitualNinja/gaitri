import { View, Text, Pressable } from 'react-native';
import { useAuthStore } from '@/store/authStore';

export default function HomeDashboardScreen({ navigation }: any) {
	const { authState, setShowGuruModal } = useAuthStore((s) => ({ authState: s.authState, setShowGuruModal: s.setShowGuruModal }));
	return (
		<View className="flex-1 bg-white p-6">
			<Text className="text-2xl font-semibold mb-2">Namaste{authState.userProfile?.name ? `, ${authState.userProfile.name}` : ''} 🙏</Text>
			<Text className="text-gray-600 mb-6">Today's horoscope will appear here.</Text>
			<View className="flex-row gap-3">
				<Pressable className="bg-black rounded-xl px-4 py-3" onPress={() => navigation.navigate('Ritual Planner')}>
					<Text className="text-white">Ritual Planner</Text>
				</Pressable>
				<Pressable className="bg-black rounded-xl px-4 py-3" onPress={() => navigation.navigate('Chat')}>
					<Text className="text-white">Chat</Text>
				</Pressable>
				<Pressable className="bg-gray-100 rounded-xl px-4 py-3" onPress={() => setShowGuruModal(true)}>
					<Text className="text-black">Switch Guru</Text>
				</Pressable>
			</View>
		</View>
	);
}