import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

export type UserProfile = {
	name?: string;
	language?: string;
	caste?: string;
	dateOfBirth?: string;
	timeOfBirth?: string;
	placeOfBirth?: string;
};

export type Guru = {
	id: string;
	name: string;
	specialty?: string;
};

export type AuthState = {
	loggedIn: boolean;
	userProfile?: UserProfile;
	selectedGuru?: Guru;
};

export type AuthStore = {
	authState: AuthState;
	isHydrated: boolean;
	showGuruModal: boolean;
	setShowGuruModal: (visible: boolean) => void;
	hydrate: () => Promise<void>;
	persist: () => Promise<void>;
	login: (phone: string) => Promise<void>;
	logout: () => Promise<void>;
	setProfile: (profile: UserProfile) => Promise<void>;
	setGuru: (guru: Guru) => Promise<void>;
};

const STORAGE_KEY = 'authState';

export const useAuthStore = create<AuthStore>((set, get) => ({
	authState: { loggedIn: false },
	isHydrated: false,
	showGuruModal: false,
	setShowGuruModal: (visible: boolean) => set({ showGuruModal: visible }),
	async hydrate() {
		try {
			const raw = await AsyncStorage.getItem(STORAGE_KEY);
			if (raw) {
				set({ authState: JSON.parse(raw), isHydrated: true });
			} else {
				set({ isHydrated: true });
			}
		} catch (e) {
			set({ isHydrated: true });
		}
	},
	async persist() {
		await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(get().authState));
	},
	async login(phone: string) {
		set({ authState: { ...get().authState, loggedIn: true } });
		await get().persist();
	},
	async logout() {
		set({ authState: { loggedIn: false } });
		await get().persist();
	},
	async setProfile(profile: UserProfile) {
		set({ authState: { ...get().authState, userProfile: profile } });
		await get().persist();
	},
	async setGuru(guru: Guru) {
		set({ authState: { ...get().authState, selectedGuru: guru } });
		await get().persist();
	},
} as any));