import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'

import CustomButton from "../components/CustomButton";
import { AppColor } from '../utils/StyleConstants';

import GlobalStyles from '../utils/GlobalStyles'
import CountryDetailsScreenStyle from '../styles/CountryDetailsScreenStyle'

type CountryDetailsScreenViewProps = {
  data: any,
  loading: boolean
  handleButtonPress: () => {}
}

const CountryDetailsScreenView = (props: CountryDetailsScreenViewProps) => {
  const { data, loading, handleButtonPress } = props;
  return (
    <SafeAreaView style={GlobalStyles.horizontalCenterContainer}>
      <StatusBar />
      <Image
        style={CountryDetailsScreenStyle.image}
        source={{ uri: data.flag }}
      />
      <Text style={CountryDetailsScreenStyle.countryName}>{data.name}</Text>
      <View style={CountryDetailsScreenStyle.row}>
        <Text style={CountryDetailsScreenStyle.field}>Capital: </Text>
        <Text style={CountryDetailsScreenStyle.data}>{data.capital}</Text>
      </View>
      <View style={CountryDetailsScreenStyle.row}>
        <Text style={CountryDetailsScreenStyle.field}>Country Population: </Text>
        <Text style={CountryDetailsScreenStyle.data}>{data.population}</Text>
      </View>
      <View style={CountryDetailsScreenStyle.row}>
        <Text style={CountryDetailsScreenStyle.field}>Lattitude: </Text>
        <Text style={CountryDetailsScreenStyle.data}>{data.lattitude} deg</Text>
      </View>
      <View style={CountryDetailsScreenStyle.row}>
        <Text style={CountryDetailsScreenStyle.field}>Longitude: </Text>
        <Text style={CountryDetailsScreenStyle.data}>{data.longitude} deg</Text>
      </View>
      <CustomButton
        title="Capital Weather"
        color={AppColor.buttonColor}
        style={CountryDetailsScreenStyle.CustomButton}
        loading={loading}
        onPress={handleButtonPress}
      />
    </SafeAreaView>
  )
}

export default CountryDetailsScreenView