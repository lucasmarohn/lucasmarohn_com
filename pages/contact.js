import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

import { fetchAPI } from "../pages/api/graphql/fetch-api";
import { gravityFormData } from "../pages/api/graphql/contact-form";


export default function Contact({ gFormData }) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const formRef = useRef();
  const fields = gFormData.formFields.nodes;
  const printField = (field) => {
    switch (field.type) {
      case "textarea":
        return (
          <Textarea
            name={`input_${field.id}`}
            id={`input_${field.id}`}
            type={field.type}
            bg="white"
          />
        );
      default:
        return (
          <Input
            name={`input_${field.id}`}
            id={`input_${field.id}`}
            type={field.type}
            bg="white"
          />
        );
    }
  };
  async function submitForm(e) {
    e.preventDefault();
    setFormSubmitting(true)
    setTimeout(()=> {
      const formData = new FormData(formRef.current)
      console.log('formData', formData)
      const res = fetch('http://voidmade.local/wp-json/gf/v2/forms/1/submissions',{
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if(response.is_valid) {
          setFormSubmitted(true)
        }
      })
      .catch((error)=> {console.error('error', error)})
    }, 500)
  }
  return (
    <Layout>
      <Head>
        <title>Testing</title>
      </Head>
      <Container maxW="800">
        <VStack textAlign="center" py="5rem" spacing="1rem">
          <Heading size="xs">BRAND DESIGN AGENCY</Heading>
          <Heading size="xl" as="h1">
            Data-driven design strategy that makes your company more profitable
          </Heading>
          <Text fontSize="xl" maxW="700">
            Generate more leads, transactions, or what ever KPI's matter to you.
          </Text>
        </VStack>
      </Container>

      {fields && (
        <Container maxW="70rem">
          <Box bg="white" padding={['2rem', '5rem']}>
          {!formSubmitted && <form
            onSubmit={submitForm}
            ref={formRef}
            action={`//voidmade.local/wp-json/gf/v2/forms/${fields.id}/submissions`}
            method="post"
          >
            <VStack align="start" spacing="2rem">
              {fields.map((field) => {
                return (
                  <FormControl key={field.id} htmlId={field.id} isDisabled={formSubmitted || formSubmitting} isRequired>
                    <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
                    {printField(field)}
                  </FormControl>
                );
              })}
              
              <Button type="submit" variant="primary" disabled={formSubmitted || formSubmitting}>
                Contact Us
              </Button>
              
            </VStack>
          </form>}
          {formSubmitted && <Box textAlign="center">Thanks for reaching out. Your message has been sent successfully.</Box>}
          </Box>
        </Container>
      )}
      
    </Layout>
  );
}

export async function getStaticProps(context, preview) {
  const gFormData = await gravityFormData();
  return {
    props: {
      gFormData,
    },
  };
}
