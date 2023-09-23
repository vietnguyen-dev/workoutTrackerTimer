import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";

import SignUpScreen from "./components/screens/signup";
import SignInScreen from "./components/screens/signin";
import styles from "./components/UI/styles";

export default function App() {
  const [appState, setAppState] = useState<"home" | "plan" | "workout">("plan");
  const [signUpState, setSignUpState] = useState<"up" | "in">("in");

  return (
    <ClerkProvider publishableKey={Constants.expoConfig?.extra?.clerkKey!}>
      <SafeAreaView>
        <SignedIn>
          {appState === "home" && <Home />}
          {appState === "plan" && <Plan />}
        </SignedIn>
        <SignedOut>
          {signUpState ? <SignInScreen /> : <SignUpScreen />}
        </SignedOut>
      </SafeAreaView>
      <StatusBar />
    </ClerkProvider>
  );
}

const Home = () => {
  return (
    <View style={styles.page}>
      <Text>HOme</Text>
    </View>
  );
};

const Plan = () => {
  return (
    <View style={styles.page}>
      <Text>Plan</Text>
    </View>
  );
};
