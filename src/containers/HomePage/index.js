import React, { Component } from 'react';

import H1 from '../../components/H1';
import Login from '../../components/Login';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
          <H1 title="Facebook" />
          <Login>
          {/*
            <Input />
            <Input />
            <Button />
          */}            
          </Login>
        </header>
        {/*
        <main>
          <Disclaimer />
          <SignUp>
            <SignUpTitle />
            <SignUpForm>
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Select />
              <Radio />
              <Radio />
              <Button />
            </SignUpForm>
          </SignUp>
        </main>
        <Footer>
          <Navigation />
          <Navigation />
        </Footer>
        */}
      </div>
    );    
  }
}

export default HomePage;
