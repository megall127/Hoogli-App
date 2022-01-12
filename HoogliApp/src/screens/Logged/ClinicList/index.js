import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, View } from "react-native";
import { ButtonHeader, HeaderListPage, ImageButton, ImageHeader, ScrollButton, ScrollViewBody, SearchButton, TextInputSearch, TextList, TextScrollButton, TextScrollTitle, TextSearch, ViewBody, ViewBodyCenter, ViewButtonPart1, ViewButtonPart2, ViewButtonPart3, ViewHeaderSearch, ViewInfos, ViewInputsNear, ViewNear, ViewPrenc, ViewScroll, ViewSearch, ViewSearchSelect, ViewSpace } from "./styled";
import LinearGradient from 'react-native-linear-gradient';
import GlobalStateContext from "../../../globalState/GlobalStateContext";



const ClinicList = () => {
    const [select, setSelect] = useState(1);
    const [busca, setBusca] = useState('');
    const [filterClinics, setfilterClinics] = useState([])

    let id = 0;
    

    const navigation = useNavigation();

    const { listaClinicas, infoId, setInfoId } = useContext(GlobalStateContext);



    const listaFiltrada = listaClinicas.filter((iten) => {
        return iten.local.includes(busca)
    })

    const setId = (iten) => {
        id = iten
    }

    const selectNear = () => {
        setSelect(1)
    }

    const selectSeach = () => {
        setSelect(0)
    }

    const choseSelect = () => {
        if(select === 1){
            return(
                <ViewNear>
                    <TextInputSearch></TextInputSearch>
                </ViewNear>
            )
        } else if(select === 0) {
            return(
                <ViewSearchSelect>
                    <TextInputSearch  placeholder="Localidade" onChangeText={text => setBusca(text)} value={busca}> 
                    </TextInputSearch>
                </ViewSearchSelect>
            )
        }
    }

    const ButtonInfo = (itenId) => {
        navigation.navigate('CLINICINFO');
        setInfoId(itenId)
    }

    return(
        <ViewBody>
            <HeaderListPage>
                <ButtonHeader onPress={()=> navigation.navigate('DEPENDENTS')}>
                <ImageHeader source={require('../../../img/setaBranca.png')}></ImageHeader>
                </ButtonHeader>
            </HeaderListPage>
            <ViewNear>
                    <TextInputSearch placeholder='Pesquisar unidades de atendimentos' placeholderTextColor="#c4bebe" onChangeText={text => setBusca(text)} value={busca}></TextInputSearch>
                </ViewNear>
                    <ViewBodyCenter>
                        <ScrollViewBody>
                        {listaFiltrada.map((itens) => {
                            return(
                                <ScrollButton key={itens.id} onPress={()=> ButtonInfo(itens.id)} >
                                <ViewButtonPart1>
                                    <ViewPrenc>
                                    </ViewPrenc>
                                </ViewButtonPart1>
    
                                <ViewButtonPart2>
                                    <TextScrollTitle>{itens.titulo}</TextScrollTitle>
                                    <TextScrollButton>{itens.localidade}</TextScrollButton>
                                    <TextScrollButton>{itens.local}</TextScrollButton>
                                </ViewButtonPart2>
    
                                <ViewButtonPart3>
                                </ViewButtonPart3>
                            </ScrollButton>
                            )
                        })}
                
                        </ScrollViewBody>
                    </ViewBodyCenter>
        </ViewBody>
    )
}

export default ClinicList;