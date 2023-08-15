import iconList from '../assets/images/icon-list.svg'
import PropTypes from 'prop-types'

const SuccessModal = (props) => {
  return (
    <div className="flex flex-col p-8 gap-6 justify-around bg-white rounded-md md:justify-normal md:max-w-md md:mx-auto md:shadow-lg">
        <div className="flex flex-col gap-7">
            <img className="w-14" src={iconList} />
            <h1 className="text-4xl font-bold">Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span className="font-bold">email</span>. Please open it and click the button inside to confirm your subscription</p>
        </div>
        <button className="bg-[#242742] text-white p-4 rounded-md font-bold hover:bg-[#ff6257]" onClick={props.dismissModal}>Dismiss message</button>
    </div>
  )
}

SuccessModal.propTypes = {
  dismissModal: PropTypes.func
}

export default SuccessModal