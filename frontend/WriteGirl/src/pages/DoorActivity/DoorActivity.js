import {styles} from './dastyle'
import {View, SafeAreaView, FlatList, Image} from 'react-native';
const imgArr = new Array(9).fill("https://placeimg.com/635/360/tech");

export default function DoorActivity() {

    return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.page}>
                <FlatList
                    data={imgArr}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{height: 3}} />}
                    numColumns={3}
                    key={3}
                />
            </View>    
        </SafeAreaView>
    )
}

function renderItem({item}) {
    return <Image
        source={{uri: item}}
        style={{width: "30%", height: 30}}
    />;
}