import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import SuccessModal from './components/SuccessModal'

function App() {

  const [completed, setCompleted] = useState(false)
  const [showModal, setShowModal] = useState(true)

  const toggleCompleted = () => {
    setCompleted(prevCompleted => !prevCompleted)
  }

  const dismissModal = () => {
    setShowModal(false)
  }

  

  return (
    <div className="flex w-screen h-screen justify-center items-center md:bg-[#36384e]">
      {completed ? showModal ? <SuccessModal dismissModal={dismissModal} />: null : <SignUpForm toggleCompleted={toggleCompleted} />}
    </div>
  )
}

export default App
