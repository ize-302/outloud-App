import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    heading: {
      marginTop: getHeight(10),
      marginBottom: getHeight(10),
    },
    notesPage: {
      paddingHorizontal: getWidth(20),
    },
    noNoteSubHeading: {
      fontFamily: "SF_Regular",
      marginBottom: getHeight(10),
      fontSize: getHeight(16),
    },

    noNoteBody: {
      color: "#666",
      marginBottom: getHeight(20),
      fontFamily: "SF_Regular",
      fontSize: getHeight(16),
      lineHeight: getHeight(22),
    },

    topButtonArea: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: getHeight(15),
    },
  });
};

export default styles;
