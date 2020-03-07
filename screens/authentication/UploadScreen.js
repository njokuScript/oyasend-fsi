import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { Container } from "react-native-elements";
export class UploadScreen extends Component {
  // takePicture = async function() {
  //   if (this.camera) {
  //     this.camera
  //       .takePictureAsync({ skipProcessing: true })
  //       .then(capturephoto => {
  //         this.setState({ photo: capturephoto.uri });
  //         alert(this.state.photo);
  //       })
  //       .then(capturephoto => {
  //         FileSystem.moveAsync({
  //           from: capturephoto.uri,
  //           to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`
  //         });
  //       });
  //   }
  // };
  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = photo => {
    console.log(photo);
  };
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Container style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "50%"
              }}
            >
              <TouchableOpacity
                style={{
                  //flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  // flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => this.takePicture()}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Take Picture{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
export default UploadScreen;
