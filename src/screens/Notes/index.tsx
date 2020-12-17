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
import { PrimaryButton, SmallButton } from "../../components/Buttons";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";
import Switches from "react-native-switches";
import { colors } from "../../utils";

import { PostCardPublished, PostCardDraft } from "../../components/PostCard";

const Notes = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const [draftNotes, setdraftNotes] = useState([1]);
  const [notes, setNotes] = useState([1, 2]);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={[globalStyles.container, styles.notesPage]}
      >
        <View style={styles.topButtonArea}>
          <SmallButton
            label="Write"
            icon="feather"
            triggerAction={() => navigation.navigate("WriteNote")}
          />
        </View>
        <Text style={[globalStyles.pageHeading, styles.heading]}>Notes</Text>
        {notes.length === 0 ? (
          <View>
            <Text style={styles.noNoteSubHeading}>
              You don'thave any notes yet
            </Text>
            <Text style={styles.noNoteBody}>
              Share your thoughts and experience to the community. Writing out
              your problems may help you emotionally cope with problems ans
              survive crisis.
            </Text>
            <Text style={styles.noNoteBody}>
              Remember, you always can stay completely anonymous
            </Text>
          </View>
        ) : (
          <View>
            {draftNotes.map((item, index) => {
              return (
                <PostCardDraft
                  key={index}
                  triggerAction={() => navigation.push("WriteNote")}
                />
              );
            })}
            {notes.map((item, index) => {
              return (
                <PostCardPublished
                  key={index}
                  triggerAction={() => navigation.push("WriteNote")}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notes;
