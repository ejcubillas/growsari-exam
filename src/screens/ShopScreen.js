
import { Text, Box, Pressable, HStack, FlatList, Image, ScrollView } from "native-base";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import ScrollContainer from "../components/ScrollContainer";
import SectionContainer from "../components/SectionContainer";
import Typography from "../components/Typography";

function ShopScreen(props) {

  return (
    <ScrollContainer>
      <SectionContainer>
        <Typography
          type="page-title"
          text="Growsari"
        />
        <Pressable mt="3" onPress={() => props.navigation.navigate('SearchProductScreen')}>
          <Box bg="main.gray" rounded={20} p="15px">
            <Typography
              type="placeholder"
              text="Search product..."
            />
          </Box>
        </Pressable>
      </SectionContainer>

      <SectionContainer>
        <Typography
          type="section-title"
          text="Categories"
        />
        <Categories/>
      </SectionContainer>

      <SectionContainer>
        <Typography
          type="section-title"
          text="Top Products"
        />     
      </SectionContainer>

      <ProductList
        filter={{
          limit: 4,
          keyword: 'bear'
        }}
      />
    </ScrollContainer>
  );
}

export default ShopScreen;