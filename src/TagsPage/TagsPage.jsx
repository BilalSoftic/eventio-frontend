import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './TagsPageStyle';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import DotComponent from '../components/DotComponent/DotComponent';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { getAllTags, setUserTags } from '../../eventio-api';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';

const imgPath = '../../assets/img/';
const lightGreen = '#64FCD9';
const darkGreen = '#146D87';

function TagsPage({ route }) {
  const navigation = useNavigation();

  const [Tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [language, setLanguage] = useState('eng');
  const [loading, setLoading] = useState(true);

  /* on load */
  useEffect(() => {
    getAllTags()
      .then((res) => {
        setTags(res.data);
        console.log('All tags', JSON.stringify(res));
        console.log('language Tags page', route.params.language);
        setLanguage(route.params.language);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  /* toggle tag */
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    console.log(selectedTags);
  };

  /* update user tags */
  const handleUserTags = () => {
    const selectedTagsId = selectedTags.map((tag) => tag.id);

    setUserTags(selectedTagsId)
      .then((res) => {
        console.log(res.message);
        navigation.navigate('MainPage');
      })
      .catch((error) => console.log(error));
  };

  /* log selected tags */
  useEffect(() => {
    console.log('Selected Tags:', selectedTags);
  }, [selectedTags]);

  /* loading */
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.containerStyle}>
      {/* BACKGROUND*/}
      <View style={styles.backgroundImageStyle}>
        <Image
          style={styles.dotsStartStyle}
          source={require(imgPath + 'BackgroundDots.png')}
        />
        <View style={styles.tagsContainerStyle}>
          {Tags.data.map((tag) => (
            <TouchableOpacity
              key={tag.id}
              onPress={() => toggleTag(tag)}
              style={[
                styles.tagStyle,
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
                  styles.tagTextStyle,
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

        <Image
          style={styles.arrowStyle}
          source={require(imgPath + 'Arrow.png')}
        />
        <Image
          style={styles.dotsEndStyle}
          source={require(imgPath + 'BackgroundDots.png')}
        />
      </View>

      {/* INTERACTIVE BOX */}
      <View style={styles.interactiveContainerStyle}>
        <Text style={styles.mainHeaderTextStyle}>
          {language === 'bih' ? 'izaberi 3 kategorije' : 'choose 3 categories'}
        </Text>
        <Text style={styles.mainTextStyle}>
          {language === 'bih'
            ? 'Izaberite kategorije koje odražavaju vaše interesovanje. Vaše odabirane kategorije će personalizovati vaše iskustvo našom aplikacijom, omogućavajući vam da dobijete relevantne informacije o događajima i aktivnostima koje vas zanimaju.'
            : 'Choose categories that reflect your interests. Your selected categories will personalize your experience with our application, allowing you to receive relevant information about events and activities that interest you.'}
        </Text>

        <View style={styles.dotsContainerStyle}>
          <DotComponent size={15} backgroundColor={'#C1C9DC'} />
          <DotComponent size={15} backgroundColor={'#004972'} />
        </View>
        <ButtonComponent
          disabled={selectedTags.length < 3}
          onPress={handleUserTags}
          text={language === 'bih' ? 'Nastavi' : 'Next'}
        />
      </View>
    </View>
  );
}

export default TagsPage;
