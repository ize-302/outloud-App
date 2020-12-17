import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "../../components/Icon";
import UserCard from "../../components/UserCard";
import { colors } from "../../utils";
import getGlobalStyles from "../../utils/globalStyles";
import getStyles from "./styles";
import axios from "axios";

const ReadNote = ({ navigation }) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [emojis, setemojis] = useState([]);
  const [showEmojis, setshowEmojis] = useState(false);
  const [showComments, setshowComments] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://emoji-api.com/emojis?access_key=54af303a6c8bbe739d82c76233af6a182dcb42eb"
      )
      .then((response) => {
        setemojis(response.data);
      });
  }, []);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[globalStyles.scrollView]}>
        <View style={[globalStyles.container, styles.topNav]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="back" color={colors.taiga} />
          </TouchableOpacity>
          <Icon name="bookmark" color={colors.orange} />
        </View>
        <ScrollView style={[styles.content]}>
          <View style={[globalStyles.container, styles.topDetail]}>
            <UserCard name="Ize" />
            <Text>Yesterday, 3:25 pm</Text>
          </View>
          <View style={[styles.tags, globalStyles.container]}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Depression</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Domestic Violence</Text>
            </View>
          </View>
          <Text style={[styles.contentBody, globalStyles.container]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            facilisis magna etiam tempor orci eu lobortis elementum nibh. Varius
            vel pharetra vel turpis nunc eget lorem dolor sed. Et molestie ac
            feugiat sed. Consectetur adipiscing elit pellentesque habitant
            morbi. Aliquet nec ullamcorper sit amet risus. Facilisis volutpat
            est velit egestas dui. Condimentum id venenatis a condimentum vitae
            sapien pellentesque habitant. Imperdiet sed euismod nisi porta.
            Viverra maecenas accumsan lacus vel facilisis volutpat est velit
            egestas. Quam adipiscing vitae proin sagittis. Duis tristique
            sollicitudin nibh sit amet commodo nulla facilisi. Euismod quis
            viverra nibh cras pulvinar mattis. Pellentesque habitant morbi
            tristique senectus. Aliquam nulla facilisi cras fermentum odio eu
            feugiat pretium nibh. Tincidunt arcu non sodales neque sodales ut
            etiam sit amet. Viverra justo nec ultrices dui sapien. Donec enim
            diam vulputate ut pharetra sit. Luctus venenatis lectus magna
            fringilla urna porttitor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Amet facilisis magna etiam tempor orci eu
            lobortis elementum nibh. Varius vel pharetra vel turpis nunc eget
            lorem dolor sed. Et molestie ac feugiat sed. Consectetur adipiscing
            elit pellentesque habitant morbi. Aliquet nec ullamcorper sit amet
            risus. Facilisis volutpat est velit egestas dui. Condimentum id
            venenatis a condimentum vitae sapien pellentesque habitant.
            Imperdiet sed euismod nisi porta. Viverra maecenas accumsan lacus
            vel facilisis volutpat est velit egestas. Quam adipiscing vitae
            proin sagittis. Duis tristique sollicitudin nibh sit amet commodo
            nulla facilisi. Euismod quis viverra nibh cras pulvinar mattis.
            Pellentesque habitant morbi tristique senectus. Aliquam nulla
            facilisi cras fermentum odio eu feugiat pretium nibh. Tincidunt arcu
            non sodales neque sodales ut etiam sit amet. Viverra justo nec
            ultrices dui sapien. Donec enim diam vulputate ut pharetra sit.
            Luctus venenatis lectus magna fringilla urna porttitor.
          </Text>
          <View style={styles.reactions}>
            <View style={[globalStyles.container, styles.reactionsContent]}>
              <View style={styles.row}>
                <View style={styles.likes}>
                  <Icon name="like_line_sm" color={colors.taiga} />
                  <Text style={styles.likesCount}>2,1k</Text>
                </View>
                <View style={styles.emojis}>
                  <View style={styles.emoji}>
                    <Text>🤜</Text>
                    <Text style={styles.emojiCount}>10</Text>
                  </View>
                  <View style={styles.emoji}>
                    <Text>🤜</Text>
                    <Text style={styles.emojiCount}>10</Text>
                  </View>
                </View>
              </View>
              <View style={styles.row}>
                <Icon name="comment_line_sm" color={colors.taiga} />
                <View style={styles.comments}>
                  <View style={styles.comment}>
                    <Text style={styles.commentText}>Stay Strong</Text>
                    <Text style={styles.commentCount}>3</Text>
                  </View>
                  <View style={styles.comment}>
                    <Text style={styles.commentText}>We love you</Text>
                    <Text style={styles.commentCount}>5</Text>
                  </View>
                  <View style={styles.comment}>
                    <Text style={styles.commentText}>We pray for you</Text>
                    <Text style={styles.commentCount}>2</Text>
                  </View>
                  <View style={styles.comment}>
                    <Text style={styles.commentText}>Try your best</Text>
                    <Text style={styles.commentCount}>10</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View>
          {showEmojis && (
            <ScrollView
              style={styles.emojisScroll}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              horizontal={true}
            >
              {emojis.slice(0, 1000).map((emoji, index) => {
                return (
                  <Text
                    style={{
                      fontSize: 24,
                      marginHorizontal: 10,
                      paddingTop: 5,
                    }}
                    key={index}
                  >
                    {emoji.character}
                  </Text>
                );
              })}
            </ScrollView>
          )}
        </View>
        <View style={[globalStyles.container, styles.bottomActions]}>
          <TouchableOpacity onPress={() => setshowComments(!showComments)}>
            <Icon name="comment_line" color={colors.orange} />
          </TouchableOpacity>
          <Icon name="like_line" color={colors.orange} />
          <TouchableOpacity onPress={() => setshowEmojis(!showEmojis)}>
            <Icon name="smiley_line" color={colors.orange} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReadNote;
