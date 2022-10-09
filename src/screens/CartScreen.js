
import {
  Box,
  Center,
  Pressable,
  HStack,
  Image,
} from "native-base";
import { moneyFormat } from '../utils/number-format';
import ScrollContainer from "../components/ScrollContainer";
import SectionContainer from "../components/SectionContainer";
import Typography from "../components/Typography";
import { useNavigation } from '@react-navigation/native';
import { DeleteIcon } from "../Icons";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { adjustQty, removeItem } from '../redux/slices/cart.slice';
import { useEffect, useState } from "react";
import { EmptyCart } from "../svgs";

function CartScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalTmp = 0;
    cart.items.map((val, i) => {
      totalTmp += (val.qty * val.price);
    });
    setTotal(totalTmp);
  }, [cart.items])

  return (
    <>
    <SectionContainer>
      <Typography
        type="page-title"
        text="My Cart"
      />
    </SectionContainer>
    {cart.items.length === 0 ?
      <SectionContainer flex="1">
        <Center mt="6">
          <EmptyCart/>
          <Box mt="6">
            <Typography
              text="Your cart is empty."
              align="center"
              type="sub-heading"
            />
          </Box>
        </Center>
      </SectionContainer>
    :
    <>
      <ScrollContainer>
        <SectionContainer flex="1">
          {cart.items.map((val, i) => {
            return (
              <HStack 
                alignItems="center" 
                space="1" 
                mb="6" 
                px="1" 
                key={i}>
                <Box alignSelf="flex-start">
                  <Image
                    source={require('../img/bearbrand.png')}
                    alt="img"
                    h="75px"
                    w="75px"
                  />
                </Box>
                <Box flex="1">
                  <HStack space="5">
                    <Box flex="1">
                      <Typography
                        type="description"
                        text={val.display_name}
                      />
                      <Typography
                        type="status"
                        align="left"
                        text={moneyFormat(val.price)}
                      />
                    </Box>
                    <Pressable
                      onPress={() => dispatch(removeItem({ id: val.id }))}
                    >
                      <DeleteIcon size="20"/>
                    </Pressable>
                  </HStack>
                  <HStack justifyContent="space-between" alignItems="center">
                    <HStack alignItems="center" space="4">
                      <Button 
                        btnSize="sm"
                        onPress={() => {
                          if (val.qty === 1) {
                            dispatch(removeItem({ id: val.id }))
                          }else {
                            dispatch(adjustQty({ id: val.id, qty: -1 }))
                          }
                          
                        }}
                      >
                        -
                      </Button>
                      <Box>
                        <Typography
                          text={val.qty}
                        />
                      </Box>
                      <Button
                        btnSize="sm"
                        onPress={() => dispatch(adjustQty({ id: val.id, qty: 1 }))}>
                          +
                      </Button>
                    </HStack>
                    <Box>
                      <Typography
                        type="price"
                        align="right"
                        text={moneyFormat(val.price * val.qty)}
                      />
                    </Box>
                  </HStack>
                </Box>
              </HStack>
            );
          })}
        </SectionContainer>
      </ScrollContainer>
      <SectionContainer>
        <HStack alignItems="center">
          <Box flex="1">
            <Typography
              text="Total"
            />
            <Typography
              type="total"
              text={moneyFormat(total)}
            />
          </Box>
          <Box flex="1">
            <Button
              variant="primary"
              onPress={() => {
                props.navigation.navigate('CheckoutScreen', {
                  items: cart.items,
                  total: total
                })
              }}>CHECKOUT</Button>
          </Box>
        </HStack>
      </SectionContainer>
    </>}
    </>
  );
}

export default CartScreen;