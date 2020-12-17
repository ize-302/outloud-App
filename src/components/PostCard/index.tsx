import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../utils";
import getGlobalStyles from "../../utils/globalStyles";
import Icon from "../Icon";
import UserCard from "../UserCard";
import getStyles from "./styles";

export const PostCardPublished = ({ triggerAction }) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <TouchableOpacity onPress={triggerAction} style={styles.postCard}>
      <UserCard name="Adavize Ize" />
      <View style={styles.tags}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Depression</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Domestic Violence</Text>
        </View>
      </View>
      <Text style={styles.postBody}>
        {truncateString(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          200
        )}
      </Text>
      <View style={styles.read}>
        <Text style={styles.readMoreText}>Read more</Text>
        <Text style={styles.duration}>6 min read</Text>
      </View>
      <View style={styles.postCardFooter}>
        <View style={styles.postCardFooterLeft}>
          <View style={styles.postCardFooterLeftChild}>
            <Icon name="heart_line" color={colors.taiga} />
            <Text style={styles.postCardFooterLeftChildText}>2.1k</Text>
          </View>
          <View style={styles.postCardFooterLeftChild}>
            <Icon name="chatBubble_line" color={colors.taiga} />
            <Text style={styles.postCardFooterLeftChildText}>200</Text>
          </View>
          <Text style={styles.postCardFooterLeftChildEmoji}>👀</Text>
          <Text style={styles.postCardFooterLeftChildEmoji}>💔</Text>
          <Text style={styles.postCardFooterLeftChildEmoji}>✌️</Text>
        </View>
        <Text style={styles.postCardFooterRight}>Oct 28, 3:24 pm</Text>
      </View>
    </TouchableOpacity>
  );
};

export const PostCardDraft = ({ triggerAction }) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <TouchableOpacity onPress={triggerAction} style={styles.postCardDraft}>
      <Text>DRAFT</Text>
      <View style={styles.tags}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Depression</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Domestic Violence</Text>
        </View>
      </View>
      <Text style={styles.postBody}>
        {truncateString(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          200
        )}
      </Text>
      <View style={styles.read}>
        <Text style={styles.readMoreText}>Continue</Text>
      </View>
    </TouchableOpacity>
  );
};
