import { View, Text, TouchableOpacity } from 'react-native';
import styles from './TagComponentStyle';
import Data from './Data';
import { useState, useEffect } from 'react';

const lightGreen = '#64FCD9';
const darkGreen = '#146D87';
const TagComponent = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      // Remove the tag if it's already selected
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
      console.log(selectedTags);
    } else {
      // Add the tag if it's not selected
      setSelectedTags([...selectedTags, tag]);
    }
  };
  useEffect(() => {
    // Reset selectedTags to an empty array when the component mounts
    setSelectedTags([]);
  }, []);
  return (
    <View style={styles.container}>
      {Data.map(({ id, tag }) => (
        <TouchableOpacity
          key={id}
          onPress={() => toggleTag(tag)}
          style={[
            styles.tag,
            {
              backgroundColor: selectedTags.includes(tag)
                ? lightGreen
                : darkGreen,
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: selectedTags.includes(tag) ? 'black' : lightGreen },
            ]}
          >
            {tag}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TagComponent;
