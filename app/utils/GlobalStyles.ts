import { StyleSheet } from 'react-native';
import { AppColor } from './StyleConstants';

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: AppColor.white,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontalCenterContainer: {
        alignItems: 'center',
    },
});