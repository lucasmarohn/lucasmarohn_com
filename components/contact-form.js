import {
  VStack,
  Input,
  Form,
  FormLabel,
  FormControl,
  Textarea,
  Button,
  RadioGroup,
  Stack,
  Radio,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState, useRef } from 'react'

const ContactForm = ({ formId, textAlign }) => {
  if(!formId) {
    throw new Error("No formId provided to form component")
  }

  const [formSubmitted, setFormSubmitted] = useState(null)
  const [formError, setFormError] = useState(null)
  const formRef = useRef()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(formRef.current)
    console.log('formData', new URLSearchParams(formData).toString())
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: new URLSearchParams(formData).toString()
    }).then(() => setFormSubmitted(true)).catch(error => {
      setFormError(error)
      formSubmitted(false)
    })
  }
  if(formSubmitted) {
    return (
      <VStack bg="gray.50" border="1px solid" borderColor="gray.300" p={12} borderRadius={10} align="left" w="100%">
        <Heading variant="headline">Thank You</Heading>
        <Heading variant="h3">Your message has been sent successfully</Heading>
        <Text>We respond to all messages. We will reach out to you by phone or by email shortly.</Text>
      </VStack>
    )
  } 
  if(formSubmitted === false) {
    return (
      <VStack bg="red.50" border="1px solid" borderColor="red.400" p={12} borderRadius={10} align="left" w="100%">
        <Heading variant="headline" color="red.400">Error</Heading>
        <Heading variant="h3">Your message was not sent</Heading>
        <Text>Please refresh the page and try again, or call our phone number.</Text>
        <form name="error" method="POST" data-netlify="true">
          <VStack align="left">
          <input type="hidden" name="form-name" value="error" />
          {formError && <Input type="text" value={formError} readOnly />}
          <Button type="submit" colorScheme="red">Send Error Report</Button>
          </VStack>
        </form>
      </VStack>
    )
  }
  return (
    <form
      name={formId}
      method="POST"
      data-netlify="true"
      onSubmit={handleFormSubmit}
      ref={formRef}
    >
      <input type="hidden" name="form-name" value={formId} />
      <VStack
        spacing={6}
        align="left"
        alignSelf="center"
        textAlign={textAlign}
        w="100%"
      >
        <FormControl isRequired>
          <FormLabel htmlFor="name" fontWeight={600}>
            Your Name:
          </FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            id="name"
            size="lg"
            pt={2}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email" fontWeight={600}>
            Your Email:
          </FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            id="email"
            size="lg"
            pt={2}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message" fontWeight={600}>
            Your Message:
          </FormLabel>
          <Textarea
            name="message"
            id="message"
            placeholder="Your Message"
            size="lg"
            rows={6}
            pt={4}
          />
        </FormControl>
        <Button type="submit" variant="primary" size="lg">
          Send
        </Button>
      </VStack>
    </form>
  );
};

export default ContactForm;
