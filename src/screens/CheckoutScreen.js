
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

function CheckoutScreen(props) {
  const dispatch = useDispatch();
  const [showSuccessModal, setShowSuccessModal] = useState(false)
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
          text="Ernest Jay Cubillas"
        />
        <Typography
          type="description"
          text="09154743893"
        />
        <Typography
          type="description"
          text="Northtown 1 Subd., Libertad"
        />
        <Typography
          type="description"
          text="Butuan City, Agusan del Norte"
        />
        <Typography
          type="description"
          text="Caraga"
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
          text="Cash On Delivery"
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
    <SectionContainer>
      <Button 
        variant="primary" 
        onPress={() => {
          dispatch(newOrder({
            items: props.route.params.items,
            total: props.route.params.total,
            delivery: {
              name: 'Ernest Jay Cubillas',
              phone: '09154743893',
              addressLine: 'Northtown 1 Subd., Libertad',
              city: 'Butuan City, Agusan del Norte',
              region: 'Caraga'
            },
            paymentMethod: 'Cash On Delivery'
          }))
          setShowSuccessModal(true);
        }}>
          PLACE ORDER
        </Button>
    </SectionContainer>
    <SuccessOrderModal
      isVisible={showSuccessModal}
    />
  </>
  );
}

export default CheckoutScreen;