import { Modal, View, Text, Pressable, FlatList } from 'react-native';
import { useAuthStore } from '@/store/authStore';

const GURUS = [
	{ id: '1', name: 'Guru Sharma', specialty: 'Vedic Astrology' },
	{ id: '2', name: 'Pandit Verma', specialty: 'Muhurat Expert' },
	{ id: '3', name: 'Acharya Nair', specialty: 'Palmistry' },
];

export default function GuruSelectModal() {
	const { showGuruModal, setShowGuruModal, setGuru } = useAuthStore((s) => ({
		showGuruModal: s.showGuruModal,
		setShowGuruModal: s.setShowGuruModal,
		setGuru: s.setGuru,
	}));

	return (
		<Modal visible={showGuruModal} transparent animationType="slide" onRequestClose={() => setShowGuruModal(false)}>
			<View className="flex-1 justify-end bg-black/30">
				<View className="bg-white rounded-t-2xl p-6 max-h-[70%]">
					<Text className="text-xl font-semibold mb-4">Select a Guru</Text>
					<FlatList
						data={GURUS}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<Pressable className="border rounded-xl p-4 mb-3" onPress={async () => { await setGuru(item); setShowGuruModal(false); }}>
								<Text className="text-lg font-semibold">{item.name}</Text>
								<Text className="text-gray-600">{item.specialty}</Text>
							</Pressable>
						)}
					/>
					<Pressable className="bg-black rounded-xl px-6 py-4 mt-2" onPress={() => setShowGuruModal(false)}>
						<Text className="text-white text-center">Close</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}