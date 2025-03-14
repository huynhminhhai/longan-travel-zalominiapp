import React from "react";
import { Route, Routes } from "react-router-dom";
import { App, ZMPRouter, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import { Navigation } from "./navigation";
import ScrollToTop from "./scroll-top";
import { NewsDetailPage, NewsPage } from "pages/news";
import { HomePage } from "pages/homepage";
import { FeedbackAddPage, FeedbackDetailPage, FeedbackHistoryPage, FeedbackPage } from "pages/feedback";
import { AccountPage, ChangePasswordPage, LoginPage, ProfileAccountPage } from "pages/account";
import { LoadingFullScreen } from "./loading";
import { useStoreApp } from "store/store";
import { NotificationPage } from "pages/notification";
import { EventDetailPage, EventPage } from "pages/event";
import { DestinationDetailPage, DestinationPage } from "pages/destination";
import { DestinationTravelDetailPage, DestinationTravelPage } from "pages/destination-travel";
import { CusineDetailPage, CusinePage } from "pages/cusine";
import { RestaurantDetailPage, RestaurantPage } from "pages/restaurant";
import { HotelDetailPage, HotelPage } from "pages/hotel";
import { TourDetailPage, TourPage } from "pages/tour";
import GuidePage from "pages/guide/guide";
import GuideDetailPage from "pages/guide/guide-detail";
import { FavoritePage } from "pages/favorite";
import { ShoppingDetailPage, ShoppingPage } from "pages/shopping";
import { BusDetailPage, BusPage } from "pages/bus";
import { TaxiDetailPage, TaxiPage } from "pages/taxi";
import { OilDetailPage, OilPage } from "pages/oil";
import { HospitalDetailPage, HospitalPage } from "pages/hospital";
import { AtmPage } from "pages/atm";
import { MarketPage } from "pages/market";
import { BusRoutingDetailPage, BusRoutingPage } from "pages/bus-routing";
import { GalleryDetailPage, GalleryPage } from "pages/gallery";
import { LanguagePage, SearchPage, SettingsPage } from "pages/settings";
import RegisterPage from "pages/account/register";

const MyApp = () => {

  const { isLoadingFullScreen } = useStoreApp();

  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <ScrollToTop />
            <LoadingFullScreen isLoading={isLoadingFullScreen} />
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>

              {/* NEWS */}
              <Route path="/news" element={<NewsPage></NewsPage>}></Route>
              <Route path="/news-detail" element={<NewsDetailPage></NewsDetailPage>}></Route>

              {/* EVENT */}
              <Route path="/event" element={<EventPage></EventPage>}></Route>
              <Route path="/event-detail" element={<EventDetailPage></EventDetailPage>}></Route>

              {/* DESTINATION */}
              <Route path="/destination" element={<DestinationPage></DestinationPage>}></Route>
              <Route path="/destination-detail" element={<DestinationDetailPage></DestinationDetailPage>}></Route>

              {/* DESTINATION TRAVEL */}
              <Route path="/destination-travel" element={<DestinationTravelPage></DestinationTravelPage>}></Route>
              <Route path="/destination-travel-detail" element={<DestinationTravelDetailPage></DestinationTravelDetailPage>}></Route>

              {/* CUSINE */}
              <Route path="/cusine" element={<CusinePage></CusinePage>}></Route>
              <Route path="/cusine-detail" element={<CusineDetailPage></CusineDetailPage>}></Route>

              {/* RESTAURANT */}
              <Route path="/restaurant" element={<RestaurantPage></RestaurantPage>}></Route>
              <Route path="/restaurant-detail" element={<RestaurantDetailPage></RestaurantDetailPage>}></Route>

              {/* HOTEL */}
              <Route path="/hotel" element={<HotelPage></HotelPage>}></Route>
              <Route path="/hotel-detail" element={<HotelDetailPage></HotelDetailPage>}></Route>

              {/* Tour */}
              <Route path="/tour" element={<TourPage></TourPage>}></Route>
              <Route path="/tour-detail" element={<TourDetailPage></TourDetailPage>}></Route>

              {/* Guide */}
              <Route path="/guide" element={<GuidePage></GuidePage>}></Route>
              <Route path="/guide-detail" element={<GuideDetailPage></GuideDetailPage>}></Route>

              {/* Favorite */}
              <Route path="/favorite" element={<FavoritePage></FavoritePage>}></Route>

              {/* FEEDBACK */}
              <Route path="/feedback" element={<FeedbackPage></FeedbackPage>}></Route>
              <Route path="/feedback-detail" element={<FeedbackDetailPage></FeedbackDetailPage>}></Route>
              <Route path="/feedback-add" element={<FeedbackAddPage></FeedbackAddPage>}></Route>
              <Route path="/feedback-history" element={<FeedbackHistoryPage></FeedbackHistoryPage>}></Route>

              {/* Shopping */}
              <Route path="/shopping" element={<ShoppingPage></ShoppingPage>}></Route>
              <Route path="/shopping-detail" element={<ShoppingDetailPage></ShoppingDetailPage>}></Route>

              {/* Bus */}
              <Route path="/bus" element={<BusPage></BusPage>}></Route>
              <Route path="/bus-detail" element={<BusDetailPage></BusDetailPage>}></Route>

              {/* Bus routing */}
              <Route path="/bus-routing" element={<BusRoutingPage></BusRoutingPage>}></Route>
              <Route path="/bus-routing-detail" element={<BusRoutingDetailPage></BusRoutingDetailPage>}></Route>

              {/* Taxi */}
              <Route path="/taxi" element={<TaxiPage></TaxiPage>}></Route>
              <Route path="/taxi-detail" element={<TaxiDetailPage></TaxiDetailPage>}></Route>

              {/* Oil */}
              <Route path="/oil" element={<OilPage></OilPage>}></Route>
              <Route path="/oil-detail" element={<OilDetailPage></OilDetailPage>}></Route>

              {/* Hospital */}
              <Route path="/hospital" element={<HospitalPage></HospitalPage>}></Route>
              <Route path="/hospital-detail" element={<HospitalDetailPage></HospitalDetailPage>}></Route>

              {/* ATM */}
              <Route path="/atm" element={<AtmPage></AtmPage>}></Route>

              {/* Market */}
              <Route path="/market" element={<MarketPage></MarketPage>}></Route>

              {/* Gallery */}
              <Route path="/gallery" element={<GalleryPage></GalleryPage>}></Route>
              <Route path="/gallery-detail" element={<GalleryDetailPage></GalleryDetailPage>}></Route>

              {/* ACCOUNT */}
              <Route path="/account" element={<AccountPage></AccountPage>}></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
              <Route path="/profile-account" element={<ProfileAccountPage></ProfileAccountPage>}></Route>
              <Route path="/change-password" element={<ChangePasswordPage></ChangePasswordPage>}></Route>

              {/* NOTIFICATION */}
              <Route path="/notification" element={<NotificationPage></NotificationPage>}></Route>
              <Route path="/settings" element={<SettingsPage></SettingsPage>}></Route>
              <Route path="/languages" element={<LanguagePage></LanguagePage>}></Route>
              <Route path="/search" element={<SearchPage></SearchPage>}></Route>

            </Routes>
            <Navigation />
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
