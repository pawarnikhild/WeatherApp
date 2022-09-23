import { StyleSheet } from "react-native"
import { AppColor, FontSize } from "../utils/StyleConstants"

export default StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        margin: 16,
        borderWidth: 2,
        borderColor: 'black'
    },
    capitalName: {
        fontSize: FontSize.Title,
        fontWeight: 'bold',
        // textAlign: 'center',
        margin: 10
    },
    row : {
        flexDirection: 'row',
        margin: 10
    },
    field: {
        fontSize: FontSize.Large,
        fontWeight: 'bold',
        // textAlign: 'center',
        // margin: 10
    },
    data: {
        fontSize: FontSize.Large,
        // fontWeight: 'bold',
        // textAlign: 'center',
        // margin: 20
    },
    CustomButton: {
        marginTop: 20,
        width: 200
    },
    
});