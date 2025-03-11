import { BannerSlider } from "components/banner";
import { CusineSection } from "components/cusine";
import { DestinationSection } from "components/destination";
import { DestinationTravelSection } from "components/detination-travel";
import { Divider } from "components/divider";
import { HotelSection } from "components/hotel";
import { LongAnMap } from "components/map";
import { EventSection, NewsSection } from "components/news";
import { RestaurantSection } from "components/restaurant";
import { ServiceSection } from "components/services";
import { TourSection } from "components/tour";
import React from "react";
import { Box, Page } from "zmp-ui";

const HomePage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px] home">
      <Box className="relative z-[1]">
        <BannerSlider />
        <div className="bg-white rounded-t-2xl pt-3 translate-y-[-30px] box-shadow-2">
          <ServiceSection />
          <Divider />
          <DestinationSection />
          <Divider />
          <DestinationTravelSection />
          <Divider />
          <CusineSection />
          <Divider />
          <NewsSection />
          <Divider />
          <EventSection />
          <Divider />
          <TourSection />
          <Divider />
          <RestaurantSection />
          <Divider />
          <HotelSection />
          <Divider />
          <LongAnMap />
        </div>
      </Box>
    </Page>
  );
};

export default HomePage;
