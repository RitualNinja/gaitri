# Astro Expo App

Run from this folder only.

## Start
```bash
cd apps/astro-expo
npm install
npx expo start -c
```

If you see a Babel error about `.plugins`, you likely started from the repo root. Always start from `apps/astro-expo` so Metro reads this app's `babel.config.js`.

## Expected versions (Expo SDK 53)
Align with:
- react-native: 0.79.5
- react-native-reanimated: ~3.17.4
- react-native-gesture-handler: ~2.24.0
- react-native-screens: ~4.11.1
- react-native-safe-area-context: 5.4.0
- @react-native-async-storage/async-storage: 2.1.2

Use Expo to install:
```bash
npx expo install react-native@0.79.5 react-native-reanimated@~3.17.4 react-native-gesture-handler@~2.24.0 react-native-screens@~4.11.1 react-native-safe-area-context@5.4.0 @react-native-async-storage/async-storage@2.1.2
```