import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>


            <Image
                style={styles.img}
                source={{ uri: 'https://lun-eu-assets.s3.eu-central-003.backblazeb2.com/6bDLlnIUh0u5e5tthWVw9w/KfNJY3MfiE67VqSzXFUyHA/icons8-delivery-500.png' }} />
            <Text style={styles.textBrowse}>Order Food</Text>
            <Text style={styles.textWelcome}>Hungry? Order food in just a few clicks</Text>

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
