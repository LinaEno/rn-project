import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: "",
  password: "",
  name: "",
};

export default function App() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    // dispatch(authSignUpUser(state));
    // setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleSubmit}>
      <View style={styles.container}>
        <Text style={styles.title}>Кто тут мамка?</Text>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.label}>Enter your name</Text>
        <TextInput
          style={styles.input}
          onFocus={() => setIsShowKeyboard(true)}
          value={state.name}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, name: value }))
          }
        />
        <Text style={styles.label}>Enter your email</Text>
        <TextInput
          style={styles.input}
          onFocus={() => setIsShowKeyboard(true)}
          value={state.email}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
        />
        <Text style={styles.label}>Enter your password</Text>
        <TextInput
          style={styles.input}
          onFocus={() => setIsShowKeyboard(true)}
          value={state.password}
          secureTextEntry={true}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, password: value }))
          }
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={handleSubmit}
        >
          <Text style={styles.btnTitle}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate("Login")}
          style={{
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          <Text style={styles.title}>
            Already have an account?
            <Text style={{ fontSize: 20, color: "#ff6347" }}>Sign In</Text>
          </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
  },
  label: {
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 6,
    color: "#f0f8ff",
  },
  btn: {
    borderRadius: 6,
    borderWidth: 1,
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "#4169e1",
    borderColor: "transparent",
  },
  btnTitle: {
    fontSize: 18,
  },
});
