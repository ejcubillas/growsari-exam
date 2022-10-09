import { Box } from "native-base";

function SectionContainer(props) {
  return (
    <Box py="4" px="4" bg="white" {...props}>
      {props.children}
    </Box>
  );
}

export default SectionContainer;