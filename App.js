import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <ScrollView>
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

        {/* Footer */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 14,
            marginTop: 60,
            height: 350,
            backgroundColor: "#ffe200",
          }}
        >
          {/* form styling */}
          <View style={{ width: "60%" }}>
            {/* Email input */}
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
              <TextInput
                style={{
                  width: "100%",
                }}
                placeholder="Please enter Email  address"
              />
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

            <View>
              <TouchableOpacity onPress={() => addNewItem()}>
                <Text> Signin </Text>
                <View
                  style={{
                    height: 40,
                    borderColor: "#ffe200",
                    borderWidth: 1,
                    borderRadius: 15,
                    width: "25%",
                    fontWeight: "bold",
                    backgroundColor: "#ffe200",
                  }}
                >
                  <AntDesign name="arrowright" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  marginLeft: 45,
                  color: "#fff",
                  fontSize: 27,
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </Text>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
