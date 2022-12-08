import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Asteroids from '../screens/Asteroids'
import Asteroid from '../screens/Asteroid'

type RootStackParamList = {
  Asteroids: undefined
  Asteroid: { id: string }
}

const RootStack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Asteroids" component={Asteroids} />
        <RootStack.Screen
          name="Asteroid"
          component={Asteroid}
          initialParams={{ id: '3542519' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
