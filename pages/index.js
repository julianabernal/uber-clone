import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name> Juliana Bernal</Name>
            <UserImage src="https://scontent.fbog3-1.fna.fbcdn.net/v/t1.18169-9/26731778_181258765799680_1910970749898320917_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHIbD6t7ml_XU3kfdoWVqzzWTlRukpDLwZZOVG6SkMvBofZe4Tb-y8fm8gALxPzXokA6ZnfJ34nHLIUKKnyx5sm&_nc_ohc=waThBjdZmtIAX8-hOty&_nc_ht=scontent.fbog3-1.fna&oh=e4ff34e51566954cb05438c83a78fdbf&oe=61AA5818" />
          </Profile>
        </Header>

        {/*ActionButtons */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        {/*InputButton*/}
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen 
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28 
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-3 w-20 text-sm
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px 
`;

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 
`;
