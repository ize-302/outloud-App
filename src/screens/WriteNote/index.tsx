import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { NakedButton, SmallButton } from "../../components/Buttons";
import Icon from "../../components/Icon";
import SwitchComponent from "../../components/Switch";
import { colors, getHeight } from "../../utils";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";

const WriteNote = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [hidden, sethidden] = useState(false);
  const [tags, settags] = useState(["Depression"]);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[globalStyles.container]}>
        <View style={styles.actionButtons}>
          <NakedButton
            label="Cancel"
            triggerAction={() => navigation.goBack()}
          />
          <SmallButton label="Submit" triggerAction={() => alert("")} />
        </View>
      </View>
      <ScrollView style={[globalStyles.scrollView, globalStyles.container]}>
        <Text style={[globalStyles.pageHeading, styles.heading]}>Write</Text>
        <View style={styles.switchOption}>
          <SwitchComponent
            value={hidden}
            triggerAction={() => sethidden(!hidden)}
          />
          <Text style={styles.switchOptionLabel}>
            {hidden ? "Share it anonymously" : "Share it with my name"}
          </Text>
        </View>
        <View style={styles.tagsbody}>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Depression</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Domestic Violence</Text>
            </View>
          </View>
          <TextInput style={{ marginTop: getHeight(10) }} value="" />
        </View>
        <Text style={styles.tagExample}>For instance - Depression</Text>
        <ScrollView style={styles.postBody}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.inputField}
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque. Ut pharetra sit amet aliquam id. Consequat interdum varius sit amet mattis vulputate enim. Ultricies tristique nulla aliquet enim. Nullam eget felis eget nunc. Magna sit amet purus gravida. Aliquam ultrices sagittis orci a. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Sit amet justo donec enim diam. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Id cursus metus aliquam eleifend mi in nulla. In mollis nunc sed id semper. Dui sapien eget mi proin. Aliquam sem et tortor consequat id porta nibh venenatis cras.

            Iaculis nunc sed augue lacus viverra. Dolor magna eget est lorem ipsum dolor. Facilisi etiam dignissim diam quis enim lobortis. Et egestas quis ipsum suspendisse ultrices. Morbi leo urna molestie at elementum eu facilisis sed. In iaculis nunc sed augue lacus viverra. Iaculis eu non diam phasellus vestibulum lorem. Nibh venenatis cras sed felis eget velit. At risus viverra adipiscing at. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            
            Amet porttitor eget dolor morbi non arcu. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Sagittis purus sit amet volutpat. Integer vitae justo eget magna fermentum iaculis eu. Mattis nunc sed blandit libero volutpat sed. Habitant morbi tristique senectus et netus et malesuada fames ac. Tellus mauris a diam maecenas sed enim ut sem. Sed felis eget velit aliquet sagittis id consectetur purus. Nunc lobortis mattis aliquam faucibus purus. Risus in hendrerit gravida rutrum quisque non. Enim praesent elementum facilisis leo vel fringilla est. Quis blandit turpis cursus in hac habitasse platea dictumst. Eu augue ut lectus arcu bibendum. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Vitae ultricies leo integer malesuada nunc vel risus commodo. Non nisi est sit amet facilisis magna etiam. Convallis a cras semper auctor neque. Duis ultricies lacus sed turpis tincidunt id aliquet."
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WriteNote;
