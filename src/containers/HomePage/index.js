import React, { Component } from 'react';
// import { connect } from 'react-redux';

import H1 from '../../components/H1';
import Login from '../../components/Login';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Disclaimer from '../../components/Disclaimer';
import SignUpContainer from '../../components/SignUpContainer';
import SignUpForm from '../../components/SignUpForm';
import SelectInput from '../../components/SelectInput';
import RadioInput from '../../components/RadioInput';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: {
          label: 'Email or Phone',
          id: 'login-email',
        }
      },
      disclaimer: {
        title: "Connect with friends and the world around you on Facebook.",
        sections: [
          {
            textBold: 'See photos and updates ',
            text: 'from friends in News Feed.',
            image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg',
          },
          {
            textBold: "Share what's new ",
            text: 'in your life on your Timeline.',
            image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg',
          },
          {
            textBold: 'Find more ',
            text: "of what you're looking for with Facebook Search.",
            image: 'http://www4.ac-nancy-metz.fr/clg-p-e-victor-corcieux/new/wp-content/uploads/th1.jpg',
          },   
        ],
      },
      selectMonth: ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      selectDay: ['Day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      selectYear: ['Year', 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009],
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <header>
          <H1 title="Facebook" />
          <Login>
            <TextInput label={this.state.login.email} />
            <TextInput />
            <Button />           
          </Login>
        </header>
        
        <main>
          <Disclaimer disclaimer={this.state.disclaimer} />
          <SignUpContainer>
            <SignUpForm>
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
              <SelectInput options={this.state.selectMonth} />
              <SelectInput options={this.state.selectDay} />
              <SelectInput options={this.state.selectYear} />
              <RadioInput />
              <RadioInput />
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
