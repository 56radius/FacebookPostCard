import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Button,
} from "react-native";

import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* texts to create welcome back and login to continue, This is the first section  */}
        <Text
          style={{
            color: "#ffe200",
            flexDirection: "row",
            fontSize: 33,
            marginLeft: -230,
            marginTop: 140,
            fontWeight: "bold",
          }}
        >
          Sign
        </Text>
        <Text
          style={{
            color: "#ffe200",
            flexDirection: "row",
            fontSize: 33,
            marginLeft: -280,
            marginTop: 8,
            fontWeight: "bold",
          }}
        >
          Up
        </Text>

        <View style={styles.Footer}>
          <View style={styles.form}>
            {/* Email input */}
            <View style={styles.input}>
              <TextInput placeholder="Please enter email address" />
            </View>

            {/* Password input */}
            <View style={styles.input}>
              <TextInput placeholder="Please enter your password" />
            </View>

            <View style={{}}>
              <Button title="Submit" />
            </View>

            <View>
              <Button
                title="Sign In"
                onPress={() => navigation.navigate("LoginScreen")}
              />
            </View>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
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

  Footer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 14,
    marginTop: 90,
    width: "100%",
    height: 350,
    backgroundColor: "#ffe200",
  },

  addBtn: {
    backgroundColor: "#fff",
    height: 40,
    paddingHorizontal: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
  },

  input: {
    width: "100%",
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 15,
    backgroundColor: "#fff",
  },

  arrow: {
    marginTop: 5,
    color: "#fff",
    marginLeft: 10,
  },

  btn: {
    marginTop: 7,
    marginLeft: -8,
    fontSize: 20,
    color: "#ffe200",
  },

  form: {
    width: "70%",
  },
});
