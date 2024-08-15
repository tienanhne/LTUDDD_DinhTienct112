import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Props } from "../types/ParamList";

export default function NewPage({navigation}: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity style={styles.wideButton} onPress={() => navigation.navigate("WeekOne")}>
        <Text>Quay về trang trước</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wideButton: {
    backgroundColor: "#f8b400",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
});
