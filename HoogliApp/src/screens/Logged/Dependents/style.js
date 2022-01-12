import styled from "styled-components/native";


export const ViewBody = styled.View `
    display:flex;
    flexDirection: column;
    justifyContent: space-between;
    height: 100%;
    width: 100%;
    background-color: white;
`

export const ViewPicker = styled.View`
    background-color: white;
    border: 1px;
    border-radius: 10px;
    margin: 10px;
    border-color: black;

`


export const HeaderListPage = styled.View`
    backgroundColor: #225499;
    height: 50px;
    width: 100%;
    float: right;
    display: flex;
    flexDirection: row;
`

export const TextDenp = styled.Text` 
    font-family: 'Poppins-Light';
    fontSize: 25px;
    color: black;

`
export const ViewDenp = styled.View`
display: flex;
flexDirection: column;
alignItems: center;
marginTop: 30px;
`
export const ViewChoseDenp = styled.View`
    margin: 1px;
`
export const ViewChoseDenpDown = styled.View`
    margin: 1px;
`

export const TextChoseDenp = styled.Text`
    fontSize: 20px;
    margin: 15px
`

export const ButtonHeader = styled.TouchableOpacity`
    marginLeft: 5px;
`
export const ButtonDenp = styled.TouchableOpacity`

`

export const ImageHeader = styled.Image`
    width: 30px;
    height: 30px;
    marginTop: 10px;
    marginRight: 10px;
`
export const Linha = styled.View`
    backgroundColor: #225499;
    width:300px;
    height: 1px;
`

export const NextButton = styled.TouchableOpacity`
    width: 130px;
    height: 50px;
    backgroundColor: #225499;
    borderRadius: 10px;
    alignItems: center;
    marginBottom: 10px;
`
export const ViewButton = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: center;
    marginTop: 180px;

`

export const TextButtonNext = styled.Text`
    color: white;
    marginTop: 15px;
    font-family: 'Poppins-Light';
`