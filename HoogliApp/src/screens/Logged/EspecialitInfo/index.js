import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import GlobalStateContext from "../../../globalState/GlobalStateContext";
import { ViewButtonPart1 } from "../ClinicList/styled";
import { Button, ButtonHeader, HeaderListPage, ImageHeader, ListView, ScrollButton, TextEspecialit, TextInputSearch, TextScrollTitle, ViewBody, ViewButtonPart2, ViewButtonPart3, ViewCardClinic, ViewNear, ViewPrenc } from "./style";





const especialitInfo = () => {

    const { especialistas,especialidades } = useContext(GlobalStateContext);
    const [pressed, setPressed] = useState(false);

    const navigation = useNavigation();

    const pressedFunc = () =>{
        setPressed(true)
    }
    const pressedFuncFalse = () =>{
        setPressed(false)
    }

    return(
        <ViewBody>
            <HeaderListPage>
                <ButtonHeader onPress={()=> navigation.navigate('CLINICSLIST')}>
                <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader> 
            </HeaderListPage>
            <ViewNear>
                    <TextInputSearch placeholder='Pesquisar Especialidades' placeholderTextColor="#c4bebe"></TextInputSearch>
                </ViewNear>
            <TextEspecialit>Selecione a especialidade</TextEspecialit>
        <ListView>
            {especialidades.map((itens) => {
                return(
                <ScrollButton>
                <ViewButtonPart1>
                    <ViewPrenc>

                    </ViewPrenc>
                </ViewButtonPart1>
                <ViewButtonPart2>
                    <TextScrollTitle>{itens.nome}</TextScrollTitle>
                </ViewButtonPart2>
                <ViewButtonPart3>

                </ViewButtonPart3>
                </ScrollButton>
                )
            })}
        </ListView>
        </ViewBody>
    )
}

export default especialitInfo;