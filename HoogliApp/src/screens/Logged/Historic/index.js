import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import GlobalStateContext from "../../../globalState/GlobalStateContext";
import { ButtonHeader, ImageHeader, TextDenp, TextHistoric, ViewBody, ViewColum1, ViewHeader, ViewPicker, ViewScroll } from "./style";



const Historic = () => {
    const [selectedValue, setSelectedValue] = useState('Carlos Alberto');
    const navigation = useNavigation();

    const { listaDeDependentes } = useContext(GlobalStateContext);

    const result = listaDeDependentes.find(dependentes => dependentes.nome === selectedValue)

    const hitoricoDepe = result.historico;


    return(
        <ViewBody>
            <ViewHeader>
                <ButtonHeader onPress={()=> navigation.navigate('HOME')}>
                <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader>
            </ViewHeader>
            <TextDenp>Dependentes</TextDenp>
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
            <ViewScroll>
                {hitoricoDepe.map((itens) => {
                    return(
                        <ViewColum1 key={itens.id}>
                            <TextHistoric>Data- {itens.data}</TextHistoric>
                            <TextHistoric>Hora- {itens.hora}</TextHistoric>
                            <TextHistoric>Medico- {itens.medico}</TextHistoric>
                            <TextHistoric>Unidade- {itens.unidade}</TextHistoric>
                        </ViewColum1>
                    )
                })}
               
            </ViewScroll>
        </ViewBody>
    )
}

export default Historic;