import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FloatingLabel from 'aj-floating-label-input';

export default function LoginScreen(props) {


  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');


  return (
    <View style={LoginStyles.MainView} >
      <Image
        style={LoginStyles.LogoImage}
        source={require('./logo1.png')} />
      <View style={LoginStyles.TextInputMainView}>
        <View style={LoginStyles.TextInputView}>
          <FloatingLabel
            onChangeText={value => setUsername(value)}
            focusBorderColor={ThemeColors.ThemeColorPrimary}
            focusLabelColor={ThemeColors.ThemeColorPrimary}
            blurBorderColor="#AAA"
            blurLabelColor="#AAA"
            floatingLabel="Username"
            inputStyle={{}}
            labelStyle={{}}
            floatedStyle={{ fontSize: 10, top: 3, }}
            unfloatedStyle={{ fontSize: 11, top: 12, }}
            containerStyle={{ borderRadius: 50, borderWidth: 0.5 }}
          />
        </View>

        <View style={{ ...LoginStyles.TextInputView, marginTop: 10 }}>
          <FloatingLabel
            onChangeText={value => setPassword(value)}
            focusBorderColor={ThemeColors.ThemeColorPrimary}
            focusLabelColor={ThemeColors.ThemeColorPrimary}
            blurBorderColor="#AAA"
            blurLabelColor="#AAA"
            floatingLabel="Password"
            secureTextEntry={true}
            inputStyle={{}}
            labelStyle={{}}
            floatedStyle={{ fontSize: 10, top: 3, }}
            unfloatedStyle={{ fontSize: 11, top: 12, }}
            containerStyle={{ borderRadius: 50, borderWidth: 0.5 }}
          />
        </View>
      </View>
      <TouchableOpacity>
        <Text style={LoginStyles.FogetPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={LoginStyles.LoginBtn}>
        <Text style={LoginStyles.LoginBtnLabel}>Login</Text>
      </TouchableOpacity>


    </View >
  );

}

const ThemeColors = {
  ThemeColorPrimary: '#fc4503',

}
const LoginStyles = StyleSheet.create(
  {

    MainView:
    {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ffffff"
    },
    LogoImage:
    {
      alignSelf: "center",
      width: 160,
      height: 160,
      marginTop: -50,
    },
    TextInputMainView:
    {
      marginTop: 50,
    },
    TextInputView: {
      marginLeft: 40,
      marginRight: 40
    },
    FogetPassword:
    {
      fontSize: 12,
      fontWeight: "100",
      color: "grey",
      alignSelf: "flex-end",
      marginEnd: 50,
      marginTop: 20,
    },
    LoginBtn:
    {
      borderRadius: 40,
      marginLeft: 40,
      marginRight: 40,
      marginTop: 50,
      backgroundColor: "#fc4503",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 15,
      paddingBottom: 15,
    },
    LoginBtnLabel:
    {
      color: "#ffffff",
      fontSize: 12,
    }

  }
)