import { View, Modal, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function PostDetails({ username, body, date }) {
  return (
    <View>
      <Modal>
        <Text>
          {username}
        </Text>
        <Text>
          {body}
        </Text>
        <Text>
          {date}
        </Text>
      </Modal>
    </View>
  );
}

PostDetails.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
