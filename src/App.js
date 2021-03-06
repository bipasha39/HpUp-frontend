import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";

import { ChakraProvider, theme, Box } from '@chakra-ui/react';

import Login from './pages/login/Login';
import SignUp from "./pages/signUp/SignUp";
import Remind from "./pages/remind/Remind";
import CompanyDashboard from './pages/companyDashboard/CompanyDashboard';
import EmployeeHolidayRequest from './pages/employeeHolidayRequest/EmployeeHolidayRequest';
import CompanyHolidayApproval from './pages/companyHolidayApproval/CompanyHolidayApproval';
import EmployeeProfileView from './pages/employeeProfileView/EmployeeProfileView';
import UnderConstruction from './components/underConstruction/UnderConstruction';
function App() {
  return (
<Router>
  
<ChakraProvider theme={theme}>
      <Box minH="100vh" display="flex" flexDirection="column">  
        <Switch>
          <Route exact path="/">
          <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup" >
          <SignUp />
          </Route>
          <Route path="/remind">
          <Remind />
          </Route>
          <Route path ="/dashboard">
            <CompanyDashboard />
          </Route>
          <Route path ="/holiday">
            <EmployeeHolidayRequest />
          </Route>
          <Route path ="/holidaycom">
            <CompanyHolidayApproval />
          </Route>
          <Route path ="/profile">
            <EmployeeProfileView />
          </Route>
          <Route path="/talent">
              <UnderConstruction />
          </Route>
          <Route path="/payroll">
              <UnderConstruction />
          </Route>
          <Route path="/settings">
              <UnderConstruction />
          </Route>
          <Route path="/logout">
              <UnderConstruction />
          </Route>
          
        </Switch>
      </Box>
    </ChakraProvider>
</Router>
 );    
}

export default App;
