import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView, Text, View, Animated } from "react-native";
import { colors, getWidth, getHeight } from "../../utils";
import Icon from "../../components/Icon";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const options = [
  "All posts",
  "Domestic violence",
  "Depression",
  "Addiction",
  "Bullying",
  "Postpartum depression",
];

const Header = ({ height }) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [activeTab, setactiveTab] = useState(0);

  return (
    <Animated.View style={styles.header}>
      <View style={[globalStyles.container, styles.topHeader]}>
        <View style={{ width: "20%" }}></View>
        {height === 100 && <Text style={styles.topHeaderTitle}>Feed</Text>}
        <View style={styles.filterIcon}>
          <Icon name="filters" color={colors.taiga} />
        </View>
      </View>
      {height > 100 && (
        <Text style={[globalStyles.container, styles.lowerHeaderTitle]}>
          Feed
        </Text>
      )}
      <ScrollView
        style={styles.tab}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        {options.map((option, index) => {
          return (
            <TouchableOpacity
              onPress={() => setactiveTab(index)}
              style={[
                {
                  marginLeft: index === 0 ? getWidth(20) : getWidth(10),
                  backgroundColor: index === activeTab ? colors.taiga : "#ddd",
                },
                styles.tabOption,
              ]}
              key={index}
            >
              <Text
                style={[
                  { color: index === activeTab ? "#fff" : colors.taiga },
                  styles.tabOptionLabel,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default Header;
