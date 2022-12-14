import { StyleSheet } from 'react-native';
import { AppColor } from './StyleConstants';

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: AppColor.black,
    },
    VerticalCenterContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontalCenterContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: AppColor.white,
        padding: 10,
    },
});