import {styles} from './Style'
import { useState } from 'react';
import {View, SafeAreaView, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import { Alert, Collapse, NativeBaseProvider } from 'native-base';
const imgArr = new Array(9).fill("https://placeimg.com/635/360/tech");
const doorImage = require('../../../assets/door.png');

export default function DoorActivity({navigation}) {
    const [show, setShow] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.page}>
                <View style = {styles.doorDiv}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Home Tabs', { screen: 'Writing Experiments' });
                    }}>
                        <Text style={styles.backText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.chooseText}>Choose a Door!</Text>
                    <FlatList
                        data={imgArr}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => <View/>}
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

function renderItem({navigation}) {


    return (<TouchableOpacity  style={styles.doorIcon} onPress={() => {
        navigation.navigate('Door Opened')
        console.log("open door")
        }}>
            <Image source={doorImage} style={styles.doorImage}/>
        </TouchableOpacity>);


}

