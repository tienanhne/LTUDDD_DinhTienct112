import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Props } from "../types/ParamList";

export default function WeekOne({ navigation }: Props) {
  const [inputValue, setInputValue] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [sport, setSport] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleClear = () => {
    setAge(0);
    setColor("");
    setFood("");
    setSport("");
  };

  const handleButtonPress = (type: string) => {
    const d = new Date();

    switch (type) {
      case "Tuổi":
        setAge(Number(d.getFullYear()) - Number(inputValue));
        break;
      case "Màu sắc":
        setColor(inputValue);
        break;
      case "Món ăn":
        setFood(inputValue);
        break;
      case "Thể thao":
        setSport(inputValue);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hello1}>Chương trình xử lý sự kiện</Text>
      </View>
      <TextInput
        style={styles.inputView}
        autoFocus={true}
        onChangeText={handleInputChange}
        placeholder="Nhập giá trị ở đây"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Tuổi")}
        >
          <Text style={styles.buttonText}>Tuổi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Màu sắc")}
        >
          <Text style={styles.buttonText}>Màu sắc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Món ăn")}
        >
          <Text style={styles.buttonText}>Món ăn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Thể thao")}
        >
          <Text style={styles.buttonText}>Thể thao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShow(false)}>
          <Text style={styles.buttonText}>Ẩn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
          <Text style={styles.buttonText}>Hiện</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wideButton}
          onPress={() => navigation.navigate("NewPage")}
        >
          <Text style={styles.buttonText}>Mở trang mới</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wideButton} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 15 }}>
        {show && (
          <>
            <Text style={styles.showText}>Tuổi của bạn: {age}</Text>
            <Text style={[styles.showText, { color: color || "black" }]}>
              Màu sắc của bạn: {color}
            </Text>
            <Text style={styles.showText}>Món ăn của bạn: {food}</Text>
            <Text style={styles.showText}>Môn thể thao của bạn: {sport}</Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  hello1: {
    color: "blue",
    fontSize: 20,
  },
  header: {
    backgroundColor: "pink",
    width: "100%",
    padding: 20,
  },
  showText: {
    fontSize: 30,
    marginTop: 10,
  },
  inputView: {
    fontSize: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "pink",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    backgroundColor: "#f8b400",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "48%",
    alignItems: "center",
  },
  wideButton: {
    backgroundColor: "#f8b400",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
