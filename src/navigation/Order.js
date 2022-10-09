import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import { Pressable, Text } from 'native-base'; 
import { BackIcon, CartIcon } from '../Icons';
import { useNavigation } from '@react-navigation/native'
import Typography from '../components/Typography';
import OrderScreen from '../screens/OrderScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
const Stack = createStackNavigator();
function OrderStack() {

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
      <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ headerShown: false }}/>
      <Stack.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={{
          headerLeft: () => {
            return (
              <Pressable
                pl="4"
                pr="2"
                onPress={() => navigation.navigate('OrderScreen')}  
              >
                <BackIcon/>
              </Pressable>
            )
          },

          headerTitle: () => {
            return (
              <Typography
                type="page-title"
                text="Order Details"
              />
            )
          }
        }}
      />
      
    </Stack.Navigator>
  );
}

export default OrderStack;