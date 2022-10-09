import { 
  HStack, 
  Pressable, 
  VStack, 
} from "native-base";
import Typography from "../Typography";
import {
  LaundryIcon, 
  MilkIcon, 
  AlcoholIcon, 
  CigaretteIcon,
  CoffeeIcon,
  MoreIcon,
} from '../../Icons';
import { useNavigation } from "@react-navigation/native";

function Categories(props) {
  const naviagtion = useNavigation();
  const categories = [
    {
      label: 'Laundry',
      category: 'Laundry Products',
      icon: <LaundryIcon active={true}/>,
    },
    {
      label: 'Milk',
      category: 'Milk',
      icon: <MilkIcon active={true}/>,
    },
    {
      label: 'Coffee',
      category: 'Coffee',
      icon: <CoffeeIcon active={true}/>,
    },
    {
      label: 'Alcohol',
      category: 'Alcohol',
      icon: <AlcoholIcon active={true}/>,
    },
    ,{
      label: 'Cigarettes',
      category: 'Cigarettes',
      icon: <CigaretteIcon active={true}/>,
    },
    {
      label: 'More',
      category: '',
      icon: <MoreIcon active={true} size={50}/>,
    }
  ];

  return (
    <HStack flexWrap="wrap">
      {categories.map((val, i) => {
        return (
          <Pressable
            key={i}
            w="1/3"
            onPress={() => {
              naviagtion.navigate('SearchProductScreen', {
                category: val.category
              });
            }}
            >
            <VStack space="1" alignItems="center" justifyContent="center" p="3">
              {val.icon}
              <Typography
                type="icon-label"
                text={val.label}
                align="center"
              />
            </VStack>
          </Pressable>
        )
      })}
    </HStack>
  );
}
export default Categories;