import classes from './UserProfile.module.css';

const UserProfile = () => {
  <button className='dark-mode'>Toogle</button>
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
