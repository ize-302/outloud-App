import React from "react";
import Switches from "react-native-switches";
import { colors } from "../utils/index";

type SwitchComponent = {
  value: boolean;
  triggerAction: () => void;
};

const SwitchComponent = ({ value, triggerAction }: SwitchComponent) => {
  return (
    <Switches
      shape={"pill"}
      onChange={triggerAction}
      value={value}
      showText={false}
      buttonSize={20}
      sliderHeight={24}
      sliderWidth={45}
      colorSwitchOff={colors.taiga}
      colorSwitchOn={colors.orange}
      borderColor="transparent"
    />
  );
};

export default SwitchComponent;
