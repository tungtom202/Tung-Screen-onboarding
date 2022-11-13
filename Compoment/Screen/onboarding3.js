import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>


            <Image
                style={styles.img}
                source={{ uri: 'https://lun-eu.icons8.com/a/6bDLlnIUh0u5e5tthWVw9w/tNVO_UcVfkqorpF6oJ31tQ/noun_Calendar_2442157.png' }} />
            <Text style={styles.textBrowse}>Make Reservations</Text>
            <Text style={styles.textWelcome}>Book a table in advance to avoid</Text>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5EA33A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 70,
        margin: 'auto'
    },
    textBrowse: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        marginBottom: 20
    },
    textWelcome: {
        fontSize: 17,
        color: 'white',

    },
});
