import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    user: {
      flexDirection: "row",
      alignItems: "center",
    },
    userPhoto: {
      resizeMode: "cover",
      width: getWidth(35),
      height: getWidth(35),
      borderRadius: getHeight(50),
    },

    userName: {
      fontFamily: "SF_Bold",
      marginLeft: getWidth(10),
      fontSize: getHeight(15),
    },
  });
};

export default styles;
