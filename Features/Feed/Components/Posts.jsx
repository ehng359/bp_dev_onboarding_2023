import { View, Text, Button } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default function Posts({ username, body, date }, navigation) {
  return (
    <View>
      <Text>
        {username}
      </Text>
      <Text>
        {body}
      </Text>
      <Text>
        {date}
      </Text>
      {/* <Button onPress={() => navigation.navigate()}/> */}
    </View>
  );
}

Posts.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
