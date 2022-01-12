import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ButtonHeader, ButtonRegister, ImageHeader, InputForm, TextButton, TextInput, TextTittle, ViewBody, ViewButton, ViewForm, ViewHeader, ViewTextTittle } from "./styled";




const AddDenpe = () => {
    const navigation = useNavigation();



    return(
        <ViewBody>
            <ViewHeader>
                <ButtonHeader onPress={()=> navigation.navigate('PROFILE')}>
                <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader>
            </ViewHeader>
            <ViewTextTittle>
                <TextTittle>Preencha os dados para cadastrar</TextTittle>
                <TextTittle>seu dependente</TextTittle>
            </ViewTextTittle>
            <ViewForm>
                <InputForm placeholder="Nome" placeholderTextColor="#c4bebe">
                </InputForm>
                <InputForm placeholder="CPF" placeholderTextColor="#c4bebe">
                </InputForm>
                <InputForm placeholder="Grau de Parentesco" placeholderTextColor="#c4bebe">
                </InputForm>
            </ViewForm>
            <ViewButton>
                <ButtonRegister>
                <TextButton>Cadastrar</TextButton>
                </ButtonRegister>
            </ViewButton>
        </ViewBody>
    )
}

export default AddDenpe;