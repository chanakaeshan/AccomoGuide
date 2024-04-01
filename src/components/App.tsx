import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css";
import { RouteName } from "../RouteName";
import Login from "./common/Login";
import Auth from "./common/Auth";
import NavBar from "./common/NavBar";
import VerifyRole from "./common/VerifyRole";
import { Role } from "../models/Role";
import ContentLayout from "./common/ContentLayout";
import SidePane from "./common/SidePane";
import Content from "./common/Content";
import { NotFound } from "./common/NotFound";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../translations/locales/en.json";
import fr from "../translations/locales/fr.json";
import LanguageDetector from "i18next-browser-languagedetector";
import AdminSideBar from "./Admin/AdminSideBar";
import Footer from "./common/Footer";
import UserManagement from "./Admin/UserManagement";
import UserProfile from "./Admin/UserManagement/Profile";
import SignUp from "./common/SignUp";
import UpgradePlan from "./Admin/UserManagement/UpgradePlan";
import MainDashboard2 from "./Admin/MainDashboard_new";
import Feed from "./Admin/MainDashboard_new";
import VerifyEmail from "./Admin/UserManagement/verify-email";
import Profile from "./Admin/Personal/Profile";
import Landing from "./common/LandingPage";
import WardenPage from "./common/WardenPage";
import StudentPage from "./common/StudentPage";
import StudentTestPage from "./common/StudentTestPage";

const languages = ["en", "fr"];

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: { order: ["path", "navigator"] },
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
    whitelist: languages,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={RouteName.LOGIN}>
          <Login />
        </Route>
        <Route path={RouteName.SIGNUP}>
          <SignUp />
        </Route>
        <Route path={RouteName.HOME}>
          <Landing />
        </Route>
        {/* ============================================================== */}
        <Route path={RouteName.WARDEN_PAGE}>
          <WardenRouter />
        </Route>
        <Route>
          <StudentRouter />
        </Route>

        {/* <Route path="/">
          <Auth>
            <div className="page-container">
              <div className="content-wrap">
                <Router>
                  <Switch>
                    <Route path="/admin">
                      <VerifyRole allow={[Role.SUPER_ADMIN]}>
                        <SuperAdminRouter />
                      </VerifyRole>
                    </Route>
                    <Route path="/hs">
                      <VerifyRole allow={[Role.RECEIVER]}>
                        <PatientRouter />
                      </VerifyRole>
                    </Route>
                  </Switch>
                </Router>
              </div>
            </div>
          </Auth>
        </Route> */}
      </Switch>
    </Router>
  );
};

// const SuperAdminRouter: React.FC = () => {
//   return (
//     <ContentLayout>
//       <Router>
//         <Route
//           path={[RouteName.ADMIN_USER_MANAGEMENT]}
//           exact
//           render={() => (
//             <>
//               <NavBar />
//               <SidePane>
//                 <AdminSideBar />
//               </SidePane>
//             </>
//           )}
//         />
//         <Content>
//           <Switch>
//             <Route path={RouteName.ADMIN_USER_MANAGEMENT}>
//               <UserManagement />
//             </Route>

//             <Route path="*">
//               <NotFound />
//             </Route>
//           </Switch>
//         </Content>
//       </Router>
//     </ContentLayout>
//   );
// };

// const PatientRouter: React.FC = () => {
//   return (
//     <ContentLayout>
//       <Router>
//         <Route>
//           <NavBar />
//         </Route>
//         <Content>
//           <Switch>
//             <Route path={RouteName.ADMIN_MAIN_DASHBOARD} exact>
//               <MainDashboard2 />
//             </Route>
//             <Route path={RouteName.ADMIN_PROFILE} exact>
//               <Profile />
//             </Route>

//             <Route path="*">
//               <NotFound />
//             </Route>
//           </Switch>
//         </Content>
//       </Router>
//     </ContentLayout>
//   );
// };
const WardenRouter: React.FC = () => {
  return (
    <ContentLayout>
      <Router>
        <Content>
          <Switch>
            <Route path={RouteName.WARDEN_PAGE} exact>
              <WardenPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Content>
      </Router>
    </ContentLayout>
  );
};
const StudentRouter: React.FC = () => {
  return (
    <ContentLayout>
      <Router>
        <Content>
          <Switch>
            <Route path={RouteName.STUDENT_PAGE} exact>
              <StudentPage />
            </Route>
            <Route path={RouteName.STUDENT_TEST_PAGE} exact>
              <StudentTestPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Content>
      </Router>
    </ContentLayout>
  );
};

export default App;
