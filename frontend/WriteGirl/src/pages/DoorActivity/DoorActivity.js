import {styles} from './Style'
import { useEffect, useState } from 'react';
import {View, SafeAreaView, FlatList, Image, Modal, TouchableOpacity, Text} from 'react-native';
import navigation from '@react-navigation/native';
import { Alert, Collapse, NativeBaseProvider } from 'native-base';
const imgArr = new Array(9).fill().map((_, index) => `../../../assets/door${index}.png`);

// const [images, setimages] = useState([
//     require('./assets/image1.png'),
//     require('./assets/image2.png'),
//     require('./assets/image3.png'),
//     require('./assets/image4.png'),
//     require('./assets/image5.png')
//   ]);


export default function DoorActivity({navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const doors = {
        image0: require('../../../assets/door0.png'),
        image1: require('../../../assets/door1.png'),
        image2: require('../../../assets/door2.png'),
        image3: require('../../../assets/door3.png'),
        image4: require('../../../assets/door4.png'),
        image5: require('../../../assets/door5.png'),
        image6: require('../../../assets/door6.png'),
        image7: require('../../../assets/door7.png'),
        image8: require('../../../assets/door8.png')
      };

    const [images, setImages] = useState([
        { id: '0', image: doors.image0 },
        { id: '1', image: doors.image1 },
        { id: '2', image: doors.image2 },
        { id: '3', image: doors.image3 },
        { id: '4', image: doors.image4 },
        { id: '5', image: doors.image5 },
        { id: '6', image: doors.image6 },
        { id: '7', image: doors.image7 },
        { id: '8', image: doors.image8 }
    ]);

    
    



    return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.page }>
                <View style = {styles.doorDiv}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Home Tabs', { screen: 'Writing Experiments' });
                    }}>
                        <Text style={styles.backText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.chooseText}>Choose a Door!</Text>

                    <FlatList
                    data={images}
                    renderItem={({ item, index }) => {
                        // const doorURL = "../../../assets/door" + index + ".png";
                        // const doorImage = require(imgArr.at(index));
                        return (
                        <TouchableOpacity onPress={() => navigation.navigate("Door Opened", {id: index+1})}
                        style={styles.doorIcon} >
                        <Image
                            source={ item.image }
                            style={{ width: "100%", height: 120 }}
                        />
                        </TouchableOpacity>
                        );
                    }}
                    ItemSeparatorComponent={() => <View />}
                    numColumns={3}
                    key={3}
                    />

            <NativeBaseProvider>
                <Modal visible={isModalVisible} animationType="fade" transparent onRequestClose={() => setIsModalVisible(false)}>
                    <View>
                            <Alert status="info" style={styles.alert}>
                                    <Text style={styles.doorActivityText}>
                                    Click a door to explore the prompt behind it!
                                    </Text>
                                    <TouchableOpacity style={styles.exploreButton} onPress={() => setIsModalVisible(false)}>
                                        <Text style={styles.exploreText}>Explore</Text>
                                    </TouchableOpacity>
                            </Alert>
                        </View>
                </Modal>
                <TouchableOpacity style={styles.helpButton} onPress={() => setIsModalVisible(true)}>
                            <Text style={styles.helpText}>Need any help?</Text>
                </TouchableOpacity>
            </NativeBaseProvider>


                </View>
            </View>
        </SafeAreaView>
        
    )
}
