import React, { useState } from 'react';
import { Dialog } from '@rneui/themed';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const MessageDialog = ({ title, text }) => {

    const [visible, setVisible] = useState(true);

    const toggleDialog = () => setVisible(current => !current);

    return (
        <Pressable onPress={() => toggleDialog()}
        style={{
            height: '100%'
        }}>
            <Text style={{
                textAlign: 'center',
                marginVertical: 20
            }}>No bookings!</Text>
            <Dialog
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}
            >
                <Dialog.Title title={title} />
                <Text>{text}</Text>
            </Dialog>
        </Pressable>
    );
}

export default MessageDialog;