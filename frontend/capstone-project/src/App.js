import React from "react";
import UserLogin from "./components/UserLogin";
import Dashboard from "./components/DashBoard";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import RouteOverview from "./components/ForRoute/RouteOverview";
import RouteDelayCancel from "./components/ForRoute/RouteDelayCancel";
import RouteBusynessSeat from "./components/ForRoute/RouteBusynessSeat";
import AirlineOverview from "./components/ForAirline/AirlineOverview";
import AirlineDelayCancel from "./components/ForAirline/AirlineDelayCancel";
import AustralianMap from "./components/Map/AustralianMap";
import {AuthProvider, useAuth} from "./AuthContext";


export const AccessTokenContext = React.createContext();

function App() {
    let airlineAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODcwNzc1OCwibmJmIjoxNjk4NzA3NzU4LCJleHAiOjE2OTg3MTI2MTksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFTSGhKUDl4M1djTk8zZkl1RTlRUmgyVCs1VnN3R0RvZ0pncGNJdG56dkczemJBNDdZT294NmQrSnNxdm4yR294IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuMTMxLjE0LjM1IiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJMM2k2bzhQWXlraVl1d0w3VmZRREFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.jJZS7-IgUNEqCzv8O1RFTuobMiuJqqMUVm_494KMW4T2nMhdbn9gfUV4Dra9AID0kBYUydqzjxbhhFwAjd7inTO46dILjQfWgmtY7fQA8Fi1ycQhl3OGVEUyWP2T5diMt5b9e_8HrNEjd_JQ703Oy5OZ56BeKeI0QdMnn9uLsDlLgVgsH0ck5Z2KuiEMW4TGU5tO-o2ZwWGTX1H-u7eTjZnq8K-0iRdRNsZ2ay_Br0fg4KAyD9qAqxlZdtsqidyPAXmwENBzG1nDtDtgVsTnK4n4siloviRekshekPTZJ4zHtwrVQMA7Ng1VzZvsjhQv51Y3OT-u4xxprNEWzbN0bA"
    let routeAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODcwNzc0OSwibmJmIjoxNjk4NzA3NzQ5LCJleHAiOjE2OTg3MTI5NDEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFabFJUM0wyMUwwS0VVZU1rU3pzUWxTRkpiZ25KWGVOaTNvM2ZwQkpwaWoyS1RTYm9yV3Y4NWNSVDVVdm9DOWdrIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuMTMxLjE0LjM1IiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJ2TUxZcUprYzYwU25uOUtNY0pvbkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.xyX_-MH7QY5LXEY4CLaDTyVPvvmg1_cClKcc0xuAtzOji-05f0K1yanV--vJsAMRd4Y119E8lNsIH0VrUoNPRsnpXfly0Vd_HX9L3DGULborCRNXYt0UbFqyLXN3xQP4S1yf-6poMJb8-44EUFEi2_dLIOIeqIuXjLdPfU55b-WB2oLF3rqMpe_epT2F-yHlO3jiL8lGWUwoUCugk5K-niF9gYYRz3365i-CUGNTWH905EDjFTS53Bx_EIa2ubUi99_MmkQ7iQw7mtgTdTeLfzm2hpO2DoVyD8SV3ixtIIFaYOhXt8hC_22aeE2d5M7NqRTio64vvU-3mebAGYfQjw"
    let mapAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODcwNzgyMSwibmJmIjoxNjk4NzA3ODIxLCJleHAiOjE2OTg3MTIwMDUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUE4eG9RYVBFRVVZcWZ3Y0pTNVNDRGxaeWhlZzJsaXg3L00wbGo4MTVsZlJkenFCRzIremtJSi9iTXdReFcrbFUxIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuMTMxLjE0LjM1IiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJfNEJNa1ZOc3dFS3JDRVYyNWg0dEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.GRW-vb577_4fKrRXsEi5PRfiyzMrhkHke_6tF1F6afhDENlUD14miFdFkL8M12H_tXSKiMSfb7a068M1NgyTlWXlR8elq8wCPExj7OXpATi-8LGCveE_-17lcBk1WmOO1b0WW2eCqL-yWb9dcb9SMSYVYfBLFnsZGfqt5umenifLcgEEKl6KSAtvxvtfecjw0mSb9d1uEj9Wst7RVOCiNmW38AnFdMNsAcq4Bwu4oqnPG6nmko23CRped6shMGQUeIuTiR70ECEAYy7dhTNjj-72swOP-bGn2OtVeldnAA5p-foH1gya_YCsiqJeMPsW5Rp6b6Be9GK7hLRBAnz7Kg"
    return (
        <AuthProvider>
            <AccessTokenContext.Provider value={{airlineAccessToken, routeAccessToken, mapAccessToken}}>
                <Router>
                    <Routes>
                        <Route path="/login" element={<UserLogin />} />
                        <Route path="/" element={<Homepage />} />
                        <Route path="/ForRouteOverview" element={<RouteOverview/>}/>
                        <Route path="/ForRouteDelayCancel" element={<RouteDelayCancel/>} />
                        <Route path="/ForRouteBusynessSeat" element={<RouteBusynessSeat/>} />
                        <Route path="/ForAirlineOverview" element={<AirlineOverview/>} />
                        <Route path="/ForAirlineDelayCancel" element={<AirlineDelayCancel/>} />
                        <Route path="/Map" element={<AustralianMap/>} />
                        {/* Add additional routes */}
                    </Routes>
                </Router>
            </AccessTokenContext.Provider>
        </AuthProvider>
    );
}

export default App;
