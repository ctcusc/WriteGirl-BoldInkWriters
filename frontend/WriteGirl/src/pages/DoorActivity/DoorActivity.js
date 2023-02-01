import {styles} from './dastyle'
import {View, SafeAreaView, FlatList, Image, TouchableOpacity, Text} from 'react-native';
const imgArr = new Array(9).fill("https://placeimg.com/635/360/tech");

export default function DoorActivity() {

    return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.page}>
                <Text style={styles.openText}>Choose a Door!</Text>
                <FlatList
                    data={imgArr}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{height: 3}} />}
                    numColumns={3}
                    key={3}
                />

                <TouchableOpacity style={styles.helpButton}>
                    <Text style={styles.helpText}>Need any help?</Text>
                </TouchableOpacity>
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