import styled from "styled-components/native";

export const ViewAll = styled.ScrollView`
    display: flex;
    flexDirection: column;
    backgroundColor: #8ecf84;  
`

export const ViewBody = styled.View`
    backgroundColor: #8ecf84;  
    height: 400;
    display: flex;
    flexDirection: column;
`
export const ViewMenu = styled.View`
    width: 100%;
`
export const SpaceButtonMenu = styled.TouchableOpacity`
    margin: 10px;
   
`
export const ImageSpace = styled.Image`
   height: 30px;
   width: 30px;
    marginLeft: 10px;
`

export const ViewMid = styled.View`
    backgroundColor: white;
    height: 100%;
    display: flex;
    flexDirection: row;
    justifyContent: center;
    flex-wrap: wrap;
    alignItems: center;
`
export const ViewInfosMid = styled.ScrollView`
    width: 100px;

`
export const ViewHeader = styled.View`
    display: flex;
    flexDirection: column;
`
export const ViewSpace = styled.View`
    height: 150px;
    display: flex;
    flexDirection: column;
`
export const TextSpace = styled.Text`
    color: white;
`
export const TextSpaceName = styled.Text`
    color: white;
    fontSize: 30px;

`
export const ViewTextHeader = styled.View`
    display: flex;
    flexDirection: column;
    margin: 20px;
`
export const ViewPhoto = styled.View`
    height: 100;
    width: 100;
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    border: 3px white;
    backgroundColor: white;
    zIndex: 1;
    marginLeft: 30px;
    borderRadius: 30px;
    position: relative;
    top: 40;
`
export const ImageHeader = styled.Image`
    height: 90px;
    width: 90px;
    borderRadius: 30px;
`
export const CardView = styled.View`
    marginTop: 30px;
    marginLeft: 10px;
    marginRight: 10px;
    marginBottom: 10px;
    borderRadius: 20px;
    height: 100px;
    width: 100px;
    backgroundColor: white;
    shadowColor: black;
    shadowOffset: {
	width: 0px,
	height: 8px,
    };
    shadowOpacity: 0.8;
    elevation: 16;
`
export const CardViewInfos = styled.View`
    backgroundColor: white;
    height: 300px;
    width: 300px;
    margin: 20px;
    borderRadius: 30px;
    shadowColor: black;
    shadowOffset: {
	width: 0px,
	height: 8px,
    };
    shadowOpacity: 0.8;
    elevation: 16;
`
export const CardViewTittle = styled.View`
    height: 30px;
    width: 80%;
    marginTop: 10px;
    display: flex;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
`
export const ViewForm = styled.View`

`
export const ViewTextForm = styled.View`

`
export const ViewIcon = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
`
export const IconForm = styled.Image`
    height: 30px;
    width: 30px;
    marginLeft: 10px;
`
export const LinhaForm = styled.View`
    height: 1px;
    width: 100%;
    backgroundColor: #c4bebe;

`
export const CardTextTittle = styled.Text`
    marginLeft: 50px;
    marginTop: 10px;
    fontFamily: Poppins-Light;
    fontSize: 15px;
    color: #c4bebe;
`
export const TextCard = styled.Text`
    margin: 10px;
    fontSize: 13px;
`
export const TextCardNumber = styled.Text`
    margin: 10px;
    fontSize: 13px;
`
export const TextForm = styled.Text`
    margin: 15px;
    color: #a39f9f
`