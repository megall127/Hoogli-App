import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Modal, View} from "react-native";


import LinearGradient from "react-native-linear-gradient";
import { ButtonLogin, ButtonLoginRegister, ImageHeader, InputLogin, TextButtonLogin, TextButtonRegister, TextViewRegister, ViewAll, ViewGradiente, ViewHeader, ViewInputsLogin, ViewRegister } from "./styled";


const LoginPage = () => {
    const [showWarning, setShowWarning] = useState(false);

    const navigation = useNavigation();

   return(
       <ViewAll>
           <LinearGradient start={{x: 0.5, y: 0.10}} end={{x: 0.5, y: 1.0}} colors={['#58934f','#8ecf84','#8ecf84','#8ecf84']}>
               <ViewGradiente>
                   <ViewHeader>
                        <ImageHeader source={require('../../../img/logoHoogli.png')}></ImageHeader>
                   </ViewHeader>
                    <ViewInputsLogin>
                        <InputLogin placeholder='Usuario' placeholderTextColor="#c4bebe" >
                        </InputLogin>
                        <InputLogin placeholder='Senha' placeholderTextColor="#c4bebe" >
                        </InputLogin>
                        <ButtonLogin onPress={()=> navigation.navigate('BOTTON')}> 
                            <TextButtonLogin>Login</TextButtonLogin>
                        </ButtonLogin>
                        <ViewRegister>
                            <TextViewRegister>Não tem conta?</TextViewRegister>
                        <ButtonLoginRegister>
                            <TextButtonRegister>Registrar</TextButtonRegister>
                        </ButtonLoginRegister>
                        </ViewRegister>
                    </ViewInputsLogin>
               </ViewGradiente>
            </LinearGradient>
       </ViewAll>

   ) 
}

export default LoginPage;   