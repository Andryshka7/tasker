import { clearCookies } from 'helpers'
import { FaSignOutAlt } from 'react-icons/fa'

const SignOut = () => (
    <div
        className='mx-auto mb-3 mt-7 flex w-fit cursor-pointer items-center gap-2'
        onClick={() => {
            clearCookies()
            console.log('sign out')
        }}
    >
        <FaSignOutAlt size={20} />
        <h3 className='font-bold'>Sign out</h3>
    </div>
)

export default SignOut
