import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { PrimaryButton } from "../../components/Buttons";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";

const Notifications = ({ navigation }) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const notifications = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={[globalStyles.scrollView, globalStyles.container]}>
        <Text style={[globalStyles.pageHeading, styles.heading]}>
          Notifications
        </Text>
        <View>
          {notifications.map((notification, index) => {
            return (
              <View key={index} style={styles.notificationCard}>
                <Image
                  style={styles.userPhoto}
                  source={{
                    uri:
                      "https://images.generated.photos/jbdXy8dZIdi1Ka4-K0yrbqSCyUqKN4X2SuOx-7P34Po/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyOTYyNTYuanBn.jpg",
                  }}
                />
                <View style={styles.content}>
                  <Text>
                    <Text style={styles.user}>Someone</Text> responded to your
                    post
                  </Text>
                  <Text style={styles.post}>
                    « Lorem ipsum dolor sit amet, consectetur ad... »
                  </Text>
                  <View style={styles.footer}>
                    <View style={styles.tags}>
                      <View style={styles.tag}>
                        <Text style={styles.tagText}>Depression</Text>
                      </View>
                      <View style={styles.tag}>
                        <Text style={styles.tagText}>🙏</Text>
                      </View>
                    </View>
                    <Text style={styles.time}>5 min ago</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
