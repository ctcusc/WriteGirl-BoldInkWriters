import {styles} from './Style'
import { useState } from 'react';
import {View, SafeAreaView, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import { Alert, Collapse, NativeBaseProvider } from 'native-base';
const imgArr = new Array(9).fill("https://placeimg.com/635/360/tech");

export default function DoorActivity() {
    const [show, setShow] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.page}>
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

function renderItem({item}) {
    return <Image
        source={require('../../../assets/whitevertical.png')}
        style={{width: "28%", height: 90, marginVertical: 20, marginHorizontal: 10, marginLeft: 10, borderRadius: 20, filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }
    }
    />;
}

