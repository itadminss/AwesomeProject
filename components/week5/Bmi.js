import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [color, setColor] = useState("white");
  const [result, setResult] = useState("Normals");

  console.log("STATE : ", weight, height, bmi);
  const onPressButton = () => {
    console.log("Calculate button is pressed!!!");
    let output = weight / (((height / 100) * height) / 100);
    if (output < 18.5) {
      resText = "UNDERWEIGTH";
      resColor = "#191970";
    } else if (output >= 18.5 && output <= 24.9) {
      resText = "NORMAL";
      resColor = "#20B2AA";
    } else if (output >= 25 && output <= 29.9) {
      resText = "OVERWIGTH";
      resColor = "#E9967A";
    } else if (output >= 30 && output <= 34.9) {
      resText = "OBESE";
      resColor = "#FF4500";
    } else if (output >= 35) {
      resText = "EXTREMLY OBESE";
      resColor = "#FF0000";
    }
    setResult(resText);
    setColor(resColor);
    console.log("Old Bmi :" + bmi); //Print ค่าเก่าออกมา
    console.log("New Bmi : " + output); //Print ค่าใหม่ออกมา

    setBmi(output.toFixed(2));
  };
  return (
    <View style={{}}>
      {/* แถวที่ 1 */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Weight (kg.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          placeholder="Input your weight"
          value={weight}
          onChangeText={(newWeight) => setWeight(newWeight)}
        />
      </View>
      {/* แถวที่ 2 */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Height (cm.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          placeholder="Input your height"
          value={height}
          onChangeText={(newHeight) => setHeight(newHeight)}
        />
      </View>
      {/* แถวที่ 3 */}
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={{ color: "red" }}>{bmi}</Text>
        </View>
        <View
          style={{
            backgroundColor: color,
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "white" }}>{result}</Text>
        </View>
      </View>
      {/* แถวที่ 4 */}
      {/* <Button title="Calculate" onPress={onPressButton} /> */}
      <TouchableOpacity onPress={onPressButton}>
        <View
          style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}
        >
          <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>
            Calculate
          </Text>
        </View>
      </TouchableOpacity>

  
    </View>
  );
}
