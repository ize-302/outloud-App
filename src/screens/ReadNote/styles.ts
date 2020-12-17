import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../utils";

const styles = () => {
  return StyleSheet.create({
    topNav: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: getWidth(20),
      paddingVertical: getHeight(15),
      height: getHeight(60),
    },

    emojisScroll: {
      // height: getHeight(60),
      borderBottomColor: "#ddd",
      borderBottomWidth: 1,
      paddingBottom: getHeight(10),
    },

    bottomActions: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: getWidth(20),
      paddingTop: getHeight(15),
      height: getHeight(50),
    },
    content: {
      backgroundColor: "white",
    },
    topDetail: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: getHeight(10),
    },
    tags: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: getHeight(13),
    },
    tag: {
      borderRadius: getHeight(10),
      backgroundColor: "#eee",
      marginRight: getWidth(10),
      paddingVertical: getHeight(3),
      paddingHorizontal: getWidth(7),
    },
    tagText: {
      fontSize: getWidth(14),
      color: colors.taiga,
    },
    contentBody: {
      fontFamily: "SF_Regular",
      fontSize: getWidth(16),
      lineHeight: getHeight(22),
      paddingBottom: getHeight(20),
    },
    reactions: {
      borderTopColor: "#eee",
      borderTopWidth: 1,
      paddingTop: getHeight(10),
    },
    reactionsContent: {
      paddingVertical: getHeight(10),
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: getHeight(10),
    },

    likes: {
      flexDirection: "row",
      alignItems: "center",
    },
    likesCount: {
      marginLeft: getWidth(3),
      color: colors.taiga,
      fontSize: getHeight(14),
    },

    emojis: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: getWidth(15),
    },
    emoji: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: getWidth(5),
      backgroundColor: "#eee",
      borderRadius: getHeight(10),
      paddingHorizontal: getWidth(7),
      paddingVertical: getHeight(4),
    },
    emojiCount: {
      color: "#aaa",
      marginLeft: getWidth(3),
    },

    comments: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      marginLeft: getWidth(15),
    },
    comment: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: getWidth(5),
      backgroundColor: "#eee",
      borderRadius: getHeight(10),
      paddingHorizontal: getWidth(7),
      paddingVertical: getHeight(4),
      marginBottom: getHeight(7),
    },
    commentCount: {
      color: "#888",
      marginLeft: getWidth(5),
    },
  });
};

export default styles;
