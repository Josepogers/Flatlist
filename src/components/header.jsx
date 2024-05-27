import { View, Text, StyleSheet } from 'react-native'

export function Header() {
    return (
        <View style = {styles.header}>
            <Text style={{
                fontSize: 30,
                color: 'white',
                top: 10,
                left: 5
            }}>Suas materias</Text>
        </View>
    )
}

styles = StyleSheet.create({
    header: {
        backgroundColor: '#1F1F7A',
        height: 70
    }
})