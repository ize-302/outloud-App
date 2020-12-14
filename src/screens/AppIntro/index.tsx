import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { PrimaryButton } from "../../components/Buttons";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";

const AppIntro = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  return (
    <View
      style={[globalStyles.scrollView, globalStyles.container, styles.content]}
    >
      <View style={styles.upperContent}></View>
      <View style={styles.lowerContent}>
        <View>
          <Text style={styles.lowerContentHeading}>Hello! 👋 </Text>
          <Text style={styles.lowerContentBody}>
            Out Loud is an anonymous «twitter» for those who are going through
            difficult times and cant share it with anyone.
          </Text>
        </View>
        <View>
          <Text style={styles.howDoesItWork}>
            How does it work and why can it help?
          </Text>
          <PrimaryButton
            triggerAction={() => navigation.push("CarouselsIntro")}
            label="Let's go"
          />
        </View>
      </View>
    </View>
  );
};

export default AppIntro;
