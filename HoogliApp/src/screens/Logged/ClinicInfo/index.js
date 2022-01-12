import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import GlobalStateContext from "../../../globalState/GlobalStateContext";
import { ButtonHeader, ImageBody, ImageHeader, NextButton, TextButtonNext, TextInfos, TextInfosText, TextTittle, ViewBody, ViewBodyInfo, ViewBodyInfoText, ViewBodyScroll, ViewButton, ViewCenterBody, ViewHeader } from "./styled";


const ClinicInfo = () => {

    const { listaClinicas, infoId, setInfoId } = useContext(GlobalStateContext);

    const navigation = useNavigation();

    const result = listaClinicas.find(clinicas => clinicas.id === infoId)

    return(
        <ViewBody>
            <ViewHeader>
                <ButtonHeader onPress={()=> navigation.navigate('CLINICSLIST')}>
                <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader> 
            </ViewHeader>
            <ImageBody source={{uri: result.urlImg}}></ImageBody>
            <ViewCenterBody>
                <TextTittle>{result.titulo}</TextTittle>   
            </ViewCenterBody>
            <ViewBodyInfo>
                    <TextInfos>{result.localidade}</TextInfos>
                    <TextInfos>{result.local}</TextInfos>
                    <TextInfos>{result.telefone}</TextInfos>
                </ViewBodyInfo>
            <ViewBodyInfoText>
            <TextInfosText>{result.textoClinica}</TextInfosText>
            </ViewBodyInfoText>
            <ViewButton>
            <NextButton onPress={()=> navigation.navigate('ESPECIALIST')}>
                <TextButtonNext>Selecionar Clinica</TextButtonNext>
            </NextButton>
            </ViewButton>
        </ViewBody>
    )
}

export default ClinicInfo;