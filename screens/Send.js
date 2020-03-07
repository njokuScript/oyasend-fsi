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
  name: Yup.string()
    .label("Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  accNum: Yup.number()
    .label("Account")
    .required()
    .positive()
    .integer()
    .min(10, "Must have at least 11 characters"),
  bank: Yup.string()
    .label("Bank")
    .required()
    .min(2, "Must have a minimum of 2"),
  amount: Yup.number()
    .label("Bank")
    .required()
    .min(100, "Nothunf")
});
// handleOnComplete = async (values, actions) => {
//   const { name, accNum, bank, amount, pin } = values;
//   try {
//     // const response = await api.register({ phone: phoneNumber, password });
//     // await Utils.setStorageData(response);

//     // if (response.user) {
//     this.props.navigation.navigate("Confirm");
//     //      }
//   } catch (error) {
//     console.log(error);
//     actions.setFieldError("general", error.message);
//   } finally {
//     actions.setSubmitting(false);
//   }
// };
onConfirm = () => this.navigation.navigate("Confirm");
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
          onSubmit={() => {
            this.onConfirm();
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
                name="name"
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
                name="accNum"
                value={values.accNum}
                onChangeText={handleChange("accNum")}
                placeholder="Enter Account Number"
                iconColor="#9C27B0"
                iconName="md-card"
                onBlur={handleBlur("accNum")}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <FormInput
                name="bank"
                value={values.bank}
                onChangeText={handleChange("bank")}
                placeholder="bank"
                iconColor="#9C27B0"
                iconName="md-card"
                onBlur={handleBlur("bank")}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <FormInput
                name="amount"
                value={values.amount}
                onChangeText={handleChange("amount")}
                placeholder="Enter Amount"
                iconColor="#9C27B0"
                iconName="md-cash"
                onBlur={handleBlur("amount")}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />

              <FormInput
                name="pin"
                value={values.pin}
                onChangeText={handleChange("pin")}
                placeholder="Enter pin"
                secureTextEntry={true}
                iconColor="#9C27B0"
                iconName="md-cash"
                onBlur={handleBlur("pin")}
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
