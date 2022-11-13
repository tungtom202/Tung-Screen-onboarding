import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>


            <Image
                style={styles.img}
                source={{ uri: 'https://lun-eu.icons8.com/a/6bDLlnIUh0u5e5tthWVw9w/E-v4Eo-qi0eyX8y9JRZ5yw/noun_Binoculars_1107295.png' }} />
            <Text style={styles.textBrowse}>Quick Search</Text>
            <Text style={styles.textWelcome}>Quickly find food items you like</Text>

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
