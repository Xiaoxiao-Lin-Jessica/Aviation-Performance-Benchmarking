export const AccessTokenContext = React.createContext();

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

function App() {
    let airlineAccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODM2MzQ2MiwibmJmIjoxNjk4MzYzNDYyLCJleHAiOjE2OTgzNjg2MDYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMkZnWUdDMlphMDVhNkZqYmVsc01KM0hxTzN2UG5tUnZWNXArczlFN3ZTYjVrZ2xHZFZlTnVjcldUVW5uTzFwejBibVoyOWFBQT09IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuNjYuMTMyLjYyIiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJ5U0V4RlpsTzZFbTFlNnJrSExCWEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.MuetC1BKm4s0FW6GciTyC_ffkWR8vqLbyk-WaNSbvyqt-5j-2vv9pvZghlMjed1NriATdanYbZTe-jb00mUKLQjEnUwwI_UzXdrbpvX66h4bUQBgtmwKeUjBD4sX6iMo2OZuBjfS2TSGNkYimpmXEVCioOK8OJMoyj2rydDMM8hKqyDdM8oCoNUVnAm8bQMZEegkukbYcUB7PX8C_vnAzZtiNGv5yUiuhwBpkTjIOmCjX8hqxORYqPoerZv_gXvN8VpBSbvVnZZKIJ3QX0n6LzSFePtR_w8i7bbHkXBF6FMvugMxcjMroG8UweDY4qTUAMqCdsxctf3-pgiBIDMobw";
    let routeAccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODM2MzQ0NiwibmJmIjoxNjk4MzYzNDQ2LCJleHAiOjE2OTgzNjgzNzYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUF1azNUdDNzUk1nZUJqcThMQld1cXQ0V1JwWllLWWlXMGhCdjBlY2o1cklQejkxNzhDWUtXNHVGaEZTTUhaRkNlIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuNjYuMTMyLjYyIiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJ5T1Z0UEtfWmVFTzJkbW9ER3lNeEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.biNXYMThZKiUgCfDtUv-FJ7qzWoLsSgUpSiAbRMQqaob9VFZQjFgd8jE4doTjyP2HAlY3DJ84qkmN3RfwhCC3Z_VehDj8ZvEJFYjIbLiDrQxmycUWY1SvttIN29l04c6EsLLBr_vCOiecWduAm2PQN1xBb1nc8HIZWeT-s7DCq7n9c8kQ7rxn_FGfE8S-m2xM6HBWteuUqPHguOWRy6sME83WcUVoHvyovq0I17TN9uXZ-YiFWLxaP_3KLxm4rt6Pap6nFpVReNJFXzlD7Nc33Ow84WX44SAXYRt50ws7hPVWcne31L8Y3iPuYXNHTpjKYTKn6jZKyPGr1ljZ-FgNw";

    return (
        <AccessTokenContext.Provider value={{airlineAccessToken, routeAccessToken}}>
            <Router>
                <Routes>
                    <Route path="/login" element={<UserLogin/>}/>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/ForRouteOverview" element={<RouteOverview/>}/>
                    <Route
                        path="/ForRouteDelayCancel"
                        element={<RouteDelayCancel/>}
                    />
                    <Route
                        path="/ForRouteBusynessSeat"
                        element={<RouteBusynessSeat/>}
                    />
                    <Route
                        path="/ForAirlineOverview"
                        element={<AirlineOverview/>}
                    />
                    <Route
                        path="/ForAirlineDelayCancel"
                        element={<AirlineDelayCancel/>}
                    />
                    {/* Add additional routes */}
                </Routes>
            </Router>
        </AccessTokenContext.Provider>
    );
}

export default App;
