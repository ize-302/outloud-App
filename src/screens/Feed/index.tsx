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

  const DATA = [
    {
      id: 1,
      title: "The Hunger Games",
    },
    {
      id: 2,
      title: "Harry Potter and the Order of the Phoenix",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
    },
    {
      id: 5,
      title: "Twilight",
    },
    {
      id: 6,
      title: "The Book Thief",
    },
    {
      id: 7,
      title: "The Chronicles of Narnia",
    },
    {
      id: 8,
      title: "Animal Farm",
    },
    {
      id: 9,
      title: "Gone with the Wind",
    },
    {
      id: 10,
      title: "The Shadow of the Wind",
    },
    {
      id: 11,
      title: "The Fault in Our Stars",
    },
    {
      id: 12,
      title: "The Hitchhiker's Guide to the Galaxy",
    },
    {
      id: 13,
      title: "The Giving Tree",
    },
    {
      id: 14,
      title: "Wuthering Heights",
    },
    {
      id: 15,
      title: "The Da Vinci Code",
    },
  ];

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
        {DATA.map((item) => (
          <View
            key={item.id}
            style={{
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#101010", fontSize: 32 }}>{item.title}</Text>
          </View>
        ))}
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
