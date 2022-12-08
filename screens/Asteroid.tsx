import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AsteroidProxy } from './AsteroidProxy'

const API_Key = 'LPqR3gFrDBMRtvMwp63TEPdE55s9cULT2jhNWMib'
const API_ASTEROID = (id: string) =>
  `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_Key}`

type RootStackParamList = {
  Asteroids: undefined
  Asteroid: { id: string }
}

type Props = NativeStackScreenProps<RootStackParamList, 'Asteroid'>

type State = {
  asteroid: AsteroidProxy | null
}

class Asteroid extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      asteroid: null,
    }
  }

  getAsteroid = () => {
    fetch(API_ASTEROID(this.props.route.params.id), {
      method: 'GET',
    })
      .then((response) => {
        if (response.status !== 200) throw new Error()
        return response.json()
      })
      .then((data: AsteroidProxy) => {
        return this.setState({
          asteroid: data,
        })
      })
      .catch((error) => {
        Alert.alert('Error', 'Something Wnet Wrong.')
      })
  }

  componentDidMount(): void {
    this.getAsteroid()
  }

  render(): React.ReactNode {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Id: </Text>
          <Text>{this.state.asteroid?.id}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Name: </Text>
          <Text>{this.state.asteroid?.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Designation: </Text>
          <Text>{this.state.asteroid?.designation}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Absolute Magnitude: </Text>
          <Text>{this.state.asteroid?.absolute_magnitude_h}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Estimated Diameter Max: </Text>
          <Text>
          {
            this.state.asteroid?.estimated_diameter.kilometers
              .estimated_diameter_max
          }
        </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Estimated Diameter Min: </Text>
          <Text>
          {
            this.state.asteroid?.estimated_diameter.kilometers
              .estimated_diameter_min
          }
        </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Is Potentially Hazardous Asteroid: </Text>
          <Text>
          {this.state.asteroid?.is_potentially_hazardous_asteroid.toString()}
        </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Is Sentry Object: </Text>
          <Text>{this.state.asteroid?.is_sentry_object.toString()}</Text>
        </View>

     
      
        
      
        
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  screenText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 20,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  titleText: {
    fontWeight: 'bold',
  },
})

export default Asteroid
