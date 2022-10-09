import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import { Pressable, Text } from 'native-base'; 
import { BackIcon, CartIcon } from '../Icons';
const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native'
import CheckoutScreen from '../screens/CheckoutScreen';
import Typography from '../components/Typography';

function CartStack() {

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
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }}/>
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          headerLeft: () => {
            return (
              <Pressable
                pl="4"
                pr="2"
                onPress={() => navigation.navigate('CartScreen')}  
              >
                <BackIcon/>
              </Pressable>
            )
          },

          headerTitle: () => {
            return (
              <Typography
                type="page-title"
                text="Checkout"
              />
            )
          }
        }}
      />
      
    </Stack.Navigator>
  );
}

export default CartStack;