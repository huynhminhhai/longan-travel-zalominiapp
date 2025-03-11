import images from "assets/images";
import { BannerSlider } from "components/banner";
import { CusineSection } from "components/cusine";
import { DestinationSection } from "components/destination";
import { DestinationTravelSection } from "components/detination-travel";
import { Divider } from "components/divider";
import { HotelSection } from "components/hotel";
import { LongAnMap } from "components/map";
import { EventSection, NewsSection } from "components/news";
import { RestaurantSection } from "components/restaurant";
import { ServiceItem, ServiceSection } from "components/services";
import { TourSection } from "components/tour";
import { SERVICES, ServicesType } from "constants/utinities";
import React, { useState } from "react";
import { Box, Page, Sheet } from "zmp-ui";

export const SERVICESOTHER: ServicesType[] = [
  {
    label: 'Điểm mua sắm',
    url: '/shopping',
    icon: images.shopping
  },
  {
    label: 'Chợ',
    url: '/market',
    icon: images.market
  },
  {
    label: 'Bến xe',
    url: '/bus',
    icon: images.bus
  },
  {
    label: 'Tuyến xe',
    url: '/bus-routing',
    icon: images.busRouting
  },
  {
    label: 'Taxi',
    url: '/taxi',
    icon: images.taxi
  },
  {
    label: 'Xăng/dầu',
    url: '/oil',
    icon: images.oil
  },
  {
    label: 'Cơ sở y tế',
    url: '/hospital',
    icon: images.hospital
  },
]

const HomePage: React.FunctionComponent = () => {

  const [sheetVisible, setSheetVisible] = useState(false);

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px] home">
      <Box className="relative z-[1]">
        <BannerSlider />
        <div className="bg-white rounded-t-2xl pt-3 translate-y-[-30px] box-shadow-2">
          <ServiceSection setSheetVisible={setSheetVisible} />
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
      <Sheet
        visible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        autoHeight
        // mask
        // handler
        swipeToClose
      >
        <Box p={4} className="custom-bottom-sheet" flex flexDirection="column">
          <div className="grid grid-cols-4 gap-x-3 gap-y-4">
            {
              SERVICESOTHER.map((item: ServicesType, index: React.Key) => (
                <ServiceItem key={index} data={item} />
              ))
            }
          </div>
        </Box>
      </Sheet>
    </Page>
  );
};

export default HomePage;
