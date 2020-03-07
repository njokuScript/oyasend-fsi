import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../components/FormInput";
import ErrorMessage from "../../components/ErrorMessage";

//form validation with yup
const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .label("Phone")
    .required()
    .min(11, "Phone number must be at least 11 numbers"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Password must be at least 6 characters")
});

class Login extends Component {
  state = {
    passwordVisibility: true,
    rightIcon: "ios-eye"
  };

  //forgot password route
  goToForgotPassword = () => this.props.navigation.navigate("ForgotPassword");

  //signup route
  goToSignup = () => this.props.navigation.navigate("Register");

  handlePasswordVisibility = () => {
    this.setState(prevState => ({
      rightIcon: prevState.rightIcon === "ios-eye" ? "ios-eye-off" : "ios-eye",
      passwordVisibility: !prevState.passwordVisibility
    }));
  };

  handleOnLogin = () => this.props.navigation.navigate("App");
  // handleOnLogin = async (values, actions) => {
  //   const { phone, password } = values;
  //   try {
  //     const response = await firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password);

  //     if (response.user) {
  //       this.props.navigation.navigate("App");
  //     }
  //   } catch (error) {
  //     actions.setFieldError("general", error.message);
  //   } finally {
  //     actions.setSubmitting(false);
  //   }
  // };

  render() {
    const { passwordVisibility, rightIcon } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.textStyle}>Welcome back</Text>
        </View>
        <View style={styles.imageStyle}>
          <Image source={require("../../assets/login-image.png")} />
        </View>
        <Formik
          initialValues={{ phoneNumber: "", password: "" }}
          onSubmit={() => {
            this.handleOnLogin();
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            touched,
            handleBlur,
            isSubmitting
          }) => (
            <Fragment>
              <FormInput
                name="phoneNumber"
                value={values.phoneNumber}
                onChangeText={handleChange("phoneNumber")}
                placeholder="Enter Phone Number"
                autoCapitalize="none"
                iconName="call"
                iconColor="#9C27B0"
                onBlur={handleBlur("phoneNumber")}
              />
              <ErrorMessage errorValue={touched.phone && errors.phone} />
              <FormInput
                name="password"
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="Enter password"
                secureTextEntry={passwordVisibility}
                iconName="lock-closed"
                iconColor="#9C27B0"
                onBlur={handleBlur("password")}
                rightIcon={
                  <TouchableOpacity onPress={this.handlePasswordVisibility}>
                    <Ionicons name={rightIcon} size={28} color="#9C27B0" />
                  </TouchableOpacity>
                }
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <TouchableOpacity
                onPress={this.goToForgotPassword}
                style={styles.buttonStyle2}
              >
                <Text style={styles.buttonStyle2Text}>Forgot Password?</Text>
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.buttonStyle}
                >
                  <Text style={styles.buttonText}> lOGIN</Text>
                </TouchableOpacity>
              </View>
              <ErrorMessage errorValue={errors.general} />
            </Fragment>
          )}
        </Formik>
        <TouchableOpacity onPress={this.goToSignup} style={styles.buttonStyle2}>
          <Text style={styles.buttonStyle2Text}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100
  },
  imageStyle: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  textStyle: {
    alignItems: "center",
    width: 342,
    height: 93,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 27,
    color: "#9C27B0",
    opacity: 1,
    left: 30
  },
  buttonStyle2Text: {
    fontWeight: "bold"
  },
  buttonStyle: {
    backgroundColor: "#9C27B0",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    borderRadius: 15,
    opacity: 1,
    width: 329,
    height: 58,
    left: 20
  },
  buttonStyle2: {
    color: "#9C27B0",
    alignItems: "flex-end",
    marginRight: 30
  },
  logoContainer: {
    marginBottom: 15,
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    top: 7,
    fontSize: 24,
    color: "#fffffF",
    opacity: 1
  },
  buttonContainer: {
    margin: 25
  }
});

export default Login;
