import React, { Component } from "react";
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Constants } from "expo";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
export default class UploadScreen extends Component {
  state = {
    image: null,
    uploading: false
  };

  render() {
    let { image } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />

        <Text style={styles.exampleText}>Upload Image</Text>

        <TouchableOpacity onPress={this._takePhoto} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>

        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}
      </View>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image } = this.state;

    if (!image) {
      return;
    }

    return (
      <View style={styles.maybeRenderContainer}>
        <View style={styles.maybeRenderImageContainer}>
          <Image source={{ uri: image }} style={styles.maybeRenderImage} />
        </View>

        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={styles.maybeRenderImageText}
        >
          {image}
        </Text>
      </View>
    );
  };

  _takePhoto = async () => {
    const { status: cameraPerm } = await Permissions.askAsync(
      Permissions.CAMERA
    );

    // only if user allows permission to camera
    if (cameraPerm === "granted") {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [5, 4]
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();

        this.setState({
          image: uploadResult.location
        });
      }
      this.props.navigation.navigate("App");
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({
        uploading: false
      });
    }
  };
}

async function uploadImageAsync(uri) {
  let apiUrl = "input api url";

  let uriParts = uri.split(".");
  let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append("photo", {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`
  });

  let options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "",
      "Content-Type": ""
    }
  };

  return fetch(apiUrl, options);
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: "center"
  },
  maybeRenderUploading: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center"
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4
    },
    shadowRadius: 5,
    width: 250
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: "hidden"
  },
  maybeRenderImage: {
    height: 250,
    width: 250
  },
  buttonStyle: {
    backgroundColor: "#9C27B0",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    borderRadius: 15,
    opacity: 1,
    width: 329,
    height: 58
  },
  buttonText: {
    textAlign: "center",
    top: 7,
    fontSize: 24,
    color: "#fffffF",
    opacity: 1
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
