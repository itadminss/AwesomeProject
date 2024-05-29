import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView, { MapMarker, Marker } from "react-native-maps";
import UniversityMarkers from "./UniversityMarkers";
import LocationService from "../../services/LocationService";
import LiderMarkers from "./LiderMarker";

export default function MyMapView(props) {
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;

    const [universities, setUniversities] = useState([]);
    const [riders, setRiders] = useState([]);
    const loadRiders = async () => {
      let url_endpoint = "https://ckartisan.com/api/location";
      try {
        let response = await fetch(url_endpoint);
        let items = await response.json();
        //   console.log(items);
        setRiders(items);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => { loadRiders(); }, []);

    if (props.location) {
        //DISPLAY MAP ON YOUR LOCATION
        return (
            <MapView
                style={{ width: width, height: height }}
                initialRegion={{
                    latitude: props.location.coords.latitude,
                    longitude: props.location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                showsUserLocation={true}
                onUserLocationChange={(event) => {
                    // console.log("LOCATION CHANGED : " , event);
                    if (event.nativeEvent.coordinate) {
                        let new_location = {
                            coords: event.nativeEvent.coordinate,
                            mocked: false,
                            timestamp: event.nativeEvent.coordinate.timestamp,
                        };
                        //SET LOCATION
                        props.setLocation(new_location);
                            //SEND TO SERVER
            //if (props.recordLocation) {
              console.log("SEND TO SERVER");
            //   LocationService.storeItem({
            //     user_id: "Phutiphachr Deeprom",
            //     latitude: event.nativeEvent.coordinate.latitude,
            //     longitude: event.nativeEvent.coordinate.longitude,
            //   });
            //}
                    }
                }}




            >
                {/* <MapMarker
                    coordinate={{
                        latitude: Number(14.1334383),
                        longitude: Number(100.6146767),
                    }}
                    title={"มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์"}
                    key={"xxxx"}
                />
                <Marker
                    coordinate={{
                        latitude: Number(14.0734419),
                        longitude: Number(100.6003011),
                    }}
                    title={"มหาวิทยาลัยธรรมศาสตร์รังสิต"}
                    key={"TU"}
                /> */}
                 {/* <UniversityMarkers items={universities} /> */}
                 <LiderMarkers  items={riders} />
            </MapView>
        );
    } else {
        //DISPLAY DEFAULT MAP on 0,0
        return <MapView style={{ width: width, height: height }}></MapView>;
    }
}
