
import InputBox from '../components/InputBox'
import axios from 'axios'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export function LoginPage({ setToken }: { setToken: (t: string) => void }) {

  const username = useSelector((state: any) => state.auth.username);
  const password = useSelector((state: any) => state.auth.password);
  const navigate = useNavigate();


  async function Login() {


    const data = axios.post('http://13.49.57.230:8080/users/login', {
      username: username,
      password: password
    },
      {
        withCredentials: true
      })
      .then((response) => {
        console.log(response);
        setToken(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });


    console.log('Signup function called')
  }

  function redirectToHomepage() {
    console.log('Redirecting to HomePage')
    navigate('/');
  }

  return (
    <div className='flex flex-col items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen justify-center text-white'>
      <InputBox
        title={'DevFlow'}
        fields={['Username', 'Password']}
        buttonText={'Login'}
        onSubmit={Login}
        belowMessage={'Don\'t have an account?'}
        belowButtonText={'Signup'}
        redirectTo={redirectToHomepage}
      />
    </div>
  )
}
