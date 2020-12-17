import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { PrimaryButton } from "../../components/Buttons";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";

const Search = ({ navigation }) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[globalStyles.scrollView]}>{/* <Text>Search</Text> */}</View>
    </SafeAreaView>
  );
};

export default Search;
