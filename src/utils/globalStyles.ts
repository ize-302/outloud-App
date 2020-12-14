import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "./index";

const styles = () => {
  return StyleSheet.create({
    safeArea: {
      height: "100%",
      backgroundColor: colors.cream,
      paddingTop: "10%",
      flex: 1,
    },
    scrollView: {
      height: "100%",
      backgroundColor: colors.cream,
    },
    container: {
      paddingHorizontal: getWidth(10),
    },

    tabs: {
      backgroundColor: colors.cream,
      borderTopColor: colors.cream,
    },

    tabStyle: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 7,
    },

    tabLabel: {
      fontFamily: "SF_Medium",
      fontSize: getHeight(11),
      marginTop: getHeight(6),
      letterSpacing: 0.6,
    },
  });
};

export default styles;
