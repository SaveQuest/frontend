import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas>
        <Box>
          <meshNormalMaterial/>
        </Box>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
