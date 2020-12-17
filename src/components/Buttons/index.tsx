import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { getWidth } from "../../utils";
import getStyles from "./styles";
import Icon from "../../components/Icon";

type PrimaryButtonProps = {
  label: string;
  triggerAction: () => void;
};

export const PrimaryButton = ({ label, triggerAction }: PrimaryButtonProps) => {
  const styles = getStyles();
  return (
    <TouchableOpacity onPress={triggerAction} style={[styles.primaryButton]}>
      <Text style={styles.primaryButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

type NakedButtonProps = {
  label: string;
  triggerAction: () => void;
};

export const NakedButton = ({ label, triggerAction }: NakedButtonProps) => {
  const styles = getStyles();
  return (
    <TouchableOpacity onPress={triggerAction}>
      <Text style={styles.nakedButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

type SmallButtonProps = {
  label: string;
  triggerAction: () => void;
  icon: string;
};

export const SmallButton = ({
  label,
  triggerAction,
  icon,
}: SmallButtonProps) => {
  const styles = getStyles();
  return (
    <TouchableOpacity onPress={triggerAction} style={styles.smallButton}>
      {icon && <Icon name={icon} color="white" />}
      <Text style={styles.smallButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};
