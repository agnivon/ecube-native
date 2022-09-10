import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { Provider, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from './actions';
import store from './store';

import HomePage from './containers/HomePage';
import MovieDetailsPage from './containers/MovieDetailsPage';
import MovieBookingPage from './containers/MovieBookingPage';
import BookingDetailsPage from './containers/BookingDetailsPage';
import BookingsPage from './containers/BookingsPage';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name="Home" component={HomePage} options={{
            title: 'Home'
          }} />
          <Stack.Screen name="Details" component={MovieDetailsPage} options={{
            title: 'Details'
          }} />
          <Stack.Screen name="Book" component={MovieBookingPage} options={{
            title: 'Book'
          }} />
          <Stack.Screen name="Booking" component={BookingDetailsPage} options={{
            title: 'Booking'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
