import { Text, View } from 'react-native';
import { s } from '../bootstrap';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../actions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LatestMoviesPage from './LatestMoviesPage';
import BookingsPage from './BookingsPage';
import { Icon } from "@rneui/themed";

export default function HomePage({ route, navigation }) {

    const dispatch = useDispatch();

    const initialPage = route.params?.initialPage || 'LatestMovies';

    useEffect(() => {
        dispatch(getMovies('latest'));
    }, [dispatch]);

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName={initialPage}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'LatestMovies') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Bookings') {
                        iconName = focused ? 'ticket' : 'ticket';
                    }
                    return <Icon name={iconName} type="font-awesome" />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}>
            <Tab.Screen name="LatestMovies" component={LatestMoviesPage} options={{ title: 'Latest Movies' }} />
            <Tab.Screen name="Bookings" component={BookingsPage} />
        </Tab.Navigator>
    );
}