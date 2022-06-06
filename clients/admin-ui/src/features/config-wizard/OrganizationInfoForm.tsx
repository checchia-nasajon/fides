import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Tooltip,
} from "@fidesui/react";
import { useFormik } from "formik";
import type { NextPage } from "next";
import React, { useState } from "react";

import { QuestionIcon } from "~/features/common/Icon";

const useOrganizationInfoForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      organizationName: "",
      organizationDescription: "",
    },
    onSubmit: async () => {
      setIsLoading(true);
      // submission API call when available
      setIsLoading(false);
    },
    validate: (values) => {
      const errors: {
        organizationName?: string;
        organizationDescription?: string;
      } = {};

      if (!values.organizationName) {
        errors.organizationName = "Organization name is required";
      }

      if (!values.organizationDescription) {
        errors.organizationDescription = "Organization description is equired";
      }

      return errors;
    },
  });

  return { ...formik, isLoading };
};

const OrganizationInfoForm: NextPage<{
  handleChangeStep: Function;
}> = ({ handleChangeStep }) => {
  const {
    errors,
    handleBlur,
    handleChange,
    // handleSubmit,
    isLoading,
    touched,
    values,
  } = useOrganizationInfoForm();

  return (
    <Stack spacing="24px" w="60%">
      <Heading as="h3" size="lg">
        Tell us about your business
      </Heading>
      <div>
        Provide your organization information. This information is used to
        configure your organization in Fidesctl for{" "}
        <Tooltip
          fontSize="md"
          label="Wondering what a data map is? No problem, we've got your covered with this quick overview here"
          placement="right"
        >
          <Text display="inline" color="complimentary.500">
            data map
          </Text>
        </Tooltip>{" "}
        reporting purposes.
      </div>
      <Stack>
        <FormControl>
          <Stack direction="row" mb={5} justifyContent="flex-end">
            <FormLabel w="100%">Organization name</FormLabel>
            <Input
              type="text"
              id="organizationName"
              name="organizationName"
              focusBorderColor="gray.700"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.organizationName}
              isInvalid={
                touched.organizationName && Boolean(errors.organizationName)
              }
              minW="65%"
              w="65%"
            />
            <Tooltip
              fontSize="md"
              label="The legal name of your organization"
              placement="right"
            >
              <QuestionIcon boxSize={5} color="gray.400" />
            </Tooltip>
          </Stack>
          <Stack direction="row" justifyContent="flex-end">
            <FormLabel w="100%">Description</FormLabel>
            <Input
              type="text"
              id="organizationDescription"
              name="organizationDescription"
              focusBorderColor="gray.700"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.organizationDescription}
              isInvalid={
                touched.organizationDescription &&
                Boolean(errors.organizationDescription)
              }
              minW="65%"
              w="65%"
            />
            <Tooltip
              fontSize="md"
              label="An explanation of the type of organization and primary activity. 
                  For example “Acme Inc. is an e-commerce company that sells scarves.”"
              placement="right"
            >
              <QuestionIcon boxSize={5} color="gray.400" />
            </Tooltip>
          </Stack>
        </FormControl>
      </Stack>
      <Button
        bg="primary.800"
        _hover={{ bg: "primary.400" }}
        _active={{ bg: "primary.500" }}
        colorScheme="primary"
        disabled={!values.organizationName || !values.organizationDescription}
        isLoading={isLoading}
        onClick={() => handleChangeStep(1)}
      >
        Save and Continue
      </Button>
    </Stack>
  );
};
export default OrganizationInfoForm;
