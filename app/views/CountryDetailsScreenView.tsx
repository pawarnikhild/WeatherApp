import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'

import CustomButton from "../components/CustomButton";
import { AppColor } from '../utils/StyleConstants';

import GlobalStyles from '../utils/GlobalStyles'
import CountryDetailsScreenStyle from '../styles/CountryDetailsScreenStyle'

type CountryDetailsScreenViewProps = {
  data: any,
  handleButtonPress: () => {}
}

const CountryDetailsScreenView = (props: CountryDetailsScreenViewProps) => {
  const { data, handleButtonPress } = props;
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar/>
      <View style={GlobalStyles.horizontalCenterContainer}>
        <Image 
          style={CountryDetailsScreenStyle.image}
          source={{uri: data[0].flags.png}}
        />

        
        <Text style={CountryDetailsScreenStyle.countryName}>{data[0].name.common}</Text>
        {/* <Text style={GlobalStyles.field}>Capital: {data[0].capital}</Text>
        <Text style={GlobalStyles.field}>Lattitude: {data[0].latlng[0]}</Text>
        <Text style={GlobalStyles.field}>Longitude: {data[0].latlng[1]}</Text> */}
        <View style={CountryDetailsScreenStyle.row}>
          <Text style={CountryDetailsScreenStyle.field}>Capital: </Text>
          <Text style={CountryDetailsScreenStyle.data}>{data[0].capital}</Text>
        </View>
        <View style={CountryDetailsScreenStyle.row}>
          <Text style={CountryDetailsScreenStyle.field}>Country Population: </Text>
          <Text style={CountryDetailsScreenStyle.data}>{data[0].population}</Text>
        </View>
        <View style={CountryDetailsScreenStyle.row}>
          <Text style={CountryDetailsScreenStyle.field}>Lattitude: </Text>
          <Text style={CountryDetailsScreenStyle.data}>{data[0].latlng[0]} deg</Text>
        </View>
        <View style={CountryDetailsScreenStyle.row}>
          <Text style={CountryDetailsScreenStyle.field}>Longitude: </Text>
          <Text style={CountryDetailsScreenStyle.data}>{data[0].latlng[1]} deg</Text>
        </View>
        


        <CustomButton
          style={CountryDetailsScreenStyle.CustomButton}
          title="Capital Weather"
          color={AppColor.buttonColor}
          onPress={handleButtonPress}
        />
        
      </View>
    </SafeAreaView>
  )
}

export default CountryDetailsScreenView