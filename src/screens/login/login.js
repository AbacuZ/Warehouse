import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Image,
    TextInput,
    Button 
} from 'react-native'

export default class Login extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../../images/octocat.png')}
                    />
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder='username'
                        placeholderTextColor='rgba(255, 255, 255, 0.7)'
                        underlineColorAndroid="transparent"
                        returnKeyType='next'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='password'
                        placeholderTextColor='rgba(255, 255, 255, 0.7)'
                        underlineColorAndroid="transparent"
                        returnKeyType='go'
                        secureTextEntry
                        style={styles.input}
                    />
                    <Button 
                        onPress={this.props.onLoginPress}
                        title='LOGIN'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    formContainer : {
        padding : 20
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100
    },
    input : {
        height : 40,
        backgroundColor : 'rgba(255, 255, 255, 0.2)',
        marginBottom : 20,
        color : '#FFF',
        paddingHorizontal : 10
    },
    buttonContainer : {
        backgroundColor : '#2980b9',
        paddingVertical : 15
    },
    buttonText : {
        textAlign : 'center',
        color: '#FFFFFF'
    }
})