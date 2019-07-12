import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { Title } from './style';

class Template extends Component {
  render() {
    return (
      <div>
        <Container>
          <Title>Test</Title>
        </Container>
      </div>
    );
  }
}

export default Template;
