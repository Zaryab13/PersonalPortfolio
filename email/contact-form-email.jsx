import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const contactFormEmail = ({ message, senderEmail }) => {
  return <Html>
    <Head/>
    <Preview>New Message From Portfolio Site</Preview>
    <Tailwind>
        <Body className="bg-gray-300 text-black shadow-2xl">
            <Container>
                <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                    <Heading className="leading-tight">You Recieved the following Message</Heading>
                    <Text>{message}</Text>
                    <Hr/>
                    <Text>The Senders Email is: {senderEmail}</Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
  </Html>;
};

export default contactFormEmail;
