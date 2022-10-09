import { Box, Text, Pressable, ScrollView } from 'native-base';
import Modal from 'react-native-modal';
import Typography from '../Typography';
import { useSelector } from 'react-redux';
import SectionContainer from '../SectionContainer';

function CategoryModal(props) {
  const { product } = useSelector(state => state); 
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
      <Box maxHeight="70%" bg="white">
        <SectionContainer>
          <Typography
            type="section-title"
            text="Select Category"
          />
        </SectionContainer>
        <ScrollView>
          <SectionContainer>
            <Pressable px="1" pb="3" onPress={() => props.onSelect('')}>
              <Text fontWeight={props.selected === '' ? 700 : 400}>
                All
              </Text>
            </Pressable>
            {product.categories.map((val, i) => {
              return (
                <Pressable px="1" py="3" onPress={() => props.onSelect(val)} key={i}>
                  <Text fontWeight={props.selected === val ? 700 : 400}>
                    {val}
                  </Text>
                </Pressable>
              )
            })}
          </SectionContainer>
        </ScrollView>
      </Box>
    </Modal>
  );
}

export default CategoryModal;