import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./header";
import { PrimaryButton } from "../../components/Buttons";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";
import { PostCardPublished } from "../../components/PostCard";

const Home = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  const [position, setposition] = useState(0);

  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const setHeaderHeight = () => {
    if (position <= 0) {
      return 150;
    }
    if (position > 0) {
      return 100;
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Header height={setHeaderHeight()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(e) => setposition(e.nativeEvent.contentOffset.y)}
        style={[globalStyles.scrollView, globalStyles.container]}
      >
        {DATA.map((item, index) => (
          <PostCardPublished
            key={index}
            triggerAction={() => navigation.push("ReadNote")}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
