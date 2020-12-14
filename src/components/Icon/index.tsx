import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { getMarkup } from "./markup";

type Props = {
  name: string;
  color: string;
};

const Icon = ({ name, color }: Props) => {
  const SvgImage = () => (
    <SvgXml xml={getMarkup(color)[name]} /*width="301px"*/ />
  );
  return (
    <View pointerEvents="none">
      <SvgImage />
    </View>
  );
};

Icon.defaultProps = {
  name: "",
  color: "",
};

export default Icon;
