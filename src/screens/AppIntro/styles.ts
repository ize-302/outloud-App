import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    content: {
      flexDirection: "column",
      justifyContent: "space-between",
      paddingVertical: getHeight(20),
    },
    upperContent: {
      //   height: "50%",
    },
    lowerContent: {
      height: "60%",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingHorizontal: getWidth(30),
    },
    lowerContentHeading: {
      fontSize: getHeight(32),
      fontFamily: "Recoleta",
      color: colors.black,
    },
    lowerContentBody: {
      marginTop: getHeight(15),
      fontSize: getHeight(20),
      lineHeight: getHeight(28),
      fontFamily: "SF_Medium",
    },

    howDoesItWork: {
      color: colors.taiga,
      fontSize: getHeight(16),
      fontFamily: "SF_Regular",
      textAlign: "center",
      paddingHorizontal: "25%",
      marginBottom: getHeight(30),
    },

    dotStyle: {
      backgroundColor: "#aaa",
      width: getWidth(20),
      height: getHeight(8),
    },
    activedotStyle: {
      backgroundColor: colors.taiga,
      width: getWidth(20),
      height: getHeight(4),
    },
    dots: {
      width: getWidth(100),
    },
    carouselActionButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
};

export default styles;
