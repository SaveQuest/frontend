import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function FontLoad() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Pretendard-Regular": require("../assets/fonts/Pretendard-Regular.otf"),
        "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.otf"),
        "Pretendard-Medium": require("../assets/fonts/Pretendard-Medium.otf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  return fontsLoaded;
}