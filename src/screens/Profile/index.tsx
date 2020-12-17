import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { PrimaryButton } from "../../components/Buttons";
import SwitchComponent from "../../components/Switch";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";

const Profile = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [hidden, sethidden] = useState(false);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[globalStyles.container, styles.profilePage]}>
        <Text style={[globalStyles.pageHeading, styles.heading]}>Profile</Text>
        <View style={styles.pageContent}>
          <View>
            <Text style={styles.instruction}>
              You don't have to fill this field, skip the step or hide your
              profile to stay anonymous
            </Text>
            <View style={styles.profile}>
              <View>
                <Image
                  style={styles.userPhoto}
                  source={{
                    uri:
                      "https://images.generated.photos/jbdXy8dZIdi1Ka4-K0yrbqSCyUqKN4X2SuOx-7P34Po/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyOTYyNTYuanBn.jpg",
                  }}
                />
              </View>
              <View style={styles.form}>
                <TextInput style={styles.textInput} placeholder="Name" />
                <TextInput style={styles.textInput} placeholder="Age" />
                <TextInput style={styles.textInput} placeholder="Gender" />
                <View style={styles.hiddenProfile}>
                  <SwitchComponent
                    value={hidden}
                    triggerAction={() => sethidden(!hidden)}
                  />

                  <View style={styles.hiddenProfileCaption}>
                    <Text style={styles.hiddenProfileCaptionTitle}>
                      {hidden ? "Hidden profile" : "Visible profile"}
                    </Text>
                    <Text style={styles.hiddenProfileCaptionText}>
                      {hidden
                        ? "Your posts nd reactions won't have the author"
                        : "Your posts nd reactions will have the author"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.skip}>Skip and leave empty</Text>
            <PrimaryButton triggerAction={() => alert("done")} label="Done" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
