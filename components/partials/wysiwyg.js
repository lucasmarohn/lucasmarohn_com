import parse, { domToReact, attributesToProps } from "html-react-parser";
import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  StylesProvider,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import Container from "../container";
import Image from "next/image";

import { replaceURL } from '../../lib/helpers'
import Link from "next/link";

export default function Wysiwyg({ html, color = undefined }) {
  const parseOptions = {
    replace: (domNode) => {
      // TEXT STYLES
      if (domNode.attribs && domNode.name === "h2") {
        const props = attributesToProps(domNode.attribs);
        return (
          <Heading
            as="h2"
            variant="h2"
            size="2xl"
            mb="1rem"
            textColor={color}
            {...props}
          >
            {domToReact(domNode.children, parseOptions)}
          </Heading>
        );
      }
      if (domNode.attribs && domNode.name === "h3") {
        const props = attributesToProps(domNode.attribs);
        return (
          <Heading
            as="h3"
            variant="h3"
            size="lg"
            mb="1rem"
            textColor={color}
            {...props}
          >
            {domToReact(domNode.children, parseOptions)}
          </Heading>
        );
      }
      if (domNode.attribs && domNode?.attribs?.class?.includes('headline') ) {
        const props = attributesToProps(domNode.attribs);
        console.log(domNode.attribs.class)
        return (
          <Heading
            as="span"
            variant="h6"
            textColor={color}
            {...props}
          >
            {domToReact(domNode.children, parseOptions)}
          </Heading>
        );
      }
      if (domNode.attribs && domNode.name === "p") {
        const props = attributesToProps(domNode.attribs);
        return (
          <Text
            as="p"
            mb="1rem"
            textColor={color === "white" ? "rgba(255,255,255,.83)" : color}
            {...props}
          >
            {domToReact(domNode.children, parseOptions)}
          </Text>
        );
      }
      if (domNode.attribs && domNode.name === "ul") {
        const props = attributesToProps(domNode.attribs);
        return (
          <UnorderedList
            ml="0"
            mb="1rem"
            textColor={color === "white" ? "rgba(255,255,255,.83)" : color}
            {...props}
          >
            {domToReact(domNode.children, parseOptions)}
          </UnorderedList>
        );
      }
      // if (domNode.attribs && domNode.name === "li") {
      //   const props = attributesToProps(domNode.attribs);
      //   return (
      //     <ListItem
      //       pl=".5rem"
      //       color="blue.400"
      //       textColor={color === "white" ? "rgba(255,255,255,.83)" : color}
      //       {...props}  
      //     >
      //       <Text color="gray.600">
      //         {domToReact(domNode.children, parseOptions)}
      //       </Text>
      //     </ListItem>
      //   );
      // }
      if (domNode.attribs && domNode.name === "a") {
        console.log(domNode) 
        return (
          <Link href={replaceURL(domNode.attribs.href)} target={domNode.attribs.target} passHref><a>{domToReact(domNode.children, parseOptions)}</a></Link>
        )
      }
      // if (domNode.attribs && domNode.name === "img") {
      //   console.log("image", domNode);
      //   return (
      //     <Image
      //       src={domNode.attribs.src}
      //       srcSet={domNode.attribs.srcset}
      //       width={domNode.attribs.width}
      //       height={domNode.attribs.height}
      //       alt={domNode.attribs.alt}
      //       layout="responsive"
      //     />
      //   );
      // }

      // HTML SNIPPETS
      if (
        domNode.attribs &&
        domNode.name === "div" &&
        domNode.attribs.class.includes("container--wide")
      ) {
        const props = attributesToProps(domNode.attribs);
        return (
          <Container classList="container" {...props}>
            {domToReact(domNode.children, parseOptions)}
          </Container>
        );
      }
    },
  };

  return <>{parse(html.toString(), parseOptions)}</>;
}
