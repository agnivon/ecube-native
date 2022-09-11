import { View, FlatList } from 'react-native';
import { s, c } from '../bootstrap';

import MovieCard from './MovieCard';
import Space from './Space';

const renderItem = ({ item }) => {
    return (
        <MovieCard key={item.id} movie={item} />
    );
}

export default function MovieCardList({ movies }) {

    const DATA= movies;

    return (
        <View style={[s.flex1]}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListFooterComponent={<Space lines={8} />}
            />
        </View>
    );
}