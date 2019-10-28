import React from 'react';
import { Page } from '@layouts';
import { withSeo } from '@utils';
import { Button } from '@components';
import '@styles/pages/Index.scss';

const IndexPage = () => (
  <Page className='index'>
    <h1 className='index__title'>CSEC Pear Impact Project - Starter Code</h1>
    <p className='index__text'>Not an actual fruit...</p>
    <Button className='index__button' to='/welcome'>
      Let's Get Started
    </Button>
  </Page>
);

export default withSeo(IndexPage, {
  title: 'Home',
});
