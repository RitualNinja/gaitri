# Expo RN App: Auth Flow, Navigation, NativeWind, Zustand, Fonts

## Overview
This PR scaffolds a new Expo (SDK 53) React Native app using the managed workflow with:
- React Navigation (Native Stack, Drawer, Tabs)
- NativeWind + TailwindCSS styling
- Zustand for global state management
- AsyncStorage for persistence
- Google Fonts: TiroDevanagariSanskrit Regular & Italic

## Authentication & Flow
- Zustand `authState` with `loggedIn`, `userProfile`, and `selectedGuru`
- Persisted via `@react-native-async-storage/async-storage`
- Routing:
  - Not logged in → Onboarding → Login → OTP → Profile Completion → Choose Guru → Home
  - Logged in → Home

## Navigation & UX
- Drawer wraps the app
- Home shows a TabNavigator with a single `Home` tab (tab bar visible only here)
- Other routes (Ritual Planner, Invite, Ritual Kit, Chat) are stack screens with headers and back buttons
- Reusable modal for selecting Guru (accessible from Home and Chat)

## Screens
- Onboarding
- Login (country code + phone)
- OTP (4-digit)
- Profile Completion (Name, Language, Caste, DOB, TOB, POB)
- Choose Guru (screen)
- Home Dashboard (horoscope placeholder + quick actions)
- Ritual Planner, Invite, Ritual Kit, Chat

## Fonts
- Added `TiroDevanagariSanskrit-Regular.ttf` & `TiroDevanagariSanskrit-Italic.ttf` under `assets/fonts`
- Loaded via `expo-font` and gated splash screen until ready
- Tailwind font families configured in `tailwind.config.js`

## Dev Experience
- Path aliases via Babel module-resolver (`@` → `src`)
- TypeScript path alias configured
- Typecheck script added

## Testing
- Typecheck: `npm run typecheck` (passes)
- Web deps installed and app boots with `npm run web`

## Follow-ups
- Add real OTP backend and validation
- Implement actual horoscope logic
- Improve UI polish and icons