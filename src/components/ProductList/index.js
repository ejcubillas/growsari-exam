import { Box, Pressable, Image, Center } from "native-base";
import { moneyFormat } from '../../utils/number-format';
import { Dimensions } from 'react-native';
import SectionContainer from "../SectionContainer";
import Typography from "../Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCartModal from "../AddToCartModal";
import { FlashList } from "@shopify/flash-list";

function ProductList(props) {
  const windowHeight = Dimensions.get('window').height;
  const dispatch = useDispatch();
  const { product } = useSelector(state => state); 
  const [thumbnailSize, setThumbnailSize] = useState({
    width: 0,
    height: 0,
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addToCartModal, setAddToCartModal] = useState({
    isVisible: false,
    product: null
  })

  useEffect(() => {
    const filter = {
      limit: props.filter?.limit || 0,
      keyword: props.filter?.keyword || '',
      category: props.filter?.category || ''
    }
    filterProduct(filter);
  }, [props.filter])

  const filterProduct = async ({limit, keyword, category}) => {
    setLoading(true);
    setProducts([]);
    const newList = await searchProduct({limit, keyword, category});
    setProducts(newList);

    setTimeout(() => {
      setLoading(false);
    }, 500)
    
  }

  const searchProduct = ({limit, keyword, category}) => new Promise((resolve, reject) => {
    let filterCount = 0;
    const newList = product.products.filter((val, i) => {
      if (!String(val.display_name).toLowerCase().includes(String(keyword).toLowerCase())) {
        return false;
      }
      if (category !== '' && category !== val.category) {
        return false;
      }
      if(limit !== 0 && limit <= filterCount) {
        return false;
      }
      filterCount++;
      return true;
    })

    resolve(newList);
  })

  const renderItem = ({item}) => {
    {
      return (
        <Pressable
          p="2"
          pb="4"
          w="full"
          onPress={() => {
            console.log('eee');
            setAddToCartModal({
              isVisible: true,
              product: item
            })
          }}
        >
          <Box>
            <Image
              source={require('../../img/bearbrand.png')}
              w="full"
              h={thumbnailSize.width}
              alt="Product Image"
            />
          </Box>
          <Box py="2">
            <Typography
              type="price"
              text={`${moneyFormat(item.price)}`}
            />
            <Typography
              type="description"
              text={item.display_name}
            />
          </Box>              
        </Pressable>
      )
    }
  }

  return (
    <SectionContainer
      onLayout={({nativeEvent}) => {
        if (thumbnailSize.width === 0) {
          setThumbnailSize({
            ...thumbnailSize,
            width: nativeEvent.layout.width/2
          });
        }
      }}
      pt="0"
      flex="1"
      bg="white"
    >
      
      {loading ?
        <Center w="full" mt="5">
          <Typography type="description" textAlign="center" text="Please wait..."/>
        </Center> :
        <Box h={windowHeight-70} w="full">
          <FlashList
            data={products}
            renderItem={renderItem}
            estimatedItemSize={100}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      }
      <AddToCartModal
        {...addToCartModal}
        onClose={() => setAddToCartModal({ isVisible: false, product: null })}
      />
    </SectionContainer>
    
  );
}

export default ProductList;