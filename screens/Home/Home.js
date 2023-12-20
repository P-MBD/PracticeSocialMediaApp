import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../../components/Header/Header';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import { horizontalScale } from '../../assets/styles/scaling';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <Tab title={'Highlight'}/>
      <Badge title={'Environment'}/>
      <FontAwesomeIcon icon={faSearch} />
    </SafeAreaView>
  );
};

export default Home;