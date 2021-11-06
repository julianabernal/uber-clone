import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoianVsaWFuYWJlcm5hbGcxNSIsImEiOiJja21nZzl2aXIwYXM4Mm9yMGdkN2N1emxuIn0.lqmlBI-0WFOnJREpM7GUYA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoianVsaWFuYWJlcm5hbGcxNSIsImEiOiJja21nZzl2aXIwYXM4Mm9yMGdkN2N1emxuIn0.lqmlBI-0WFOnJREpM7GUYA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, []);

  return (
    <Wrapper>
      <Link href="/search">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />

      <RideContainer>
        {/*Ride Selector*/}
        <RideSelector />

        {/*Confirm Button*/}
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
h-screen flex flex-col
`;

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl

`;

const ButtonContainer = tw.div`
 m-3  h-10 w-10  z-10 shadow-lg absolute bg-white rounded-full
`;

const BackButton = tw.img`
`;
