// 단순 값 출력만 담당함

import { useEffect } from "react";
import mapMarker from "@assets/mapMarker.svg";
const { kakao } = window;
const PostWriteMap = ({ editLocation, postLocation }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5012874455869, 127.0396018372873), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
    const imageSrc = mapMarker, // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(42, 42), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(24, 42) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );

    const markerPosition = new kakao.maps.LatLng(
      37.5012874455869,
      127.0396018372873,
    );
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });
    const map = new kakao.maps.Map(container, options);

    var geocoder = new kakao.maps.services.Geocoder();
    console.log(geocoder, "geocoder");
    marker.setMap(map);
    marker.setDraggable(true);

    //  function searchAddrFromCoords(coords, callback) {
    // 좌표로 행정동 주소 정보를 요청합니다
    //    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    //  }

    const ps = new kakao.maps.services.Places();

    function searchDetailAddrFromCoords(
      coords: { getLng: () => any; getLat: () => any },
      callback: (result: any, status: any) => void,
    ) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }
    // 장소 검색 결과 콜백 함수
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const nearestPlace = data[0]; // 가장 가까운 장소
        console.log("가장 가까운 상호:", nearestPlace.place_name);
      } else {
        console.log("해당 위치 근처에 상호가 없습니다.");
      }
    }
    function addressSearch(position) {
      // 반경 검색 옵션 설정
      const searchOption = {
        location: position,  // 마커 위치
        radius: 50          // 반경 50미터
    };

    // 장소 검색: 특정 검색어 없이 전체 장소 중 가장 가까운 상호를 찾음
    ps.keywordSearch('', placesSearchCB, searchOption);
    }

    kakao.maps.event.addListener(marker, "dragend", function () {
      const position = postLocation;
      // const position = marker.getPosition();
      handleMapMarker(position);
      console.log("새로운 위치:", position.getLat(), position.getLng());
      searchDetailAddrFromCoords(position, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          addressSearch(position);

          var detailAddr = !!result[0].road_address
            ? "<div>도로명주소 : " +
              result[0].road_address.address_name +
              "</div>"
            : "";
          detailAddr +=
            "<div>지번 주소 : " + result[0].address.address_name + "</div>";

          var content =
            '<div class="bAddr">' +
            '<span class="title">법정동 주소정보</span>' +
            detailAddr +
            "</div>";

          console.log(detailAddr);
          // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
          // infowindow.setContent(content);
          // infowindow.open(map, marker);
        }
      });
    });

  }, []);
  return (
    <div className="border-text-secondary border rounded-lg">
      <div className="relative rounded-t-lg">
        <div className="absolute w-full z-10 flex justify-end opacity-75">
          <button onClick={() => editLocation()}>수정 </button> <button>취소</button>
        </div>
        <div
          id="map"
          style={{ width: "353px", height: "117px" }}
          className="bg-orange-500 rounded-t-lg border">
        </div>
        <div className="border-text-secondary bg-light p-2 rounded-b-lg border-t ">
          <div className="text-primary font-bold text-sm">멀티캠퍼스</div>
          <div className="text-text-primary text-xs p-1">
            서울특별시 강남구 테헤란로 212
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostWriteMap;
