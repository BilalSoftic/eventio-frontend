import React, { Component } from 'react';
import { Heading, Text, Image } from '@gluestack-ui/themed';

const EventioHeading = () => {
  return (
    <Heading style={{ position: 'absolute', top: 57, left: 16 }}>
      <Text
        style={{
          fontFamily: 'RobotoBold',
          color: '#fff',
          fontSize: 24,
          fontWeight: 600,
          lineHeight: 28,
          letterSpacing: 1,
        }}
      >
        Eventio
      </Text>
    </Heading>
  );
};

export default EventioHeading;
