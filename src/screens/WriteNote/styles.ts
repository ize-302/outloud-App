import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    actionButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: getHeight(5),
    },
    heading: {
      marginTop: getHeight(20),
      marginLeft: getWidth(10),
      marginBottom: getHeight(10),
    },
    switchOption: {
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: getWidth(10),
      marginVertical: getHeight(10),
    },
    switchOptionLabel: {
      fontFamily: "SF_Medium",
      marginLeft: getWidth(10),
    },
    tagsbody: {
      backgroundColor: "#fff",
      borderRadius: getHeight(15),
      padding: getWidth(10),
    },
    tags: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
    },
    tag: {
      borderRadius: getHeight(10),
      backgroundColor: "#eee",
      marginRight: getWidth(10),
      paddingVertical: getHeight(3),
      paddingHorizontal: getWidth(7),
    },
    tagText: {
      fontSize: getHeight(14),
      color: colors.taiga,
    },
    tagExample: {
      fontFamily: "SF_Regular",
      color: "#aaa",
      marginLeft: getWidth(10),
      marginTop: getHeight(10),
      marginBottom: getHeight(25),
    },
    postBody: {
      backgroundColor: "#fff",
      borderRadius: getHeight(15),
      padding: getWidth(10),
      // height: getHeight(310),
      marginBottom: getHeight(300),
    },
    inputField: {
      fontFamily: "SF_Regular",
      fontSize: 18,
    },
  });
};

export default styles;
