
// import InputBox from '../components/InputBox'
// import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'


// const SignupPage = () => {

//   const username = useSelector((state:any) => state.auth.username);
//   const password = useSelector((state:any) => state.auth.password);
//   const navigate = useNavigate();

//  async function Login(){


//   const data = axios.post('http://13.49.57.230:8080/users/signup', {
//     username: username,
//     password: password
//   })
//   .then((response) => {
//     console.log(response);
//     navigate('/login');
//   })
//   .catch((error) => {
//     console.error('There was an error!', error);
//   });


//     console.log('Signup function called')
//   }

//   function redirectToLogin() {
//     console.log('Redirecting to Login')

//     navigate('/login');

//   }

//   return (
//     <div className='flex flex-col items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen justify-center text-white'>
//       <InputBox 
//         title={'DevFlow'}
//         fields={['Username', 'Password']}
//         buttonText={'Signup'}
//         onSubmit={Login}
//         belowMessage={'Have an account?'}
//         belowButtonText={'Login'}
//         redirectTo={redirectToLogin}
//       />
//     </div>
//   )
// }

// export default SignupPage

import InputBox from '../components/InputBox'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const username = useSelector((state: any) => state.auth.username);
  const password = useSelector((state: any) => state.auth.password);
  const navigate = useNavigate();

  async function Login() {
    try {
      const response = await axios.post('http://13.49.57.230:8080/users/signup', {
        username: username,
        password: password
      });
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.error('There was an error!', error);
      // TODO: Add user-friendly error handling/toast
    }
    console.log('Signup function called');
  }

  function redirectToLogin() {
    console.log('Redirecting to Login');
    navigate('/login');
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8'>
      <div className='w-full max-w-sm sm:max-w-md lg:max-w-lg'>
        <InputBox 
          title={'DevFlow'}
          subtitle='Create your account to get started.'
          fields={['Username', 'Password']}
          buttonText={'Sign Up'}
          onSubmit={Login}
          belowMessage={'Already have an account?'}
          belowButtonText={'Login'}
          redirectTo={redirectToLogin}
        />
      </div>
    </div>
  )
}

export default SignupPage
