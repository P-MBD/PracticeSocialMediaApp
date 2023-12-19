import { Pressable, Text } from "react-native";
import PropTypes from 'prop-types';
import style from "./style";
const Button = (props) => {
return(
    <Pressable style={[style.button, props.isDisabled&& style.disabled]} onPress={()=>props.onPress()}>
        <Text style={style.title}>{props.title}</Text>
    </Pressable>
    );
}
Button.default={
    isDisabled:false,
    onPress:()=> {},
}
Button.propsType={
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func,
}
export default Button;