import { StyleSheet } from "react-native"
import { FontSize } from "../utils/StyleConstants"

export default StyleSheet.create({
    imageBackground: {
        flex: 1,
        padding: 10 
    },
    heading: {
        fontSize: FontSize.Title,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40
    },
    customTextInput: {
        marginBottom: 16
    },
});