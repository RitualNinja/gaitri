import { View, Text, Pressable, FlatList } from 'react-native';
import { useAuthStore } from '@/store/authStore';

const GURUS = [
	{ id: '1', name: 'Guru Sharma', specialty: 'Vedic Astrology' },
	{ id: '2', name: 'Pandit Verma', specialty: 'Muhurat Expert' },
	{ id: '3', name: 'Acharya Nair', specialty: 'Palmistry' },
];

export default function ChooseGuruScreen({ navigation }: any) {
	const setGuru = useAuthStore((s) => s.setGuru);

	return (
		<View className="flex-1 bg-white p-6">
			<Text className="text-2xl font-semibold mb-4">Choose your Guru</Text>
			<FlatList
				data={GURUS}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Pressable className="border rounded-xl p-4 mb-3" onPress={async () => { await setGuru(item); navigation.reset({ index: 0, routes: [{ name: 'HomeRoot' }] }); }}>
						<Text className="text-lg font-semibold">{item.name}</Text>
						<Text className="text-gray-600">{item.specialty}</Text>
					</Pressable>
				)}
			/>
		</View>
	);
}