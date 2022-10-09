import { Pressable, Text } from "native-base";
import Typography from "../Typography";

function Button(props) {
  const style = {
    p: props.btnSize === 'sm' ? 0.3 : 4,
    px: props.btnSize === 'sm' ? 4 : 6,
    rounded: 100,
    my: 2,
    bg: props.variant ? 'main.primary' : 'main.gray'
  }

  
  return (
    <Pressable {...style} {...props}>
      <Text
        fontSize={16}
        fontWeight={600}
        textAlign="center"
        color={props.variant == 'primary' ? 'white' : 'main.text'}
      >
        {props.children}
      </Text>
    </Pressable>
  );
}

export default Button;