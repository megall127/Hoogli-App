import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { ButtonDenp, ButtonHeader, HeaderListPage, ImageHeader, Linha, LoginButton, NextButton, TextButtonLogin, TextButtonNext, TextChoseDenp, TextDenp, ViewBody, ViewButton, ViewChoseDenp, ViewChoseDenpDown, ViewDenp, ViewPicker } from "./style";
import { useNavigation } from "@react-navigation/native";
import GlobalStateContext from "../../../globalState/GlobalStateContext";
import { Picker } from "@react-native-picker/picker";


const Dependents = () => {

    const navigation = useNavigation();
    const [trueOrFalse, setTrueOrFalse] = useState(false)
    const [selectedValue, setSelectedValue] = useState('Carlos Alberto');

    const { listaDeDependentes, setListaDeDependentes  } = useContext(GlobalStateContext);




    return(
        <ViewBody>
            <HeaderListPage>
                <ButtonHeader onPress={()=> navigation.navigate('HOME')}>
                <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader> 
            </HeaderListPage>
            <ViewDenp>
            <TextDenp>Selecione o dependente</TextDenp>
            <TextDenp>Para consulta</TextDenp>
            </ViewDenp>
            <ViewPicker>
            <Picker 
                selectedValue={selectedValue} 
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    {listaDeDependentes.map((itens) => {
                    return(
                    <Picker.Item key={itens.id} 
                    label={itens.nome}
                    value={itens.nome}
                    style={{color: 'black'}}
                    />
                        )
                    })}

                </Picker>
                </ViewPicker>
            <ViewButton>
            <NextButton onPress={()=> navigation.navigate('CLINICSLIST')}>
                <TextButtonNext>
                    Proximo
                </TextButtonNext>
            </NextButton>
            </ViewButton>
        </ViewBody>
    )


}

export default Dependents;