import { Box, HStack, Image } from 'native-base';
import Modal from 'react-native-modal';
import Button from '../Button';
import Typography from '../Typography';
import { ToastAndroid } from 'react-native';
import { useEffect, useState } from 'react';
import { addItem } from '../../redux/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { moneyFormat } from '../../utils/number-format';

function AddToCartModal(props) {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state); 
  const [product, setProduct] = useState({
    id: '',
    display_name: '',
    price: 0,
    qty: 1
  });

  useEffect(() => {
    if (props.product) {
      setProduct({
        ...product,
        display_name: props.product.display_name,
        price: props.product.price,
        id: props.product.id,
        qty: 1
      })
    }
    
  }, [props.product])

  const addToCart = () => {
    console.log(product);
    dispatch(addItem(product));
    props.onClose();
    ToastAndroid.show('Added to Cart', 300);
  }

  const handleCartQty = (val) => {
    if (val === -1 && product.qty === 1) {
      return;
    }

    setProduct({
      ...product,
      qty: product.qty + val
    })
  }

  return (
    <Modal
      isVisible={props.isVisible}
      onBackButtonPress={props.onClose}
      onBackdropPress={props.onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      style={{
        justifyContent: 'flex-end', 
        bacgroundColor: 'transparent',
        margin: 0
      }}
    >
      <Box maxHeight="50%" p="5" bg="white">
        <Typography
          type="section-title"
          text="Add to cart"
        />
        <HStack space={5} mt="2">
          <Box flex="2">
            <Typography
              text={product.display_name}
            />
          </Box>
          <Box flex="1">
            <Typography
              type="price"
              text={moneyFormat(product.price)}
              align="right"
            />
          </Box>
        </HStack>

        <HStack justifyContent="space-between" alignItems="center" mt="5" mb="5">
          <Box w="80px" h="80px">
            <Image
              source={require('../../img/bearbrand.png')}
              alt="image"
              w="80px"
              h="80px"
            />
          </Box>
          <Box>
            <HStack alignItems="center" space="4">
              <Button onPress={() => handleCartQty(-1)}>-</Button>
              <Box>
                <Typography
                  text={product.qty}
                />
                
              </Box>
              <Button onPress={() => handleCartQty(1)}>+</Button>
            </HStack>
          </Box>
        </HStack>

        <Button
          variant="primary"
          onPress={addToCart}
        >
          ADD TO CART
        </Button>
        

      </Box>
     
    </Modal>
  );
}

export default AddToCartModal;