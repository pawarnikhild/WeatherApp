import { StyleSheet } from "react-native"
import { AppColor, FontSize } from "../utils/StyleConstants"

export default StyleSheet.create({
    image: {
        height: 200,
        width: 380,
        margin: 16,
        borderWidth: 2,
        borderColor: AppColor.black
    },
    countryName: {
        fontSize: FontSize.Title,
        fontWeight: 'bold',
        margin: 10
    },
    row : {
        flexDirection: 'row',
        margin: 10
    },
    field: {
        fontSize: FontSize.Large,
        fontWeight: 'bold',
    },
    data: {
        fontSize: FontSize.Large,
    },
    CustomButton: {
        marginTop: 20,
        width: '100%'
    },
});