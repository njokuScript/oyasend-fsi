import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import UploadScreen from "./UploadScreen";
import * as Yup from "yup";
import FormInput from "../../components/FormInput";
import ErrorMessage from "../../components/ErrorMessage";

//form validation with yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label("Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  number: Yup.number()
    .label("bvn")
    .required()
    .positive()
    .integer()
    .min(10, "BVN must be at least 10 numbers")
});

class BvnScreen extends Component {
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
  onRegister = () => this.props.navigation.navigate("UploadScreen");
  handleOnRegister = () => this.props.navigation.navigate("UploadScreen");
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.textStyle}>BVN</Text>
        </View>
        <Formik
          initialValues={{ bvn: "", name: "" }}
          onSubmit={() => {
            this.handleOnRegister();
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
                name="bvn"
                value={values.bvn}
                onChangeText={handleChange("bvn")}
                placeholder="Enter BVN"
                autoCapitalize="none"
                iconName="ios-call"
                iconColor="#9C27B0"
                onBlur={handleBlur("bvn")}
              />
              <ErrorMessage errorValue={touched.bvn && errors.bvn} />
              <FormInput
                name="name"
                value={values.name}
                onChangeText={handleChange("name")}
                placeholder="Enter your full name"
                iconName="md-person"
                iconColor="#9C27B0"
                onBlur={handleBlur("name")}
              />
              <ErrorMessage errorValue={touched.name && errors.name} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={this.onRegister}
                  style={styles.buttonStyle}
                >
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
              </View>
              <ErrorMessage errorValue={errors.general} />
            </Fragment>
          )}
        </Formik>
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

export default BvnScreen;
