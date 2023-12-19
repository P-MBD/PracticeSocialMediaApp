import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
const Header = (props) => {
    return(
        <View>
            <Text>{props.title}</Text>
        </View>
    );
};
Header.default = {
    title:'',
}
Header.propTypes= {
    title: PropTypes.string
}
export default Header;