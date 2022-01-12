import styled from "styled-components/native";



export const ViewBody = styled.View`
    flex: 1; 
    flexDirection: column;  
    justifyContent: space-between;
    flex-direction: column;


`

export const ViewHeader = styled.View`
    background-color: #225499;
    height: 50px;
    width: 100%;
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const ImageHeader = styled.Image`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 10px;
`

export const ButtonHeader = styled.TouchableOpacity`
    margin-left: 5px;
`
export const ViewPicker = styled.View`
    background-color: white;
    border: 1px;
    border-radius: 10px;
    margin: 10px;
    border-color: black;

`

export const ViewScroll = styled.ScrollView`
    height: 400px;
    background-color: white;
    margin: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: #01c0f8;
    
`

export const ViewColum1 = styled.View`
    height: 100px;
    width: 338px;
    display: flex;
    flex-direction: column;
    justifyContent: center;
    alignItems: center;
    border-radius: 10px;
    margin: 6px;
    backgroundColor: #01c0f8;
`

export const TextHistoric = styled.Text`
    color: white;

`
export const TextDenp = styled.Text`
    margin-left: 10px;
    margin-top: 5px;
    color: black;

`