import {styles} from './Style'
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';
// Airtable.configure({ apiKey: DOOR_ACTIVITY })

export default function DoorOpened() {
    const [data, setData] = useState();
    useEffect(() => {
        // Get random prompt id
        let randomNum = Math.floor(Math.random() * 9) + 1;
        let url = "http://localhost:8000/api/dooractivity/" + randomNum.toString();
        fetch(url, {
            method: "GET",
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if(data == null) { throw new Error("No data found"); }
            setData(data.instruction);
            console.log(data);
        })
    }, []);

    // //Airtable API call for prompt
    // let apiToken = DOOR_ACTIVITY;
    // let table = base.gerTable("Door Activity Prompts");
    // let {records}  = table.selectRecordsAsync();
    // console.log(records);
    

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.page}>
                <View style = {styles.openDiv}>
                {/* Back arrow */}
                <TouchableOpacity style={styles.backArrow}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                
                    <View style={styles.openDoor}>
                        <Text style = {styles.openText}>Door Opened!</Text>
                        <Text style = {styles.prompt}>{data}</Text>
                        <TouchableOpacity style={styles.interactive}>
                            <Text style={styles.intText}>see exhibits</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Complete Button */}
                    <TouchableOpacity style={styles.compButton}>
                        <Text style={styles.compText}>complete</Text>
                    </TouchableOpacity>

                </View>   
            </View>
        </SafeAreaView>
    )
}