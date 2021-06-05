import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import {EmployeeCard} from '../components/EmployeeCard';
import {COLORS, EMPLOYEE_DATA} from '../constants';
import {getEmployeeData} from '../services';
interface Props {}

export const EmployeeListScreen = props => {
    const [employeeData, setEmployeeData] = useState([]);
    const [searchedData, setSearchedData] = useState([]);
    useEffect(() => {
        getEmployeeData(EMPLOYEE_DATA).then(data => {
            setEmployeeData(data);
            setSearchedData(data);
        });
    }, []);

    const searchFilterFunction = (text: string) => {
        const trimmedText = text.trim();

        if (trimmedText.length > 0) {
            const newData = employeeData.filter(item => {
                const itemData = `${item.name.toUpperCase()}`;
                const emailData = `${item.email.toUpperCase()}`;
                const textData = trimmedText.toUpperCase();
                return (
                    itemData.indexOf(textData) > -1 ||
                    emailData.indexOf(textData) > -1
                );
            });
            if (newData.length > 0) {
                setSearchedData(newData);
            }
        } else {
            setSearchedData(employeeData);
        }
    };

    return (
        <View style={styles.container}>
            {employeeData.length > 0 ? (
                <FlatList
                    data={searchedData}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listStyle}
                    renderItem={({item}) => (
                        <EmployeeCard
                            name={item?.name}
                            id={item.id}
                            profileImage={item?.profile_image}
                            companyName={item?.company?.name}
                            onPressCard={(id: number) => alert(id)}
                        />
                    )}
                    ListHeaderComponent={
                        <View>
                            <TextInput
                                underlineColorAndroid="transparent"
                                returnKeyType="search"
                                placeholder="Search Employees"
                                onChangeText={searchFilterFunction}
                            />
                        </View>
                    }
                />
            ) : (
                <View style={{flex: 1}}>
                    <ActivityIndicator />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        padding: 16,
    },
    listStyle: {
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
});
