import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg';
import { CartIcon } from '../Icons';
import TabBar from './TabBar';
import ShopStack from './Shop';
import CartStack from './Cart';
import OrderStack from './Order';
// routes/stack
const Tab = createBottomTabNavigator();
const hideTabRoutes = [
  'SearchProductScreen',
  'CheckoutScreen',
  'OrderDetailScreen'
];

function MainNav () {
  
  getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    if (hideTabRoutes.includes(routeName)) {
      return 'none';
    }
    return "flex";
  }

  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props}/>}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarItemStyle: {
          alignItems: 'center'
        },
      }}
    >
      
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={({route}) => ({
          tabBarLabel: 'shop',
          tabBarStyle: {
            display: getTabBarVisibility(route)
          }
        })}  
      />

      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={({route}) => ({
          tabBarLabel: 'cart',
          tabBarStyle: {
            display: getTabBarVisibility(route)
          }
        })}  
      />

      <Tab.Screen
        name="Orders"
        component={OrderStack}
        options={({route}) => ({
          tabBarLabel: 'orders',
          tabBarStyle: {
            display: getTabBarVisibility(route)
          }
        })}  
      />
      

    </Tab.Navigator>
  );
}

export default MainNav;