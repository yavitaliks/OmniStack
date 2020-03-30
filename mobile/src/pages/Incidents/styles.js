import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        backgroundColor: '#ECEBEB',
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    hederText: {
        fontSize: 20,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',    
    },
    title: {
        fontSize: 30,
        marginBottom: 8,
        marginTop: 32,
        color: '#13131a',
        fontWeight: 'bold',
    },

    descriptons: {
        fontSize: 16,
        lineHeight: 16,
        color: '#737380',
    },

    incidentList:{
        marginTop: 10,
        marginBottom: 150,
    },

    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentProperty:{
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
    },

    incidentValue: {
        color: '#707070',
        marginTop: 8,
        fontSize: 15,
        marginBottom: 16,
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textButtom: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    }
});