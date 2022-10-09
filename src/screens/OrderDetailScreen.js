
import { useState } from "react";
import { Box, HStack } from "native-base";
import { moneyFormat } from "../utils/number-format";
import ScrollContainer from "../components/ScrollContainer";
import SectionContainer from "../components/SectionContainer";
import Typography from "../components/Typography";
import Button from "../components/Button";
import SuccessOrderModal from "../components/SuccessOrderModal";
import { useDispatch } from "react-redux";
import { newOrder } from "../redux/slices/order.slice";

function OrderDetailScreen(props) {
  const dispatch = useDispatch();
  return (
  <>
    <ScrollContainer>
      <SectionContainer>
        <Typography
          type="section-title"
          text="Delivery Information"
        />
        <Typography
          type="description"
          text={props.route.params.delivery.name}
        />
        <Typography
          type="description"
          text={props.route.params.delivery.phone}
        />
        <Typography
          type="description"
          text={props.route.params.delivery.addressLine}
        />
        <Typography
          type="description"
          text={props.route.params.delivery.city}
        />
        <Typography
          type="description"
          text={props.route.params.delivery.region}
        />
      </SectionContainer>
      <SectionContainer>
        <Typography
          type="section-title"
          text="Order Details"
        />
        {props.route.params.items?.map((val, i) => {
          return (
            <HStack key={i} space="3" mb="2" mt="1">
              <Box flex="2">
                <Typography
                  type="description"
                  text={val.display_name}
                />
                <Typography
                  type="status"
                  text={moneyFormat(val.price)}
                />
                <Typography
                  type="price"
                  text={`x${val.qty}`}
                />
              </Box>
              <Box flex="1">
                <Typography
                  type="price"
                  text={moneyFormat(val.price * val.qty)}
                  align="right"
                />
              </Box>
            </HStack>
          )
        })}
      </SectionContainer>
      <SectionContainer>
        <Typography
          type="section-title"
          text="Payment Method"
        />

        <Typography
          type="description"
          text={props.route.params.paymentMethod}
        />
      </SectionContainer>
      <SectionContainer>
        <Typography
          type="section-title"
          text="Payment Details"
        />
        <HStack justifyContent="space-between" alignItems="center">
          <Typography
            type="description"
            text="Total"
          />
          <Typography
            type="price"
            text={moneyFormat(props.route.params.total)}
          />
        </HStack>
      </SectionContainer>
    </ScrollContainer>
    
    
  </>
  );
}

export default OrderDetailScreen;