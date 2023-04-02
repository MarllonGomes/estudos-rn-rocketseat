import { Image, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../../assets/logo.png")} 
        style={styles.logo} 
        resizeMode="contain"
      />
    </View>
  );
}
