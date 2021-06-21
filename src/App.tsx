import React, {FC} from 'react';
import {Button} from 'antd';
import TCButton from './components/Button/index';
// import logo from '/icons/icon-user-secondary.svg';

import './App.scss';

const App: FC = () => (
  <div className='App'>
    <div>
      <TCButton
        size='lg'
        type='primary'
        active
        onClick={function noRefCheck() {}}
      >
        Primary
      </TCButton>
      <TCButton
        size='lg'
        type='primary-icon'
        active
        onClick={function noRefCheck() {}}
      >
        <div>
          <img src='/icons/icon-user-secondary.svg' />
          <div>Account</div>
        </div>
      </TCButton>
      <TCButton
        size='lg'
        type='primary'
        disabled
        onClick={function noRefCheck() {}}
      >
        Primary
      </TCButton>
      <TCButton
        size='lg'
        type='primary-icon'
        disabled
        onClick={function noRefCheck() {}}
      >
        <div>
          <img src='/icons/icon-user-secondary4.svg' />
          <div>Account</div>
        </div>
      </TCButton>

      <TCButton
        size='lg'
        type='secondary'
        active
        onClick={function noRefCheck() {}}
      >
        Secondary
      </TCButton>
      <TCButton
        size='lg'
        type='secondary-icon'
        active
        onClick={function noRefCheck() {}}
      >
        <div>
          <img src='/icons/icon-user-secondary3.svg' />
          <div>secondary</div>
        </div>
      </TCButton>
      <TCButton
        size='lg'
        type='secondary'
        disabled
        onClick={function noRefCheck() {}}
      >
        Secondary
      </TCButton>
      <TCButton
        size='lg'
        type='secondary-icon'
        disabled
        onClick={function noRefCheck() {}}
      >
        <div>
          <img src='/icons/icon-user-secondary4.svg' />
          <div>secondary</div>
        </div>
      </TCButton>
    </div>
  </div>
);

export default App;
