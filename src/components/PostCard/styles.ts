import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    postCard: {
      backgroundColor: "#fff",
      marginBottom: getHeight(15),
      borderRadius: getHeight(15),
      padding: getWidth(15),
    },
    postCardDraft: {
      backgroundColor: "transparent",
      marginBottom: getHeight(15),
      borderRadius: getHeight(15),
      padding: getWidth(15),
      borderColor: colors.orange,
      borderWidth: 1,
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
      fontSize: 14,
      color: colors.taiga,
    },
    postBody: {
      fontFamily: "SF_Regular",
      fontSize: getWidth(14),
      lineHeight: getHeight(22),
    },
    read: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: getHeight(5),
    },
    readMoreText: {
      fontFamily: "SF_Regular",
      fontSize: getWidth(14),
      color: colors.orange,
    },
    duration: {
      color: "#aaa",
      fontFamily: "SF_Regular",
      fontSize: getWidth(14),
      marginLeft: getWidth(10),
    },

    postCardFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: getHeight(15),
    },
    postCardFooterLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    postCardFooterLeftChild: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: getWidth(12),
    },
    postCardFooterLeftChildText: {
      color: colors.taiga,
      marginLeft: 5,
      fontFamily: "SF_Medium",
    },
    postCardFooterLeftChildEmoji: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: getWidth(8),
    },

    postCardFooterRight: {
      color: "#bbb",
    },
  });
};

export default styles;
