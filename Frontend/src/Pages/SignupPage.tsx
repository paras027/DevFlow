
import InputBox from '../components/InputBox'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const SignupPage = () => {

  const username = useSelector((state:any) => state.auth.username);
  const password = useSelector((state:any) => state.auth.password);
  const navigate = useNavigate();

 async function Login(){


  const data = axios.post('http://localhost:8080/users/signup', {
    username: username,
    password: password
  })
  .then((response) => {
    console.log(response);
    navigate('/login');
  })
  .catch((error) => {
    console.error('There was an error!', error);
  });


    console.log('Signup function called')
  }

  function redirectToLogin() {
    console.log('Redirecting to Login')

    navigate('/login');

  }

  return (
    <div className='flex flex-col items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen justify-center text-white'>
      <InputBox 
        title={'DevFlow'}
        fields={['Username', 'Password']}
        buttonText={'Signup'}
        onSubmit={Login}
        belowMessage={'Have an account?'}
        belowButtonText={'Login'}
        redirectTo={redirectToLogin}
      />
    </div>
  )
}

export default SignupPage