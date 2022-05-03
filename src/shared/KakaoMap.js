/* global kakao */
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styled from 'styled-components'

const KakaoMap = (props) => {
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [planSpot, setPlanSpot] = useState({
    center: {
      lat: props.lat,
      lng: props.lng,
    }
  })
  // const { keyword } = props;
  const [myLocation, setMyLocation] = useState({
    center: {
      lat: props.lat,
      lng: props.lng,
    },
    errMsg: null,
    isLoading: true,
  })
  // useEffect(() => {
  //   if (!map) return
  //   const ps = new kakao.maps.services.Places()

  //   ps.keywordSearch(keyword, (data, status, _pagination) => {
  //     if (status === kakao.maps.services.Status.OK) {
  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  //       // LatLngBounds 객체에 좌표를 추가합니다
  //       const bounds = new kakao.maps.LatLngBounds()
  //       let markers = []

  //       for (var i = 0; i < data.length; i++) {
  //         // @ts-ignore
  //         console.log(data[i])
  //         markers.push({
  //           position: {
  //             lat: data[i].y,
  //             lng: data[i].x,
  //           },
  //           content: data[i].place_name,
  //           detail: {
  //             category_g_code: data[i].category_group_code,
  //             category_g_name: data[i].category_group_name,
  //             category_name: data[i].category_name,
  //           },
  //         })
  //         // @ts-ignore
  //         bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
  //       }
  //       setMarkers(markers)

  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  //       map.setBounds(bounds)
  //     }
  //   })
  // }, [keyword])

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMyLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (err) => {
          setMyLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setMyLocation((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])



  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: props.lat,
        lng: props.lng,
      }}
      style={{
        width: "100%",
        height: "250px",
      }}
      level={3}
      onCreate={setMap}
    >
      <MapMarker position={planSpot.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {myLocation.errMsg ? myLocation.errMsg : `${props.place}`}
            </div>
      </MapMarker>
       {/* {!myLocation.isLoading && (
          <MapMarker position={myLocation.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {myLocation.errMsg ? myLocation.errMsg : "여기에 계신가요?!"}
            </div>
          </MapMarker>
      )} */}
    </Map>
  )
}

const MarkerDetail = styled.div`
  color: #000;
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const Here = styled.button`
  margin-top: auto;
  width: fit-content;
  margin-left: auto;
  border: 0px;
  background: transparent;
  padding: 5px;

`

export default KakaoMap;
