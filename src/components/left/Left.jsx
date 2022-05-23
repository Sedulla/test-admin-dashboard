import { LeftSideContainer } from './left.tw';
import { Favorites } from './shared/Favorites';
import { Menu } from './shared/Menu';

// COMPONENTS
import { Profile } from './shared/Profile';

export const Left = () => {
  return (
    <LeftSideContainer>
      <Profile />
      <Menu />
      <Favorites />
    </LeftSideContainer>
  );
};
