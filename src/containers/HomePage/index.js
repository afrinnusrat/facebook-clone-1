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
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          textBold: 'See photos and updates ',
          text: 'from friends in News Feed.',
          image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg'
        },
        {
          textBold: "Share what's new ",
          text: 'in your life on your Timeline.',
          image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg'
        },
        {
          textBold: 'Find more ',
          text: "of what you're looking for with Facebook Search.",
          image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg'
        },   
      ],
    };
  }
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
