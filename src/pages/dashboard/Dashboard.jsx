import { Main } from './dashboard.tw';

// COMPONENTS
import { Left } from '../../components/left/Left';
import { Center } from '../../components/center/Center';
import { Right } from '../../components/right/Right';

export const Dashboard = () => {
  return (
    <>
      <Main>
        <Left />
        <Center />
        <Right />
      </Main>
    </>
  );
};
