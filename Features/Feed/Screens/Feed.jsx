import {
  Keyboard, Button, Text, View, TextInput,
} from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Posts from '../Components/Posts';

export default function Feed({ navigation }) {
  const GIVEN_POSTS = [
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
      date: 'test-time',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
      date: 'test-time',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
      date: 'test-time',
    },
  ];
  const [posts, setPosts] = useState(GIVEN_POSTS);

  const [author, setAuthor] = useState('');
  const [text, onChangeText] = useState('');

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const updatePosts = () => {
    const date = new Date();
    const newPosts = [...posts,
      {
        _id: posts.length + 1, username: author, body: text, date: date.toString(),
      },
    ];
    setPosts(newPosts);
    onChangeText('');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{
          borderColor: 'black',
          width: 200,
          borderWidth: 2,
          borderRadius: 10,
        }}
        onChangeText={setAuthor}
        value={author}
        onSubmitEditing={Keyboard.dismiss}
        placeholder="Author"
      />
      <TextInput
        style={{
          borderColor: 'black',
          width: 200,
          borderWidth: 2,
          borderRadius: 10,
        }}
        onChangeText={onChangeText}
        value={text}
        onSubmitEditing={Keyboard.dismiss}
        placeholder="Input text here..."
      />
      <Button title="Post" onPress={updatePosts} />
      {
        posts.map(({
          _id, username, body, date,
        }) => (
          <View style={{
            width: '75%', padding: 4, borderWidth: 2, borderColor: 'black', borderRadius: 10,
          }}
          >
            <Text>{_id}</Text>
            <Posts username={username} body={body} date={date} />
          </View>
        ))
      }
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
