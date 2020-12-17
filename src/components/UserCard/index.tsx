import React from "react";
import { View, Text, Image } from "react-native";
import getStyles from "./styles";

type UserCardType = {
  name: string;
};

const UserCard = ({ name }: UserCardType) => {
  let styles = getStyles();

  return (
    <View style={styles.user}>
      <Image
        style={styles.userPhoto}
        source={{
          uri:
            "https://images.generated.photos/jbdXy8dZIdi1Ka4-K0yrbqSCyUqKN4X2SuOx-7P34Po/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyOTYyNTYuanBn.jpg",
        }}
      />
      <Text style={styles.userName}>{name}</Text>
    </View>
  );
};

export default UserCard;
