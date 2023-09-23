import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";

import SignUpScreen from "./components/screens/signup";
import SignInScreen from "./components/screens/signin";
import styles from "./components/UI/styles";

export default function App() {
  const [appState, setAppState] = useState<"home" | "plan" | "workout">("home");

  return (
    <ClerkProvider publishableKey={Constants.expoConfig?.extra?.clerkKey!}>
      <SafeAreaView>
        <SignedIn>
          <View style={styles.page}>
            <Text>You are Signed in</Text>
          </View>
        </SignedIn>
        <SignedOut>
          <SignInScreen />
        </SignedOut>
      </SafeAreaView>
      <StatusBar />
    </ClerkProvider>
  );
}
