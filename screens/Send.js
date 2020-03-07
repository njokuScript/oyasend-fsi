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
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import ErrorMessage from "../components/ErrorMessage";

//form validation with yup
const validationSchema = Yup.object().shape({
  phoneNumber: Yup.number()
    .label("Phone")
    .required()
    .positive()
    .integer()
    .min(11, "Phone number must be at least 11 numbers"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Password must be at least 6 characters")
});

class Send extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.textStyle}>Make Payment</Text>
        </View>
        <Formik
          initialValues={{
            name: "",
            accNum: "",
            bank: "",
            amount: "",
            pin: ""
          }}
          onSubmit={() => {}}
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
                id="name"
                value={values.name}
                onChangeText={handleChange("name")}
                placeholder="Enter Account Name"
                autoCapitalize="none"
                iconName="md-person"
                iconColor="#9C27B0"
                onBlur={handleBlur("name")}
              />
              <ErrorMessage errorValue={touched.phone && errors.phone} />
              <FormInput
                id="accNum"
                value={values.accNum}
                onChangeText={handleChange("accNum")}
                placeholder="Enter Account Number"
                iconColor="#9C27B0"
                iconName="md-card"
                onBlur={handleBlur("accNum")}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <FormInput
                id="bank"
                value={values.bank}
                onChangeText={handleChange("bank")}
                placeholder="Enter Account Number"
                iconColor="#9C27B0"
                iconName="md-card"
                onBlur={handleBlur("accNum")}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <FormInput
                id="amount"
                value={values.amount}
                onChangeText={handleChange("amount")}
                placeholder="Enter Amount"
                iconColor="#9C27B0"
                iconName="md-cash"
                onBlur={handleBlur("amount")}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handleSubmit}
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

export default Send;
