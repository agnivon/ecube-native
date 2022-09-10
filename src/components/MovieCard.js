import { View, TouchableOpacity } from 'react-native';
import { Text, Card, AirbnbRating, Badge, Button } from '@rneui/themed';
import { s } from '../bootstrap';
import { useNavigation } from '@react-navigation/native';

export default function MovieCard({ movie }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Details", { id: movie.id })}>
            <Card style={[s.m3]}>
                <Card.Image style={[s.overflowHidden, {
                    width: '100%',
                    height: 200
                }]} source={{ uri: movie.posterImg }} />
                <View>
                    <View style={[s.p2]}>
                        <Text h3>{movie.title}</Text>
                        <Text h5>{movie.director}</Text>
                    </View>
                    <AirbnbRating isDisabled={true} defaultRating={movie.rating}
                        showRating={false} size={20} />
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
                    <Text style={[s.cardTextLastChild, s.p2, {
                        textAlign: 'justify'
                    }]}>{movie.plot.slice(0, 200)}...</Text>
                    <Button size="md" onPress={() => {
                        navigation.navigate('Book', {
                            id: movie.id
                        });
                    }}>Book</Button>
                </View>
            </Card>
        </TouchableOpacity>
    );
}