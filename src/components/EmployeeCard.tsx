import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONT_FAMILY} from '../constants';

export interface AppProps {
    profileImage: string;
    name: string;
    companyName: string;
    id: number;
    onPressCard: (id: number) => void;
}

export const EmployeeCard = ({
    name,
    companyName,
    profileImage,
    id,
    onPressCard,
}: AppProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.container}
            onPress={() => onPressCard(id)}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: profileImage}}
                    style={styles.imageStyle}
                    resizeMode="cover"
                    defaultSource={require('../assets/user.png')}
                />
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.companyText}>{companyName}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 13,
        overflow: 'hidden',
        marginVertical: 8,
        marginHorizontal: 4,
        backgroundColor: COLORS.WHITE,
        padding: 4,
        elevation: 4,
    },
    imageContainer: {
        flex: 2,
    },
    imageStyle: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    nameText: {
        fontSize: 18,
        fontFamily: FONT_FAMILY,
        fontWeight: 'bold',
    },
    companyText: {
        fontSize: 14,
        fontFamily: FONT_FAMILY,
        fontWeight: '400',
    },
    dataContainer: {
        flex: 4,
    },
});
