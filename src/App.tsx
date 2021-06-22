import {FC} from 'react';
import TCButton from './components/Button/index';
import CustomSvg from './components/CustomSvg/index';
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
        type='primary'
        active
        onClick={function noRefCheck() {}}
      >
        <div>
          <CustomSvg />
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
        type='primary'
        disabled
        onClick={function noRefCheck() {}}
      >
        <div>
          <CustomSvg />
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
        type='secondary'
        active
        onClick={function noRefCheck() {}}
      >
        <div>
          <CustomSvg />
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
        type='secondary'
        disabled
        onClick={function noRefCheck() {}}
      >
        <div>
          <CustomSvg />
          <div>secondary</div>
        </div>
      </TCButton>
    </div>
  </div>
);

export default App;
