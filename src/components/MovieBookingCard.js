import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import { s } from '../bootstrap';
import { Icon, ListItem } from '@rneui/base';
import React, { useState } from 'react';
import { Dropdown as RNEDropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { confirmBooking } from '../actions';

import Space from './Space';
import sha256 from 'crypto-js/sha256';

const renderItem = ({ item, idx }) => {
    return (
        <ListItem bottomDivider key={idx}>
            <Icon name={item.icon} />
            <ListItem.Content>
                <ListItem.Title>{item.label}</ListItem.Title>
                {item.value}
            </ListItem.Content>
        </ListItem>
    );
}

const Dropdown = ({ data, value, onChange }) => {
    // console.log(data, value);
    return (
        <RNEDropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={onChange}
        />
    );
}

export default function MovieBookingCard({ movie }) {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const stringifyDate = (dateInMillis) => {
        return (new Date(dateInMillis)).toLocaleDateString();
    }

    const labelValue = (x) => {
        return ({
            label: String(x),
            value: String(x)
        });
    }

    const onChangeProp = (key) => {
        return (
            (item) => setBookingDetails(current => {
                // console.log(current);
                return ({
                    ...current,
                    [key]: item.value
                });
            })
        );
    }

    const submitBooking = () => {
        const bookingId = sha256(JSON.stringify(bookingDetails)).toString();
        dispatch(confirmBooking(
            {
                ...bookingDetails,
                bookingId: bookingId
            }
        ));
        navigation.navigate('Booking', { id: bookingId });
    }

    const [bookingDetails, setBookingDetails] = useState({
        bookingId: null,
        movieId: movie.id,
        showDate: stringifyDate(movie.showings[0].date),
        timings: '',
        seats: '1',
        movie: movie
    });

    // console.log(bookingDetails);

    const listItems = [
        {
            label: 'Title',
            value: <Text>{movie.title}</Text>,
            icon: 'theaters'
        },
        {
            label: 'Show Date',
            value: <Dropdown
                data={movie.showings
                    .map(show => labelValue(stringifyDate(show.date)))}
                value={bookingDetails.showDate}
                onChange={onChangeProp('showDate')}
            />,
            icon: 'today'
        },
        {
            label: 'Timings',
            value: <Dropdown
                data={movie.showings
                    .filter(show => stringifyDate(show.date) === bookingDetails.showDate)
                [0].timings
                    .map(timing => labelValue(timing))}
                value={bookingDetails.timings}
                onChange={onChangeProp('timings')}
            />,
            icon: 'schedule'
        },
        {
            label: 'No. of seats',
            value: <Dropdown
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => labelValue(x))}
                value={bookingDetails.seats}
                onChange={onChangeProp('seats')}
            />,
            icon: 'star'
        },
    ]

    return (
        <ScrollView>
            <Card style={[s.m3]}>
                <Card.Image style={[s.overflowHidden, {
                    width: '100%',
                    height: 200
                }]} source={{ uri: movie.posterImg }} />
                <View>
                    {listItems.map((item, idx) => {
                        return (renderItem({ item, idx }))
                    })}
                    <Card.Divider />
                    <Button size="md" onPress={submitBooking}>Confirm Booking</Button>
                </View>
            </Card>
            <Space lines={5} />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,

    },
    dropdown: {
        height: 50,
        width: 200,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginVertical: 5
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});