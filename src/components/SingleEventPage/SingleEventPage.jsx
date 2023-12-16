import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import StaticTagComponent from '../StaticTagComponent/StaticTagComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import VenueSocialsButtonComponent from '../VenueSocialsButtonComponent/VenueSocialsButtonComponent';

const SingleEventPage = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.backgroundImageContainerStyle}>
        <Image
          source={require('../../../assets/horizontalScrollImages/image-1.png')}
          style={styles.backgroundImageStyle}
        />
      </View>
      <View style={styles.eventInformationContainerStyle}>
        <Text style={styles.headerStyle}>
          Kakva ti je zena takav ti je zivot
        </Text>

        <View style={styles.venueContainerStyle}>
          <Image
            style={styles.venueImageStyle}
            source={require('../../../assets/img/venueImage.png')}
          />
          <Text style={styles.venueNameStyle}>Mondaco</Text>
        </View>
        <View style={styles.tagsContainerStyle}>
          <StaticTagComponent />
        </View>
        <View style={styles.informationContainerStyle}>
          <View style={styles.informationStyle}>
            <Icon name='map-marker' style={styles.informationIconStyle} />
            <Text style={styles.informationTextStyle}>
              Branilaca Sarajeva 24, Sarajevo
            </Text>
          </View>
          <View style={styles.informationStyle}>
            <Icon name='clock-o' style={styles.informationIconStyle} />
            <Text>18:00 - 20:00</Text>
          </View>
          <View style={styles.informationStyle}>
            <Icon name='credit-card' style={styles.informationIconStyle} />
            <Text>15 BAM</Text>
          </View>
        </View>
        <View style={styles.detailsContainerStyle}>
          <Text style={styles.detailsHeaderStyle}>Details</Text>
          <ScrollView style={styles.detailsScrollStyle}>
            <Text style={styles.detailsStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur esse facilis quidem dolores sit veritatis
              exercitationem, veniam laudantium, quam recusandae voluptas in et
              doloribus amet excepturi, commodi numquam. Soluta vitae quam, quae
              officiis doloribus praesentium blanditiis accusantium incidunt
              repudiandae minus tempore mollitia consequatur, unde sunt impedit
              voluptate numquam adipisci odio repellat itaque doloremque
              dolorum. Maiores voluptates, qui debitis dolores vitae nesciunt
              quo! Cum amet nostrum fugit, harum, nesciunt blanditiis sed
              voluptate odit maiores hic laboriosam ipsa eaque esse. Similique
              in, voluptatibus, beatae amet pariatur placeat dicta numquam
              possimus autem officiis ab dignissimos, neque sit illum sint sunt
              optio magni assumenda.
            </Text>
          </ScrollView>
        </View>
        <View style={styles.socialsContainerStyle}>
          <VenueSocialsButtonComponent />
          <VenueSocialsButtonComponent />
          <VenueSocialsButtonComponent />
          <VenueSocialsButtonComponent />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  border: { borderWidth: 2, borderColor: 'red' },
  containerStyle: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
  },
  backgroundImageContainerStyle: {
    width: '100%',
    height: '45%',
  },
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },
  eventInformationContainerStyle: {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  headerStyle: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  venueContainerStyle: {
    marginBottom: 15,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  venueImageStyle: { height: 40, width: 40, borderRadius: 20 },
  venueNameStyle: { fontSize: 20, fontWeight: '500' },

  tagsContainerStyle: { marginBottom: 10 },
  informationContainerStyle: {
    paddingVertical: 10,
    gap: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(80, 80, 80, 0.3)',
  },
  informationStyle: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  informationIconStyle: { fontSize: 20, color: '#898989' },
  informationTextStyle: { fontSize: 16 },
  detailsContainerStyle: {
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(80, 80, 80, 0.3)',
  },
  detailsHeaderStyle: { fontSize: 20, marginBottom: 10, fontWeight: '500' },
  detailsScrollStyle: { height: '20%' },
  detailsStyle: { fontSize: 16, lineHeight: 22, opacity: 0.5 },
  socialsContainerStyle: {
    gap: 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
export default SingleEventPage;
