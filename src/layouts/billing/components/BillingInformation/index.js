/**
=========================================================
* MisterVoiture - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// MisterVoiture components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="oliver liam"
            address="84 Street, City, State 24813"
            email="oliver@burrito.com"
            tel="+212660108306"
          />
          <Bill
            name="lucas harper"
            address="84 Street, City, State 24815"
            email="lucas@stone-tech.com"
            tel="+212660108309"
          />
          <Bill
            name="ethan james"
            address="fiber notional, City, State 24817"
            email="ethan@fiber.com"
            tel="+212660108312"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
