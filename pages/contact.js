import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Box, useColorModeValue, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

import { gravityFormData } from "../pages/api/graphql/contact-form";
import Hero from "../components/blocks/hero";
import SectionWrap from "../components/partials/section-wrap";

const WP_SITE_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;


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
            size="lg"
            bg="white"
          />
        );
      default:
        return (
          <Input
            name={`input_${field.id}`}
            id={`input_${field.id}`}
            type={field.type}
            size="lg"
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
      const res = fetch(`${WP_SITE_URL}/wp-json/gf/v2/forms/1/submissions`,{
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


      <Hero headline="START A CONVERSATION" title="Let's build something beautiful together" />

      {fields && (
        <SectionWrap my="0">
        <Container maxW="70rem">
          <Box bg={useColorModeValue('white', 'gray.700')} padding={['2rem', '5rem']}>
          {!formSubmitted && <form
            onSubmit={submitForm}
            ref={formRef}
            action={`//voidmade.local/wp-json/gf/v2/forms/${fields.id}/submissions`}
            method="post"
          >
            <VStack align="start" spacing="2rem">
              {fields.map((field) => {
                return (
                  <FormControl key={field.id} id={field.id} isDisabled={formSubmitted || formSubmitting} isRequired>
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
        </SectionWrap>
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
