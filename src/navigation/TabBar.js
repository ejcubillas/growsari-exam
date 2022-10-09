import { 
  HStack, 
  Pressable
 } from 'native-base';
import React from 'react';
import { BoxIcon, CartIcon } from '../Icons';
import ShopIcon from '../Icons/ShopIcon';

function TabBar(props) {

  const state = props.state;
  const descriptors = props.descriptors;
  const navigation = props.navigation;
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  
  if (focusedOptions?.tabBarStyle?.display === "none") {
    return null;
  }

  

  return (
    <HStack justifyContent="space-between" bg="white" alignItems="flex-end" px="30px" py="16px">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        let icon = null;
            
        if (label === 'shop') {
          icon = <ShopIcon size={40} active={isFocused ? true : false}/>
        }else if (label === 'cart') {
          icon = <CartIcon size={50} active={isFocused ? true : false}/>
        }else if (label === 'orders') {
          icon = <BoxIcon size={40} active={isFocused ? true : false}/>
        }

            
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          > 
            {icon}
          </Pressable>
        );
      })}
    </HStack>
  );
}

export default TabBar