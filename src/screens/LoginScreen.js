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

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          {/* Welcome back login screen */}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "blue",
                flexDirection: "row",
                fontSize: 33,
                // marginLeft: -230,
                // marginTop: 140,
                fontWeight: "bold",
              }}
            >
              Welcome
            </Text>
            <Text
              style={{
                color: "green",
                flexDirection: "row",
                fontSize: 33,
                // marginLeft: -280,
                marginTop: 8,
                fontWeight: "bold",
              }}
            >
              Back!
            </Text>
            <Text
              style={{
                Color: "black",
                fontWeight: "bold",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              Login to continue
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.form}>
            {/* email input */}
            <View
              style={{
                width: "100%",
                height: 40,
                borderColor: "#fff",
                borderWidth: 1,
                marginBottom: 16,
                padding: 8,
                borderRadius: 15,
                backgroundColor: "#fff",
              }}
            >
              <TextInput placeholder="Please enter your email address" />
            </View>

            {/* Password input */}
            <View
              style={{
                width: "100%",
                height: 40,
                borderColor: "#fff",
                borderWidth: 1,
                marginBottom: 16,
                padding: 8,
                borderRadius: 15,
                backgroundColor: "#fff",
              }}
            >
              <TextInput placeholder="Please enter your password" />
            </View>

            {/* Login Button */}
            <View style={{ borderWidth: 2, borderRadius: 16 }}>
              <Button
                title="Log In"
                onPress={() => navigation.navigate("FacebookFeed")}
              />
            </View>

            {/* Sign up button */}
            <View>
              <Button
                title="Sign Up"
                onPress={() => navigation.navigate("Home")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 3,
  },

  footer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 14,
    marginTop: 50,
    width: "93%",
    height: 350,
    backgroundColor: "#ffe200",
  },

  form: {
    width: "60%",
  },
});
