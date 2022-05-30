import { Box, Button, Divider, Stack } from "@fidesui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Stepper from "../common/Stepper";
import OrganizationInfoForm from "./OrganizationInfoForm";

const ConfigWizardWalkthrough = () => {
  const router = useRouter();
  const [step, setStep] = useState(null);

  const handleCancelSetup = () => {
    // Cancel
    // Save progress ?
    router.push("/");
  };

  const handleChangeStep = () => {
    // Step
  };

  return (
    // Unique header to wizard
    <>
      <Box>
        <Button bg="transparent" onClick={handleCancelSetup}>
          x Cancel setup
        </Button>
      </Box>
      <Stack>
        <Divider orientation="horizontal" />
        <Stack direction={"row"} spacing="24px">
          <Box>
            <Stepper activeStep={1} />
          </Box>
          <OrganizationInfoForm handleChangeStep={handleChangeStep} />
        </Stack>
      </Stack>
      <Stack>
        Right hand side
        {/* give this stack 50% width to split page, this stack holds tooltips */}
      </Stack>
    </>
  );
};

export default ConfigWizardWalkthrough;
