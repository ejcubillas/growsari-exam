import { useNavigation } from '@react-navigation/native';
import { Box, Center } from 'native-base';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slices/cart.slice';
import { Success } from '../../svgs';
import Button from '../Button';
import SectionContainer from '../SectionContainer';
import Typography from '../Typography';
function SuccessOrderModal(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="slideInRight"
      style={{
        margin: 0
      }}
    >
      <Box flex="1" bg="white">
        
        <SectionContainer flex="1" pt="10">
          <Typography
            type="page-title"
            text={`Thanks for using\nGrowsari!`}
            align="center"
          />

          <Center my="10">
            <Success/>
          </Center>

          <Typography
            type="sub-heading"
            text="We are now processing your order."
            align="center"
          />
        </SectionContainer>
        <SectionContainer>
          <Button
            variant="primary"
            onPress={() => {
              dispatch(clearCart())
              navigation.popToTop();
              navigation.navigate('OrderScreen');
            }}
          >CLOSE</Button>
        </SectionContainer>
        
      </Box>
    </Modal>
  );
}

export default SuccessOrderModal;