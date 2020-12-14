import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    header: {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
    },
    topHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: getHeight(28),
      paddingHorizontal: getWidth(20),
      marginTop: 10,
    },
    topHeaderTitle: {
      fontFamily: "Recoleta",
      fontSize: getHeight(24),
    },
    filterIcon: {
      width: "20%",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    lowerHeaderTitle: {
      fontFamily: "Recoleta",
      fontSize: getHeight(34),
      paddingHorizontal: getWidth(20),
    },
    tab: {
      paddingVertical: getHeight(18),
    },
    tabOption: {
      paddingHorizontal: getWidth(10),
      paddingVertical: getHeight(6),
      borderRadius: getHeight(10),
    },
    tabOptionLabel: {
      fontFamily: "SF_Medium",
    },
  });
};

export default styles;
