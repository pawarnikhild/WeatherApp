import { StyleSheet } from "react-native"
import { FontSize } from "../utils/StyleConstants"

export default StyleSheet.create({
    imageBackground: {
        flex: 1
    },
    image: {
        width: 400,
        height: 400
    },
    heading: {
        // color: 'white',
        fontSize: FontSize.Title,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40

    },
    customTextInput: {
        width: '80%',
        marginTop: 40,
        marginBottom: 16
        
    },
    CustomButton: {
        width: 200
    },
    
});