import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    heading: {
      marginTop: getHeight(30),
      marginLeft: getWidth(20),
      marginBottom: getHeight(10),
    },

    notificationCard: {
      backgroundColor: "#fff",
      paddingVertical: getWidth(10),
      paddingHorizontal: getWidth(10),
      marginBottom: getHeight(10),
      borderRadius: getHeight(20),
      flexDirection: "row",
      justifyContent: "space-between",
    },

    userPhoto: {
      resizeMode: "cover",
      width: getWidth(30),
      height: getWidth(30),
      borderRadius: getHeight(100),
    },

    content: {
      marginTop: getHeight(5),
      marginLeft: getWidth(5),
      width: "88%",
    },

    user: {
      fontFamily: "SF_Bold",
    },
    post: {
      fontFamily: "SF_RegularItalic",
      fontSize: getWidth(14),
    },

    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    tags: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    tag: {
      borderRadius: getHeight(10),
      backgroundColor: "#eee",
      marginRight: getWidth(10),
      paddingVertical: getHeight(3),
      paddingHorizontal: getWidth(7),
    },
    tagText: {
      fontSize: getWidth(12),
      color: colors.taiga,
    },
    time: {
      fontSize: getWidth(12),
      color: "#aaa",
    },
  });
};

export default styles;
