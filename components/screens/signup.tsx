import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";

import styles from "../UI/styles";

interface iSignUpScreen {
  switchIn: Function;
}

const SignUpScreen: React.FC<iSignUpScreen> = ({ switchIn }) => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.page}>
      {!pendingVerification && (
        <>
          <View style={styles.middlePage}>
            <Text style={styles.title}>Workout Tracker and Timer</Text>
            <View>
              <TextInput
                autoCapitalize="none"
                value={emailAddress}
                placeholder="Email..."
                onChangeText={(email) => setEmailAddress(email)}
                style={styles.input}
              />
            </View>

            <View>
              <TextInput
                value={password}
                placeholder="Password..."
                //   placeholderTextColor="#000"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                style={styles.input}
              />
            </View>

            <TouchableOpacity onPress={onSignUpPress} style={styles.btnPrimary}>
              <Text style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => switchIn()}>
            <Text style={[styles.alignRight, styles.link]}>Sign In</Text>
          </TouchableOpacity>
        </>
      )}
      {pendingVerification && (
        <View style={styles.middlePage}>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
              style={styles.input}
            />
          </View>
          <TouchableOpacity onPress={onPressVerify} style={styles.btnPrimary}>
            <Text style={styles.btnText}>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SignUpScreen;
