import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    primaryButton: {
      backgroundColor: colors.taiga,
      borderRadius: getHeight(20),
      height: getHeight(50),
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    primaryButtonText: {
      color: "white",
      fontSize: getHeight(18),
      fontFamily: "SF_Medium",
    },
    nakedButtonText: {
      color: colors.taiga,
      fontSize: getHeight(18),
      fontFamily: "SF_Medium",
    },
    smallButton: {
      backgroundColor: colors.orange,
      flexDirection: "row",
      borderRadius: getHeight(20),
      paddingHorizontal: getWidth(10),
      paddingVertical: getHeight(4),
      width: 75,
      justifyContent: "space-around",
    },
    smallButtonText: {
      color: "white",
    },
  });
};

export default styles;
