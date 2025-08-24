import { View, Text, Pressable } from 'react-native';
import { useAuthStore } from '@/store/authStore';

export default function ChatScreen() {
	const { authState, setShowGuruModal } = useAuthStore((s) => ({ authState: s.authState, setShowGuruModal: s.setShowGuruModal }));
	return (
		<View className="flex-1 bg-white p-6">
			<Text className="text-2xl font-semibold mb-2">Chat</Text>
			<Text className="mb-4">Selected Guru: {authState.selectedGuru?.name ?? 'None'}</Text>
			<Pressable className="bg-gray-100 rounded-xl px-4 py-3" onPress={() => setShowGuruModal(true)}>
				<Text>Switch Guru</Text>
			</Pressable>
		</View>
	);
}