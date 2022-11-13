import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import FriendList from 'src/modules/friends/friend-list';
import RoomList from 'src/modules/rooms/room-list';
import { Colors } from 'react-native-ui-lib';

const TabChatScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FriendList />
        <View style={{ flex: 1 }}>{<RoomList />}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default TabChatScreen;
