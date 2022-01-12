import styled from 'styled-components/native';



export const ViewBody = styled.View`
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;

`
export const TextUnits = styled.Text`
    fontSize: 20;
    marginTop: 30;
    color: black;


`
export const ImageUnits = styled.Image`
    height: 25;
    width: 100;
`


export const HeaderListPage = styled.View`
    background-color: #225499;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const ViewMid = styled.View`
    display: flex;
    flexDirection: row;
    flex-wrap: wrap;
    marginTop: 60;


`
export const ButtonUnits = styled.TouchableOpacity`
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    height: 140;
    width: 110;
    borderRadius: 10px;
    backgroundColor: white;
    shadowColor: black;
    shadowOffset: {
    width: 0px,
    height: 8px,
    };
    shadowOpacity: 0.8;
    elevation: 16;
    margin: 5px;

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
