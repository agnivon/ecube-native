import { View, ScrollView } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import { s } from '../bootstrap';
import { Icon, ListItem } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import Space from './Space';

const renderItem = ({ item, idx }) => {
    return (
        <ListItem key={idx}>
            <Icon name={item.icon} />
            <ListItem.Content>
                <ListItem.Title>{item.label}</ListItem.Title>
                <Text>{item.value}</Text>
            </ListItem.Content>
        </ListItem>
    );
}

export default function BookingDetailsCard({ booking, showButtons = true }) {

    const navigation = useNavigation();

    const listItems = [
        { label: 'Booking ID', value: booking.bookingId, icon: 'info' },
        { label: 'Movie Title', value: booking.movie.title, icon: 'theaters' },
        { label: 'Show Date', value: booking.showDate, icon: 'today' },
        { label: 'Show Timings', value: booking.timings, icon: 'schedule' },
        { label: 'Seats', value: booking.seats, icon: 'star' }
    ]

    return (
        <ScrollView>
            <Card style={[s.m3]}>
                <Card.Image style={[s.overflowHidden, {
                    width: '100%',
                    height: 200
                }]} source={{ uri: booking.movie.posterImg }} />
                <View>
                    {listItems.map((item, idx) => {
                        return (renderItem({ item, idx }))
                    })}
                    {showButtons && (
                        <>
                            <Card.Divider />
                            <Button size="md" onPress={() => {
                                navigation.navigate('Bookings');
                            }} containerStyle={[s.my1]}>
                                Go to my Bookings
                            </Button>
                            <Button size="md" onPress={() => {
                                navigation.navigate('Home', {
                                    initialPage: 'Bookings'
                                });
                            }} containerStyle={[s.my2]}>
                                Go to Home
                            </Button>
                        </>
                    )
                    }
                </View>
            </Card>
            {showButtons && <Space lines={5} />}
        </ScrollView>

    );
}