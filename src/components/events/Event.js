import { createDiscountAndNavigate } from '../../pages/events';
import { limitChars } from '../../util/helpers';
import { Grid, Box, Heading, Text, Button, Flex, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Event(props) {
  const [isRedirecting, setisRedirecting] = useState(true);
  return (
    <Grid
      minHeight="300px"
      gridTemplateColumns={['1fr', '1fr', '2fr 3fr']}
      gap={['1rem', '1rem', '3rem']}
      borderRadius="12px"
      transition="0.2s"
      _hover={{
        cursor: 'pointer',
        color: 'orange',
        backgroundColor: '#252b38',
      }}
    >
      <Box
        minHeight="250px"
        borderRadius="12px"
        backgroundImage={props.img}
        backgroundSize="cover"
        backgroundPosition="center"
      />
      <Flex
        paddingY={['0', '0', '2rem']}
        paddingX={['0.5rem', '1rem', '0']}
        justifyContent="space-between"
        flexDirection="column"
      >
        {props.isMember | props.shareable ? (
          <Link href={props.link} target="_blank">
            <Box>
              <Heading mb="2">{props.title}</Heading>
              <Text fontSize="1.5rem" color="white !important">
                {props.date}
              </Text>
              <Text fontWeight="bold" color="white !important">
                {props.startTime + ' - ' + props.endTime}
              </Text>
              <Text mt="2" fontSize="1.2rem" color="white !important">
                {limitChars(props.description, 120)}
              </Text>
            </Box>
          </Link>
        ) : (
          <Box>
            <Heading mb="2">{props.title}</Heading>
            <Text fontSize="1.5rem" color="white !important">
              {props.date}
            </Text>
            <Text fontWeight="bold" color="white !important">
              {props.startTime + ' - ' + props.endTime}
            </Text>
            <Text mt="2" fontSize="1.2rem" color="white !important">
              {limitChars(props.description, 120)}
            </Text>
          </Box>
        )}
        <Button
          variant="unstyled"
          rightIcon={<FaArrowRight />}
          textAlign="left"
          transition="inherit"
          onClick={createDiscountAndNavigate.bind(
            '',
            props.eventId,
            props.link,
            props.isMember | props.shareable
          )}
          disabled={!(props.isMember | props.shareable)}
        >
          {props.isMember | props.shareable ? 'Get Tickets' : 'Members Only'}
        </Button>
      </Flex>
    </Grid>
  );
}

export default Event;
