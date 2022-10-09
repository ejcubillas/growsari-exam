import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import SearchProductScreen from '../screens/SearchProductScreen';
import ShopScreen from '../screens/ShopScreen';
import { Pressable, Text } from 'native-base'; 
import { BackIcon, CartIcon } from '../Icons';
const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native'

function ShopStack() {

  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitle: '',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        },
      }}
    >
      <Stack.Screen name="ShopScreen" component={ShopScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SearchProductScreen" component={SearchProductScreen}/>
    </Stack.Navigator>
  );
}

export default ShopStack;