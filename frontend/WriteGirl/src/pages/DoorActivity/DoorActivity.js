import {styles} from './Style'
import { useEffect, useState } from 'react';
import {View, SafeAreaView, FlatList, Image, Modal, TouchableOpacity, Text} from 'react-native';
import navigation from '@react-navigation/native';
import { Alert, Collapse, NativeBaseProvider } from 'native-base';
const imgArr = new Array(9).fill().map((_, index) => `../../../assets/door${index}.png`);


export default function DoorActivity({navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    
    



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
                    data={imgArr}
                    renderItem={({ item, index }) => {
                        const doorImage = require(`../../../assets/door${index}.png`);

                        return (
                        <TouchableOpacity onPress={() => navigation.navigate("Door Opened")}
                        style={styles.doorIcon} >
                        <Image
                            source={{ uri: doorImage }}
                            style={{ width: "100%", height: 120 }}
                        />
                        </TouchableOpacity>
                        );
                    }}
                    ItemSeparatorComponent={() => <View />}
                    numColumns={3}
                    key={3}
                    />

                    {/* <NativeBaseProvider>
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
                    </NativeBaseProvider> */}
            <NativeBaseProvider>

           
            <Modal visible={isModalVisible} animationType="fade" transparent onRequestClose={() => setIsModalVisible(false)}>
                    {/* <TouchableOpacity style={styles.modalcontainer} activeOpacity={1}>
                        <View style={styles.modalcontent}>
                            <Text style={styles.modaltext}>Congratulations!</Text>
                            <Text style={styles.modaltext}>You got this adjective:</Text>
                            <Text style={styles.modaltext}>{selectedWord}</Text>
                            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                <Text style={styles.closebutton}>close</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity> */}
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
                {/* <TouchableOpacity style={styles.helpButton}> */}
                            <Text style={styles.helpText}>Need any help?</Text>
                        </TouchableOpacity>
            </NativeBaseProvider>


                </View>
            </View>
        </SafeAreaView>
        
    )
}
