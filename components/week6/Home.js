import React from "react";
import { ScrollView, View } from "react-native";
import Cover from "../../screens/week6/Cover";
import HomeIconMenu from "../../screens/week6/HomeIconMenu";
import Tour from "../../screens/week6/Tour";
import TourFlatList from "../../screens/week6/TourFlatList";
import Event from "../../screens/week6/Event";

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'lightyellow', marginTop: 20 }}>
                <Cover />
                <HomeIconMenu />
                <Tour style={{ margin: 20 }} />
                <TourFlatList style={{ margin: 20 }} />
                <Event style={{margin:10}} />
            </View>
        </ScrollView>

    );
}
