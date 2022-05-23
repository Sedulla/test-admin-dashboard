import {
  UserProfileBox,
  UserProfileName,
  UserProfileImage,
  ProfileNameText,
  ProfileNameSubText,
} from '../left.tw';

export const Profile = () => {
  return (
    <>
      <UserProfileBox>
        <UserProfileImage src="" alt="User Profile Image" />
        <UserProfileName>
          <ProfileNameText>
            {/* {userProfileName} */}
            Sedulla Jafarli
          </ProfileNameText>
          <ProfileNameSubText>
            {/* {userProfileNameSubText} */}
            Jr. Frontend Developer
          </ProfileNameSubText>
        </UserProfileName>
      </UserProfileBox>
    </>
  );
};
