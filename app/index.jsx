import { Text, View, Alert, StyleSheet  } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Index() {

  const handlePress = () => {
    Alert.alert("Button Pressed!", "You pressed the custom button.");
  };

  return (
    <View>
      <Text style={styles.text}> HELLO WORLD EDIT LATER</Text>
      <CustomButton text='RGB' onPress={handlePress} />
      <CustomButton text='THERMO' onPress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 26,
        textAlign: 'center',
        marginTop:100,
        marginBottom:100,
  }
})
