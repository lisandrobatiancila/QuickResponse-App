import React from 'react';
import { View } from "react-native";
import TextLabel from '../../../components/TextLabel';

export default function FirstAidInformation (props: any) {
    const {firstAidID, firstAidTitle} = props.route.params;
    
    return <View>
        <TextLabel title={`${firstAidID} --- ${firstAidTitle}`} />
    </View>
}