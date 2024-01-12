import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './TagsPageStyle';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import DotComponent from '../components/DotComponent/DotComponent';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { getAllTags } from '../../eventio-api';
import { setUserTags } from '../../eventio-api';

const imgPath = '../../assets/img/';
const lightGreen = '#64FCD9';
const darkGreen = '#146D87';

function TagsPage() {
  /* Page navigation */
  const navigation = useNavigation();
  /*  const navigateTo = () => {
    navigation.navigate('');
  }; */
  const [Tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextLoading, setNextLoading] = useState(false);

  useEffect(() => {
    getAllTags().then((res) => {
      setTags(res);
      console.log('All tags', JSON.stringify(res));
      setLoading(false);
    });
  }, []);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      // Remove the tag if it's already selected
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      // Add the tag if it's not selected
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const handleUserTags = () => {
    const selectedTagsId = selectedTags.map((tag) => tag.id);
    console.log(selectedTagsId);
    setNextLoading(true);
    setUserTags(selectedTagsId).then((res) => {
      setNextLoading(false);
      console.log(res.message);
      Alert.alert('User Tags', res.message);
    });
  };
  // Log the selected tags whenever they change
  useEffect(() => {
    console.log('Selected Tags:', selectedTags);
  }, [selectedTags]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#007BFF' />
      </View>
    );
  }

  return (
    <View style={styles.containerStyle}>
      {/* BACKGROUND*/}
      <View style={styles.backgroundImageStyle}>
        <Image
          style={styles.dotsStartStyle}
          source={require(imgPath + 'BackgroundDots.png')}
        />
        <View style={styles.tagsContainer}>
          {Tags.data.map((tag) => (
            <TouchableOpacity
              key={tag.id}
              onPress={() => toggleTag(tag)}
              style={[
                styles.tag,
                {
                  backgroundColor: selectedTags.includes(tag)
                    ? lightGreen
                    : darkGreen,
                },
              ]}
              disabled={
                !selectedTags.includes(tag) && selectedTags.length === 3
              }
            >
              <Text
                style={[
                  styles.tagText,
                  {
                    color: selectedTags.includes(tag) ? 'black' : lightGreen,
                  },
                ]}
              >
                {tag.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Image style={styles.arrow} source={require(imgPath + 'Arrow.png')} />
        <Image
          style={styles.dotsEndStyle}
          source={require(imgPath + 'BackgroundDots.png')}
        />
      </View>

      {/* INTERACTIVE BOX */}
      <View style={styles.interactiveContainerStyle}>
        <Text style={styles.mainHeaderTextStyle}>Izaberi 3 kategorije</Text>
        <Text style={styles.mainText}>
          Naša aplikacija će vam omogućiti da budete u toku s najnovijim
          događajima, koncertima, izložbama, sportskim manifestacijama i mnogo
          čimbenim aktivnostima koje vas zanimaju.
        </Text>

        <View style={styles.dotsContainer}>
          <DotComponent size={15} backgroundColor={'#C1C9DC'} />
          <DotComponent size={15} backgroundColor={'#004972'} />
        </View>
        <ButtonComponent
          disabled={selectedTags.length < 3}
          onPress={handleUserTags}
          text={
            loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='#007BFF' />
              </View>
            ) : (
              'Next'
            )
          }
        />
      </View>
    </View>
  );
}

export default TagsPage;
