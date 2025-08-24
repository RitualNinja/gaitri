import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAuthStore } from '@/store/authStore';
import OnboardingScreen from '@/screens/OnboardingScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import OTPScreen from '@/screens/auth/OTPScreen';
import ProfileCompletionScreen from '@/screens/auth/ProfileCompletionScreen';
import ChooseGuruScreen from '@/screens/ChooseGuruScreen';
import HomeDashboardScreen from '@/screens/home/HomeDashboardScreen';
import RitualPlannerScreen from '@/screens/RitualPlannerScreen';
import InviteScreen from '@/screens/InviteScreen';
import RitualKitScreen from '@/screens/RitualKitScreen';
import ChatScreen from '@/screens/ChatScreen';
import GuruSelectModal from '@/shared/GuruSelectModal';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function HomeTabs() {
	return (
		<Tabs.Navigator screenOptions={{ headerShown: false }}>
			<Tabs.Screen name="Home" component={HomeDashboardScreen} />
		</Tabs.Navigator>
	);
}

function DrawerLayout() {
	return (
		<Drawer.Navigator screenOptions={{ headerShown: false }}>
			<Drawer.Screen name="Main" component={HomeTabs} />
		</Drawer.Navigator>
	);
}

function AuthedStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="HomeRoot" component={DrawerLayout} options={{ headerShown: false }} />
			<Stack.Screen name="Ritual Planner" component={RitualPlannerScreen} />
			<Stack.Screen name="Invite" component={InviteScreen} />
			<Stack.Screen name="Ritual Kit" component={RitualKitScreen} />
			<Stack.Screen name="Chat" component={ChatScreen} />
			<Stack.Screen name="ChooseGuru" component={ChooseGuruScreen} options={{ presentation: 'modal', title: 'Choose Guru' }} />
		</Stack.Navigator>
	);
}

function UnauthedStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
			<Stack.Screen name="OTP" component={OTPScreen} options={{ title: 'Verify OTP' }} />
			<Stack.Screen name="ProfileCompletion" component={ProfileCompletionScreen} options={{ title: 'Complete Profile' }} />
			<Stack.Screen name="ChooseGuru" component={ChooseGuruScreen} options={{ presentation: 'modal', title: 'Choose Guru' }} />
		</Stack.Navigator>
	);
}

export default function RootNavigator() {
	const { isHydrated, authState, hydrate } = useAuthStore((s) => ({
		isHydrated: s.isHydrated,
		authState: s.authState,
		hydrate: s.hydrate,
	}));

	useEffect(() => {
		if (!isHydrated) hydrate();
	}, [isHydrated]);

	if (!isHydrated) {
		return null;
	}

	return (
		<NavigationContainer>
			{authState.loggedIn ? <AuthedStack /> : <UnauthedStack />}
			<GuruSelectModal />
		</NavigationContainer>
	);
}