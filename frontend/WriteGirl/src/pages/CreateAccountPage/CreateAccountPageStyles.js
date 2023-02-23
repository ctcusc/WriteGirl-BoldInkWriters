import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        padding: 40,
        display: 'flex',
    },

    title: {
        fontSize: 40,
        marginTop: 30,
        marginBottom: 20,
    },

    label: {
        color: '#000',
        fontSize: 20,
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000',
        borderWidth: 2,
        fontSize: 20,
        height: 60,
        padding: 10,
        marginTop: 5,
        marginBottom: 25
    },

    button: {
        backgroundColor: '#688175',
        height: 'auto',
        width: '100%',
        padding: 10,
        marginVertical: 20,
        marginBottom: 30,
        borderRadius: 30,
    },

    buttonLabel: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    buttonWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    errorMessages: {
        marginBottom: 50,
    },

});

export { styles };
