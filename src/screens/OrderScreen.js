
import { useState } from "react";
import { Box, HStack, Image, Pressable, Text } from "native-base";
import { moneyFormat } from "../utils/number-format";
import ScrollContainer from "../components/ScrollContainer";
import SectionContainer from "../components/SectionContainer";
import Typography from "../components/Typography";
import Button from "../components/Button";
import SuccessOrderModal from "../components/SuccessOrderModal";
import { useDispatch, useSelector } from "react-redux";
import { newOrder } from "../redux/slices/order.slice";

function OrderScreen(props) {
  const dispatch = useDispatch();
  const { order } = useSelector(state => state);
  const orders = [...order.orders]
  
  return (
  <>
    <ScrollContainer>
      <SectionContainer>
        <Typography
          type="page-title"
          text="My Orders"
        />
      </SectionContainer>
      <SectionContainer>

        {orders.reverse().map((val, i) => {
          return (
            <Pressable
              pb="5"
              key={i}
              onPress={() => {
                props.navigation.navigate('OrderDetailScreen', {
                  delivery: val.delivery,
                  items: val.items,
                  total: val.total,
                  paymentMethod: val.paymentMethod
                });
              }}
            >
              <HStack alignItems="center" justifyContent="space-between">
                <Typography
                  type="section-title"
                  text={`Order #${orders.length - i}`}
                />
                <Typography
                  type="status"
                  text="Processing"
                />
              </HStack>
              {val.items.map((item, itemIndex) => {
                return (
                  <HStack key={itemIndex} space="3" mb="2">
                    <Box>
                      <Image
                        source={require('../img/bearbrand.png')}
                        alt="img"
                        w="40px"
                        h="40px"
                      />
                    </Box>
                    <Box flex="2">
                      <Typography
                        type="description"
                        text={item.display_name}
                      />
                    </Box>
                    <Box flex="1">
                      <Typography
                        type="price"
                        text={`x${item.qty}`}
                        align="right"
                      />
                    </Box>

                  </HStack>
                )
                
              })}
              
            </Pressable>
            
          )
        })}
      </SectionContainer>
    </ScrollContainer>
  </>
  );
}

export default OrderScreen;