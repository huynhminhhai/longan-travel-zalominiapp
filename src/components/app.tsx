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

              {/* FEEDBACK */}
              <Route path="/feedback" element={<FeedbackPage></FeedbackPage>}></Route>
              <Route path="/feedback-detail" element={<FeedbackDetailPage></FeedbackDetailPage>}></Route>
              <Route path="/feedback-add" element={<FeedbackAddPage></FeedbackAddPage>}></Route>
              <Route path="/feedback-history" element={<FeedbackHistoryPage></FeedbackHistoryPage>}></Route>

              {/* ACCOUNT */}
              <Route path="/account" element={<AccountPage></AccountPage>}></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route path="/profile-account" element={<ProfileAccountPage></ProfileAccountPage>}></Route>
              <Route path="/change-password" element={<ChangePasswordPage></ChangePasswordPage>}></Route>

              {/* NOTIFICATION */}
              <Route path="/notification" element={<NotificationPage></NotificationPage>}></Route>

            </Routes>
            <Navigation />
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
