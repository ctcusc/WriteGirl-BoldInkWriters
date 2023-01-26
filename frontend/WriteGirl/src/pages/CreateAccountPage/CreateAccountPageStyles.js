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
        marginBottom: 30,
    },

    alertContainer: {
        backgroundColor: '#FFF',
        height: 'auto',
    },

    alertModal: {
        height: 'auto',
    },

    alertView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '100%',
        height: 'auto',
        backgroundColor: '#688175',
    },

    closeButton: {
        backgroundColor: '#688175',
        height: 'auto',
        width: 'auto',
        marginTop: 10,
        marginRight: 20,
        alignSelf: 'flex-end',
    },

    closeText: {
        color: 'white',
        fontSize: 20,
    },

    messageContainer: {
        paddingBottom: 20,
        paddingLeft: '3%',
        paddingRight: '3%',
    },

    errorText: {
        color: 'black',
        fontSize: 20,
    },

    successText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },

    errorToast: {
        backgroundColor: '#688175',
        padding: '1em',
        width: 'auto',
        color: '#000',
    },

});

export { styles };
