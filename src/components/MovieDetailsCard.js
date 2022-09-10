import { View, ScrollView } from 'react-native';
import { Text, Card, AirbnbRating, Badge, Button } from '@rneui/themed';
import { s } from '../bootstrap';
import { Icon, ListItem } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

import Space from './Space';

const renderItem = ({ item, idx }) => {
    return (
        <ListItem bottomDivider key={idx}>
            <Icon name={item.icon} />
            <ListItem.Content>
                <ListItem.Title>{item.label}</ListItem.Title>
                {(!(['Genre', 'Rating'].includes(item.label))) ?
                    <Text>{item.value}</Text> : <>{item.value}</>}
            </ListItem.Content>
        </ListItem>
    );
}

export default function MovieDetailsCard({ movie }) {

    const navigation = useNavigation();

    const genreBadges = (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 10,
                marginBottom: 10,
            }}
        >
            {movie.genre.map((x, i) => {
                return (<Badge value={x} key={i} status="warning"
                    containerStyle={[s.mx1]} />);
            })}
        </View>
    );

    const ratingStars = (<AirbnbRating isDisabled={true} defaultRating={movie.rating}
        showRating={false} size={20} />);

    const listItems = [
        { label: 'Title', value: movie.title, icon: 'theaters' },
        { label: 'Director', value: movie.director, icon: 'person' },
        { label: 'Genre', value: genreBadges, icon: 'info' },
        { label: 'Release Date', value: (new Date(movie.releaseDate)).toLocaleDateString(), icon: 'event' },
        { label: 'Duration', value: movie.duration, icon: 'timelapse'},
        { label: 'Rating', value: ratingStars, icon: 'star' }
    ]

    return (
        <ScrollView>
            <Card style={[s.m3]}>
                <Card.Image style={[s.overflowHidden, {
                    width: '100%',
                    height: 200
                }]} source={{ uri: movie.posterImg }} />
                <View>
                    {/* <FlatList
                    data={DATA}
                    renderItem={renderItem}
                /> */}
                    {listItems.map((item, idx) => {
                        return (renderItem({ item, idx }))
                    })}
                    <Card.Divider />
                    <Text h4>Plot</Text>
                    <Text style={{ textAlign: 'justify' }}>{movie.plot}</Text>
                    <Button size="md" onPress={() => {
                        navigation.navigate('Book', { id: movie.id });
                    }}>Book</Button>
                </View>
            </Card>
            <Space lines={5} />
        </ScrollView>

    );
}