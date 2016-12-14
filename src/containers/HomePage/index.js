import React, { Component } from 'react';

import H1 from '../../components/H1';
import Login from '../../components/Login';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Disclaimer from '../../components/Disclaimer';
import SignUpContainer from '../../components/SignUpContainer';
import SignUpForm from '../../components/SignUpForm';
import SelectInput from '../../components/SelectInput';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
          <H1 title="Facebook" />
          <Login>
            <TextInput />
            <TextInput />
            <Button />           
          </Login>
        </header>
        
        <main>
          <Disclaimer />
          <SignUpContainer>
            <SignUpForm>
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
              <SelectInput />
              <SelectInput />
              <SelectInput />
              {/*
              <Radio />
              <Radio />
              */}
              <Button />
            </SignUpForm>
          </SignUpContainer>
        </main>
        {/*
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
