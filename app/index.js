import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native"; //React Native components

export default function App() {
  const [color, setColor] = useState(""); // stores the input value
  //color is a state variable initialized as an empty string "".
  const [bgColor, setBgColor] = useState("white"); // stores the background color
//bgColor is a state variable initialized as "white".
  
  const changeBackground = () => {  //runs when the button is pressed.
    const trimmedColor = color.trim(); // remove spaces from input and stores it in trimmedColor.

    if (trimmedColor === "") {
      setBgColor("white"); // empty then white
    } else {
      setBgColor(trimmedColor.toLowerCase()); // convert the color string to lowercase so red/Red any would work and update bgcolor
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>🎨 Dynamic Background App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter color (e.g., Red, blue, #00ff00)"
        value={color}
        onChangeText={setColor} //updates the color state 
      />

      <Button title="Change Background" onPress={changeBackground} />
    </View>
  );
}
//stylesheet object
const styles = StyleSheet.create({
  container: {
    flex: 1, // takes full screen
    alignItems: "center", // center horizontally
    justifyContent: "center", // center vertically
    padding: 20, //adds spacing
  },
  //Styles for the title text
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  //Styles for the input field
  input: {
    height: 50,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
});
