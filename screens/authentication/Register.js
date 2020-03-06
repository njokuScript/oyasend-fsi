import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { HideWithKeyboard } from "react-native-hide-with-keyboard";
import FormInput from "../../components/FormInput";
import ErrorMessage from "../../components/ErrorMessage";

//form valdation with yup
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ValidationSchema = Yup.object().shape({
  Phone: Yup.string().matches(phoneRegExp, "Phone number is not valid")
});
export class Register extends Component {
  handlePasswordVisibility = () => {
    this.setState(prevState => ({
      rightIcon: prevState.rightIcon === "ios-eye" ? "ios-eye-off" : "ios-eye",
      passwordVisibility: !prevState.passwordVisibility
    }));
  };

  render() {
    const { passwordVisibility, rightIcon } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}> Oya Send </Text>
        </View>
        <View>
          <View>
            <Text>Welcome Buddy,</Text>
          </View>
          <View>
            <Text>
              In a few steps, you can Transfer money with our new Facial
              Recognition System
            </Text>
          </View>
        </View>
        <Formik
          initialValues={{ Phone: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={() => { }}
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
                  name="Phone"
                  value={values.Phone}
                  onChangeText={handleChange("Phone")}
                  placeholder="Enter Phone Number"
                  iconName="ios-phone"
                  iconColor="#6C63FF"
                  onBlur={handleBlur("Phone")}
                />
                <ErrorMessage errorValue={touched.Phone && errors.Phone} />
                <FormInput
                  name="password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  placeholder="Enter password"
                  secureTextEntry={passwordVisibility}
                  iconName="ios-lock"
                  iconColor="#6C63FF"
                  onBlur={handleBlur("password")}
                  rightIcon={
                    <TouchableOpacity onPress={this.handlePasswordVisibility}>
                      <Ionicons name={rightIcon} size={28} color="#6C63FF" />
                    </TouchableOpacity>
                  }
                />
                <ErrorMessage errorValue={touched.password && errors.password} />
                <View>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text>Reigster</Text>
                  </TouchableOpacity>
                </View>
                <ErrorMessage errorValue={errors.general} />
              </Fragment>
            )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Text: {
    fontSize: 28,
    textAlign: "center",
    marginTop: "0",
    width: "200"
  }
});
export default Register;
