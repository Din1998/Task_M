import '../App.css'

import userAvatar from '../Assist/avatar.jpg' 

const userAVT = userAvatar

export default function Navbar() {

  return(
    <div className="navbar">
      <h1 className='app-logo'>Task_M</h1>
      <img
      alt='avatar'
      className='avatar'
      src={userAVT}
      />
    </div>
  )

}