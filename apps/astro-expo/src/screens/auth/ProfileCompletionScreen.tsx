import { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { useAuthStore } from '@/store/authStore';

export default function ProfileCompletionScreen({ navigation }: any) {
	const setProfile = useAuthStore((s) => s.setProfile);
	const [name, setName] = useState('');
	const [language, setLanguage] = useState('');
	const [caste, setCaste] = useState('');
	const [dob, setDob] = useState('');
	const [tob, setTob] = useState('');
	const [pob, setPob] = useState('');

	const onContinue = async () => {
		await setProfile({ name, language, caste, dateOfBirth: dob, timeOfBirth: tob, placeOfBirth: pob });
		navigation.navigate('ChooseGuru');
	};

	return (
		<ScrollView className="flex-1 bg-white p-6">
			<Text className="text-2xl font-semibold mb-6">Complete your profile</Text>
			<TextInput className="border rounded-xl px-4 py-3 mb-3" placeholder="Name" value={name} onChangeText={setName} />
			<TextInput className="border rounded-xl px-4 py-3 mb-3" placeholder="Language" value={language} onChangeText={setLanguage} />
			<TextInput className="border rounded-xl px-4 py-3 mb-3" placeholder="Caste" value={caste} onChangeText={setCaste} />
			<TextInput className="border rounded-xl px-4 py-3 mb-3" placeholder="Date of Birth (YYYY-MM-DD)" value={dob} onChangeText={setDob} />
			<TextInput className="border rounded-xl px-4 py-3 mb-3" placeholder="Time of Birth (HH:MM)" value={tob} onChangeText={setTob} />
			<TextInput className="border rounded-xl px-4 py-3 mb-3" placeholder="Place of Birth" value={pob} onChangeText={setPob} />
			<Pressable className="bg-black rounded-xl px-6 py-4 mt-2" onPress={onContinue}>
				<Text className="text-white text-center">Continue</Text>
			</Pressable>
		</ScrollView>
	);
}