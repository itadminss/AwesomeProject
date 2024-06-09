import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Welcome from "./screens/Welcome";
import Ex01 from "./screens/week2/Ex01";
import Ex02 from "./screens/week2/Ex02";
import Ex03 from "./screens/week2/Ex03";
import Ex04 from "./screens/week2/Ex04";
import Ex05 from "./screens/week2/Ex05";
import Ex06 from "./screens/week2/Ex06";
import Ex07 from "./screens/week2/Ex07";
import Ex08 from "./screens/week2/Ex08";
import Ex10 from "./screens/week2/Ex10";
import Ex11 from "./screens/week2/Ex11";
import Ex12 from "./screens/week2/Ex12";
import Ex09 from "./screens/week2/Ex09";
import { FontAwesome } from "@expo/vector-icons";
import Greeting from "./components/Greeting";
import Travel from "./screens/week3/Travel";
import Resort from "./screens/week3/Resort";
import Heartbeat from "./components/week5/Heartbeat";
import Health from "./screens/week5/Health";
import Home from "./components/week6/Home";
import FlatListExample from "./screens/week6/FlatListExample";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./navigations/HomeStack";
import BottomTab from "./navigations/BottomTab";
import RootStack from "./navigations/RootStack";
import ChartKitScreen from "./screens/week5/ChartKitScreen";


import { AuthContext, AuthContextProvider } from "./hooks/AuthContextProvider";

export default function App() {
  return (
    // <Welcome/>
    // <Ex09 />
    // <View style={{ padding: 20 }}>
    //   <TextInput
    //     keyboardType="email-address"
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //     maxLength={30}
    //     multiline={false}
    //     placeholder="Please enter your email"
    //     returnKeyType="next"
    //     onChangeText={(text) => {}}
    //     defaultValue="Default text"
    //   />

    //   <Button
    //     title="Press me"
    //     onPress={() => Alert.alert("Simple Button pressed")}
    //     color="orange"
    //   />

    //   <Text> Hello World </Text>

    //   <Image
    //     // source={require("../../assets/week3/tiny_logo.png")}
    //     style={{ width: 50, height: 50 }}
    //   />
    //   <Image
    //     source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //     style={{ width: 50, height: 50 }}
    //   />
    //   <Image
    //     source={{
    //       uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
    //     }}
    //     style={{ width: 50, height: 50 }}
    //   />

    //   <View style={{ flex: 1, flexDirection: "column" }}>
    //     {/* Fixed Size */}
    //     <View
    //       style={{
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         marginTop: 50,
    //       }}
    //     >
    //       <Image
    //         style={{ width: 150, height: 100 }}
    //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       />
    //       <Image
    //         style={{ width: 150, height: 150 }}
    //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       />
    //       <Image
    //         style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
    //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       />
    //     </View>
    //   </View>

    //   <View style={{ flex: 1, flexDirection: "column" }}>
    //     <View style={{ flexDirection: "row", marginTop: 20 }}>
    //       <Image
    //         style={{ flex: 1, resizeMode: "cover", aspectRatio: 3 / 2 }}
    //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       />
    //     </View>

    //     <View style={{ flexDirection: "row", marginTop: 20 }}>
    //       <Image
    //         style={{ flex: 1, resizeMode: "cover", aspectRatio: 16 / 4 }}
    //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       />
    //     </View>

    //     <View
    //       style={{
    //         flexDirection: "row",
    //         marginTop: 20,
    //         backgroundColor: "gray",
    //       }}
    //     >
    //       <Image
    //         style={{ flex: 1, resizeMode: "contain", aspectRatio: 16 / 4 }}
    //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       />
    //     </View>

    //     <FontAwesome name="heart" size={32} color="orange" />
    //   </View>

    //   <Greeting name="Rexxar" lastname="exar" />
    //   <Greeting name="Jaina" lastname="exar" />
    //   <Greeting name="Valeera" lastname="exar" />
    // </View>
        // <Ex2 />
        // <Resort />
        // <Health />
        // <Home />
        // <FlatListExample/>

        <AuthContextProvider>
          <NavigationContainer>
          {/* <HomeStack />
          <BottomTab /> */}
            <RootStack />
        </NavigationContainer>
       </AuthContextProvider>

    // <ChartKitScreen />
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
