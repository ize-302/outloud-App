import * as React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { View, Text } from "react-native";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";
import { getWidth } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NakedButton, PrimaryButton } from "../../components/Buttons";

const Carousels = ({ navigation }: ScreenProp) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const ref = React.useRef();

  const [state, setState] = React.useState({
    activeItem: 0,
  });

  const data = [
    {
      heading: "Support 🙏",
      text:
        "Support is something that helps you survice and not give up. Community inside the OutLoud can help can help to reduce the feelings of loneliness and help ypu to feel understood.",
    },
    {
      heading: "Psychology 🧠",
      text:
        "From a psychological point of view, writing out your problems and crisis situations helps you manage with them at least emotionally.",
    },
    {
      heading: "Anonymous 🙅‍♀️",
      text:
        "To keep incognito or openly talk about your problem - it's only up to you. Your anonymity is guaranteed.",
    },
  ];

  const onPressNext = () => {
    // @ts-ignore
    if (state.activeItem < 2) return ref?.current?.snapToNext();
    if (state.activeItem === 2) {
      navigation.push("App");
    }
  };

  const onPressBack = () => {
    // @ts-ignore
    if (state.activeItem > 0) return ref?.current?.snapToPrev();
    if (state.activeItem === 0) {
      navigation.goBack("AppIntro");
    }
  };

  return (
    <View
      style={[globalStyles.scrollView, globalStyles.container, styles.content]}
    >
      <View style={styles.upperContent}></View>
      <View style={styles.lowerContent}>
        <View>
          <Carousel
            data={data}
            sliderWidth={getWidth(300)}
            itemWidth={getWidth(300)}
            ref={ref}
            onSnapToItem={(index) => setState({ ...state, activeItem: index })}
            renderItem={({ item, index }) => (
              <View key={index}>
                <Text style={styles.lowerContentHeading}>{item.heading}</Text>
                <Text style={styles.lowerContentBody}>{item.text}</Text>
              </View>
            )}
          />

          <Pagination
            dotsLength={data.length}
            activeDotIndex={state.activeItem}
            dotStyle={styles.activedotStyle}
            inactiveDotStyle={styles.dotStyle}
            containerStyle={styles.dots}
          />
        </View>

        <View style={styles.carouselActionButtons}>
          <NakedButton label="Back" triggerAction={onPressBack} />
          <View style={{ width: getWidth(100) }}>
            <PrimaryButton triggerAction={onPressNext} label="Next" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Carousels;
