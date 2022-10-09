
import { Text, Box, Center, Pressable, HStack, FlatList, Image, ScrollView, Input } from "native-base";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import CategoryModal from "../components/CategoryModal";
import { useNavigation } from '@react-navigation/native';
import { BackIcon, CartIcon, FilterIcon } from "../Icons";

let timeout = null;
function SearchProductScreen(props) {
  const navigation = useNavigation();
  const [filter, setFilter] = useState({
    keyword: '',
    limit: 0,
    category: ''
  });
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  useEffect(() => {
    if (props.route?.params?.category) {
      console.log(props.route.params.category);
      setFilter({
        ...filter,
        category: props.route.params.category
      })
    }
  }, [])

  useEffect(() => {
    props.navigation.setOptions({
      header: () => {
        return (
          <HStack alignItems="center" bg="white" py="2">
            <Pressable
                px="4"
                onPress={() => navigation.goBack()}
              >
                <BackIcon size={35}/>
              </Pressable>
            <Box flex="1">
              <Box bg="main.gray" rounded={20}> 
                <Input
                  variant="unstyled"
                  color="main.text"
                  fontFamily="Inter"
                  placeholder="Search..."
                  placeholderTextColor="main.placeholder"
                  fontSize={14}
                  px="4"

                  fontWeight={700}
                  onChangeText={(val) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                      setFilter({...filter, keyword: val});
                    }, 300)
                  
                  }}
                  
                />
              </Box>
            </Box>
            
            <Pressable
                px="4"
                onPress={() => {
                  setShowCategoryModal(true);
                }}
              >
                <FilterIcon size={38}/>
              </Pressable>
          </HStack>

        )
      },
    })
  }, [])

  return (
    <>
      <ProductList
        filter={filter}
      />
      <CategoryModal
        isVisible={showCategoryModal}
        selected={filter.category}
        onClose={() => setShowCategoryModal(false)}
        onSelect={(category) => {
          setFilter({...filter, category: category});
          setShowCategoryModal(false);
        }}
      />
    </>
    
  );
}

export default SearchProductScreen;