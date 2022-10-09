import { Text } from 'native-base';

function Typography ({ type, text, align }) {

  const textStyle = {
    color: 'main.text',
    fontSize: '14px',
    fontWeight: 'normal',
    textAlign: align ? align : 'left',
    fontFamily: 'Inter'
  }

  if (type === 'section-title') {
    textStyle.color = 'main.text';
    textStyle.fontSize = '16px';
    textStyle.fontWeight = 700;
    textStyle.marginBottom = 3;
  }

  if (type === 'placeholder') {
    textStyle.color = 'main.placeholder';
    textStyle.fontSize = '14px';
    textStyle.fontWeight = 600;
  }

  if (type === 'description') {
    textStyle.color = 'main.text';
    textStyle.fontSize = '12px';
    textStyle.numberOfLines = 2;
  }

  if (type === 'status') {
    textStyle.color = 'main.highlight';
    textStyle.fontSize = '10px';
  }

  if (type === 'page-title') {
    textStyle.color = 'main.primary';
    textStyle.fontSize = '30px';
    textStyle.fontWeight = 800;
  }

  if (type === 'price') {
    textStyle.color = 'main.primary';
    textStyle.fontSize = '18px';
    textStyle.fontWeight = 800;
  }

  if (type === 'icon-label') {
    textStyle.color = 'main.primary';
    textStyle.fontSize = '10px';
    textStyle.fontWeight = 700;
  }

  if (type === 'heading') {
    textStyle.color = 'main.primary';
    textStyle.fontSize = '28px';
    textStyle.fontWeight = 700;
  }

  if (type === 'sub-heading') {
    textStyle.color = 'main.primary';
    textStyle.fontSize = '14px';
    textStyle.fontWeight = 700;
  }

  if (type === 'total') {
    textStyle.color = 'main.primary';
    textStyle.fontSize = '20px';
    textStyle.fontWeight = 700;
  }

  return (
    <Text {...textStyle}>{text}</Text>
  );
}

export default Typography;