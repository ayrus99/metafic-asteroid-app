import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AsteroidsProxy, NearEarthObjectsEntityProxy } from './AsteroidsProxy'

const API_Key = 'LPqR3gFrDBMRtvMwp63TEPdE55s9cULT2jhNWMib'
const API_ASTEROIDS =
  'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=' + API_Key

type RootStackParamList = {
  Asteroids: undefined
  Asteroid: { id: string }
}

type Props = NativeStackScreenProps<RootStackParamList, 'Asteroids'>

type State = {
  asteroids: NearEarthObjectsEntityProxy[] | null
}

class Asteroids extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      asteroids: [],
    }
  }

  getAsteroids = () => {
    fetch(API_ASTEROIDS, {
      method: 'GET',
    })
      .then((response) => {
        if (response.status !== 200) throw new Error()
        return response.json()
      })
      .then((data: AsteroidsProxy) => {
        return this.setState({
          asteroids: data.near_earth_objects,
        })
      })
      .catch((error) => {
        Alert.alert('Error', 'Something Wnet Wrong.')
      })
  }

  componentDidMount(): void {
    this.getAsteroids()
  }

  render(): React.ReactNode {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.state.asteroids?.map((asteroid, index): any => (
          <TouchableOpacity
            key={index}
            style={styles.asteroidContainer}
            onPress={() =>
              this.props.navigation.navigate('Asteroid', { id: asteroid.id })
            }
          >
            <View style={styles.infoContainer}>
              <Text style={styles.titleText}>Id: </Text>
              <Text>{asteroid.id}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.titleText}>Name: </Text>
              <Text>{asteroid.name}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.titleText}>Absolute Magnitude: </Text>
              <Text>{asteroid.absolute_magnitude_h}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.titleText}>Designation: </Text>
              <Text>{asteroid.designation}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStartColor: 'red',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  asteroidContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  titleText: {
    fontWeight: 'bold',
  },
})

export default Asteroids
