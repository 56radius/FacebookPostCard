import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Video } from "expo-av";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ScrollView>
      {/* First container to post an image */}
      <View style={styles.container}>
        {/* Header  */}
        <View style={styles.Header}>
          {/* Image and username */}
          <View style={styles.Profile}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
              source={require("./assets/joker.png")}
            />
            <Text style={styles.Text}> DC Comics . Follow </Text>
          </View>

          {/* The three dots on facebbook */}
          <MaterialCommunityIcons
            style={styles.dot}
            name="dots-horizontal"
            size={24}
            color="black"
          />
        </View>

        {/* Image Post */}
        <Text style={styles.ProfileText}>
          Check out the new DC Comics and be sure to read every issue out
          here...see more
        </Text>
        <Image
          style={{
            width: "100%",
            height: 300,
            borderRadius: 8,
          }}
          source={require("./assets/comics.jpeg")}
        />

        <View style={styles.Footer}>
          {/* names and likes of reactions */}
          <View style={styles.ReactionIcons}>
            <AntDesign name="like1" size={24} color="blue" />
            <Ionicons name="heart-circle" size={24} color="red" />
            <FontAwesome5 name="laugh-squint" size={24} color="#8B8000" />

            <Text style={styles.UnderText}> 456,000 and others </Text>
          </View>

          {/* space for thumbs up, comments and share reaction */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignSelf: "center",
              marginLeft: -200,
              marginTop: 30,
            }}
          >
            {/* styling the thumbs up icon */}
            <View
              style={{
                width: "25%",
                height: 50,
                padding: 10,
                fontSize: 15,
                borderColor: "black",
                borderRadius: 18,
                backgroundColor: "#ccc",
              }}
            >
              <AntDesign
                style={{ marginLeft: 9 }}
                name="like2"
                size={24}
                color="black"
              />
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 35,
                  marginTop: -18,
                }}
              >
                2k
              </Text>
            </View>

            {/* For the comment section */}
            <View
              style={{
                width: "25%",
                height: 50,
                padding: 10,
                fontSize: 15,
                borderColor: "black",
                borderRadius: 18,
                backgroundColor: "#ccc",
              }}
            >
              <MaterialCommunityIcons
                style={{ marginLeft: 9 }}
                name="comment-outline"
                size={24}
                color="black"
              />
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 36,
                  marginTop: -20,
                }}
              >
                20k
              </Text>
            </View>

            {/* For the share icon section */}
            <View
              style={{
                width: "25%",
                height: 50,
                padding: 10,
                fontSize: 15,
                borderColor: "black",
                borderRadius: 18,
                backgroundColor: "#ccc",
              }}
            >
              <MaterialCommunityIcons name="share" size={24} color="black" />
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 30,
                  marginTop: -18,
                }}
              >
                40k
              </Text>
            </View>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>

      {/* Second container to put the video in the second post */}
      <View style={styles.container}>
        {/* Header  */}
        <View style={styles.Header}>
          {/* Image and username */}
          <View style={styles.Profile}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
              source={require("./assets/yabaright.png")}
            />
            <Text style={styles.Text}> YabaRightOnline . Follow </Text>
          </View>

          {/* The three dots on facebbook */}
          <MaterialCommunityIcons
            style={styles.dot}
            name="dots-horizontal"
            size={24}
            color="black"
          />
        </View>

        {/* Video Post */}
        <Text style={styles.ProfileText}>
          I am the new handler of this page check out the new video i posted to
          serve as my debut on this page...see more
        </Text>

        {}
        <Video
          style={{
            width: 300,
            height: 200,
          }}
          shouldPlay
          isLooping
          source={require("./assets/video.mp4")}
        />

        <View style={styles.Footer}>
          {/* names and likes of reactions */}
          <View style={styles.ReactionIcons}>
            <AntDesign name="like1" size={24} color="blue" />
            <Ionicons name="heart-circle" size={24} color="red" />
            <FontAwesome5 name="laugh-squint" size={24} color="#8B8000" />

            <Text style={styles.UnderText}> 456,000 and others </Text>
          </View>

          {/* space for thumbs up, comments and share reaction */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignSelf: "center",
              marginLeft: -200,
              marginTop: 30,
            }}
          >
            {/* styling the thumbs up icon */}
            <View
              style={{
                width: "25%",
                height: 50,
                padding: 10,
                fontSize: 15,
                borderColor: "black",
                borderRadius: 18,
                backgroundColor: "#ccc",
              }}
            >
              <AntDesign
                style={{ marginLeft: 9 }}
                name="like2"
                size={24}
                color="black"
              />
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 35,
                  marginTop: -18,
                }}
              >
                2k
              </Text>
            </View>

            {/* For the comment section */}
            <View
              style={{
                width: "25%",
                height: 50,
                padding: 10,
                fontSize: 15,
                borderColor: "black",
                borderRadius: 18,
                backgroundColor: "#ccc",
              }}
            >
              <MaterialCommunityIcons
                style={{ marginLeft: 9 }}
                name="comment-outline"
                size={24}
                color="black"
              />
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 36,
                  marginTop: -20,
                }}
              >
                20k
              </Text>
            </View>

            {/* For the share icon section */}
            <View
              style={{
                width: "25%",
                height: 50,
                padding: 10,
                fontSize: 15,
                borderColor: "black",
                borderRadius: 18,
                backgroundColor: "#ccc",
              }}
            >
              <MaterialCommunityIcons name="share" size={24} color="black" />
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 30,
                  marginTop: -18,
                }}
              >
                40k
              </Text>
            </View>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>

      {/* Third container to just put a normal image*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 14,
  },

  Header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  Profile: {
    flexDirection: "row",
  },

  Text: {
    margin: 7,
  },

  dot: {
    marginTop: 10,
  },

  ProfileText: {
    margin: 20,
    marginTop: -10,
  },

  Footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  ReactionIcons: {
    flexDirection: "row",
    marginTop: -10,
    justifyContent: "space-between",
  },

  UnderText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    fontSize: 11,
  },
});
