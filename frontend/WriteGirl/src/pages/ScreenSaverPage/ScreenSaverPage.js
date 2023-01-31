import { NativeBaseProvider } from "native-base";
import { SafeAreaView, View, Text, Pressable, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./ScreenSaverStyles.js";
import data from './screenSaverData.json'

export default function ScreenSaverPage({ navigation, route }) {
    const promptId = route.params.promptId;


    return (
        <NativeBaseProvider>
        <SafeAreaView>
        {/* <ImageBackground>  */}
        {console.log(data.at(promptId))}
            <View>
                <Text>Sidfhisjdl {promptId}</Text>
            </View>

        {/* </ImageBackground> */}
        </SafeAreaView>
        </NativeBaseProvider>
    )
}