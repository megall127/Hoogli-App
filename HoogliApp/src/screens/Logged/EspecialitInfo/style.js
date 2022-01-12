import styled from "styled-components/native";



export const ViewBody = styled.View `
    display:flex;
    flexDirection: column;
    justifyContent: space-between;
    height: 100%;
    width: 100%;
    background-color: white;
    alignItems: center;
`

export const HeaderListPage = styled.View`
    backgroundColor: #225499;
    height: 50px;
    width: 100%;
    float: right;
    display: flex;
    flexDirection: row;
`

export const ListView = styled.ScrollView`
    flex: 1;
    flexDirection: column;
    backgroundColor: white;
    width: 320px;
    margin: 10px;
`


export const Button = styled.TouchableOpacity`
    



`
export const ButtonHeader = styled.TouchableOpacity`
    margin-left: 5px;
`
export const ImageHeader = styled.Image`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 10px;
`

export const ScrollButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    height: 70px;
    width: 300px;
    margin: 10px;
    borderRadius: 20px;
    shadowColor: black;
    shadowOffset: {
	width: 0px,
	height: 8px,
    };
    shadowOpacity: 0.8;
    elevation: 16;
`

export const ViewButtonPart1 = styled.View`



`

export const ViewButtonPart2 = styled.View`
    display: flex;
    flexDirection: column;
    paddingLeft: 10px;
    paddingTop: 5px;
`
export const ViewButtonPart3 = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 15px;


`

export const ViewPrenc = styled.View`
    height: 100%;
    width: 20px;
    backgroundColor: #01c0f8;
    borderBottomLeftRadius: 10px;
    borderTopLeftRadius: 10px;
`

export const TextScrollTitle = styled.Text`
    fontSize: 18px;
    color: black;

`
export const TextEspecialit = styled.Text`
    fontSize: 18px;
    color: black;

`
export const TextInputSearch = styled.TextInput`
    backgroundColor: white;
    height: 35px;
    width: 350px;
    fontSize: 12px;
    borderRadius: 20px;
    border: #225499;
    margin: 10px;
`
export const ViewNear = styled.View`

`