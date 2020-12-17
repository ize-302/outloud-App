import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    heading: {
      marginTop: getHeight(30),
      marginBottom: getHeight(10),
    },
    profilePage: {
      paddingHorizontal: getWidth(20),
    },

    pageContent: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "86%",
    },

    instruction: {
      fontSize: getHeight(16),
      fontFamily: "SF_Medium",
      lineHeight: getHeight(24),
    },

    profile: {
      flexDirection: "row",
      marginTop: getHeight(30),
      flexWrap: "wrap",
    },

    userPhoto: {
      resizeMode: "cover",
      width: getWidth(60),
      height: getWidth(60),
      borderRadius: getHeight(100),
    },

    form: {
      height: 30,
      marginLeft: getWidth(20),
      flex: 1,
    },

    textInput: {
      borderBottomColor: "#ddd",
      borderBottomWidth: 1,
      height: getHeight(50),
    },

    hiddenProfile: {
      flexDirection: "row",
      marginTop: getHeight(20),
      flexWrap: "wrap",
    },
    hiddenProfileCaption: {
      flex: 1,
      marginLeft: getWidth(10),
    },
    hiddenProfileCaptionTitle: {
      fontFamily: "SF_Bold",
    },
    hiddenProfileCaptionText: {
      fontFamily: "SF_Regular",
      color: "#999",
      marginTop: getHeight(5),
    },

    skip: {
      color: colors.taiga,
      fontSize: getHeight(16),
      fontFamily: "SF_Medium",
      textAlign: "center",
      paddingHorizontal: "25%",
      marginBottom: getHeight(30),
    },
  });
};

export default styles;
