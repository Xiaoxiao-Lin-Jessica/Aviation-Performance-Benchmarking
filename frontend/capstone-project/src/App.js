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
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODcxMjA3OSwibmJmIjoxNjk4NzEyMDc5LCJleHAiOjE2OTg3MTY4NDgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFQdDhKRnBTZGZpUCs2T3FYV0Q1a3B2cngxLzBBWm5aWWl1MCs3S1VnaUZabGVKaGxkTGpCbzlURDlNN0EwcXN3IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuMTMxLjE0LjM1IiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJoY2VITFVxeEprYVp0MzMxUkxvR0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.PfNrzFM-kagVhs0vdrqti-LZUz1eqek6idgktup2V6J2TF87UIMmufcUPM6FAgzap-AoH00oIRNDytZPYI1N8VEFuIlHw66_wL19bzzIECHfFciR8FMNx-p5BWqaW5xIjW4eTSHH2nTrmCpimoyDCMaui_IUaZhSoyqNmYlBGwRas9W6mR0nqwfNqEZM0-yamPH5yV3kNnB6ah0tuldFzT9WzFzjxQrnRWI2Kr1f9sKSoUJMN4L4Tv5Xkr8un7ddFRL0CGMEbZZv0Wi6642lDlS_OQr_34uqaaQdl0AEtHeu366ITycse__PXmTQuXqRS7BQ8lULrsN5KaKM5E1vGg"
    let routeAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODcxMjQwMSwibmJmIjoxNjk4NzEyNDAxLCJleHAiOjE2OTg3MTgwMzgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFTQWFPckJzK1o2ZHY4TzNONXFNdU5tTVdwbHcvdlk3NTNlZnJjZXE5cUxMRURLRExwbFM0SHdudVRLZW9kK29TIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuMTMxLjE0LjM1IiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJrcUoxZVFwSGFFR0M1al95dUdjSEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.qIaVRqFqhgq_ykKaTJKWpiUybPz7cxJaJWoOzadCB1lPrFaHy4e7NHsyawDQ6418iFR_Q8MouJg1BWDm5LxeF1DL67L0Dsv9q9k65no4_Syr5xutrGE3qgxHWt6uC-KiG-HngVlQ89uJ1fAYRxfj2CjmDS_2clBtDALv9mweRfVceEHKT8is9afj2Jmgj0ndkCXXkFQIUjd6h0USINaWfQnLqvXM7ODAatr5lyy7XRLMGgiDfyOxEUeKJX18vmxlf2lOE0XOa4B2hxI4rM6HbQdrimMppIEYujr6Kh3wH_p-eWip2CEJ_8pGKx2tkgHSpTx04BNrrXAuJU12wzc42Q"
    let mapAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODcxMTQ2NCwibmJmIjoxNjk4NzExNDY0LCJleHAiOjE2OTg3MTU3MzksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFRMHU5M3ZQZXVJV3FQOVZ0TGZ4aTBLWlNSTndRMHV1WVRUTVhkczJ3ZDNhOHhVb1dHNkpsNFNFdmxWRGx4ZlIxIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuMTMxLjE0LjM1IiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJRdnUzSUFRVTZrdXZiVXdxZWZvRkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.boHQ7WAVrsTbT8a_NxFJ_RQDgvdSZV1KcmY4oz3N0RXh5C4k5hv4GfLMLkr_n1eQpn3uV7FKmch6qt_N4SyjJJZmnPsqmLps48rvo8Kh5Ec1JQu8m0OjRQKDH8yjca_vuug9uJ7RgSOfaS6fbiPAXWW_egw_OMaGKj0LIimfMLDdBo7DZayYZN169puDPsb5hkC4JTXYw-nspoI00IKgLskpzzbGeu9R5RZzA32CBXU6An_r0rnELAoUFcA_iv-0jy7-Xnpb0ECySkbXsFx388C_Iw9c8WVHJwR_o0AIFiFgXYRXE1RhucNEaJfg4kIh6OltLWqFHfh7bIZyB9YFrQ"
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
