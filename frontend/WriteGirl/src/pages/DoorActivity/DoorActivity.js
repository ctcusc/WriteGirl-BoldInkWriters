import {styles} from './Style'
import { useState } from 'react';
import {View, SafeAreaView, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import navigation from '@react-navigation/native';
import { Alert, Collapse, NativeBaseProvider } from 'native-base';
// import { NavigationContainer } from '@react-navigation/native';
const imgArr = new Array(9).fill("https://placeimg.com/635/360/tech");

export default function DoorActivity() {
    const [show, setShow] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.page }>
                <View style = {styles.doorDiv}>
                    <TouchableOpacity>
                        <Text style={styles.backText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.chooseText}>Choose a Door!</Text>
                    

                    <FlatList
                        data={imgArr}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => <View style={{height: 3}} />}
                        numColumns={3}
                        key={3}
                    />
                    <NativeBaseProvider>
                        {show &&
                    <View>
                        <Alert status="info" style={styles.alert}>
                                <Text style={styles.doorActivityText}>
                                Welcome to the Door Activity!
                                </Text>
                                <TouchableOpacity style={styles.exploreButton} onPress={() => setShow(false)}>
                                    <Text style={styles.exploreText}>Explore</Text>
                                </TouchableOpacity>
                        </Alert>
                    </View>}
                    <TouchableOpacity style={styles.helpButton} onPress={() => setShow(true)}>
                        <Text style={styles.helpText}>Need any help?</Text>
                    </TouchableOpacity>
                    </NativeBaseProvider>
                </View>
            </View>
        </SafeAreaView>
    )
}

function renderItem({item}, navigation) {
    return <TouchableOpacity
            style={{width: "28%", height: 90, marginVertical: 20, marginHorizontal: 10, marginLeft: 10}}
            // On press go to door opened page
            onPress={() => navigation.navigate('DoorOpened')}
            ><Image
            source={require('../../../assets/whitevertical.png')}
            style={{width: "100%", height: "100%", marginVertical: 20, marginHorizontal: 10, marginLeft: 10, borderRadius: 20, filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }
            }
            />
        </TouchableOpacity>;
}

function randomPrompt(){
    //

}

