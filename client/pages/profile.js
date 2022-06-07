const ProfilePage = ({ currentUser, name }) => {
  return <h1>This is a Profile Page {name}</h1>
};

export async function getServerSideProps(context) {
  console.log('Profile page getServerSideProps')

  return {
    props: {
      name: '1111'
    }
  }
}

export default ProfilePage;
