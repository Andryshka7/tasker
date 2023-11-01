import Cookies from 'js-cookie'

const clearCookies = () => {
    const cookies = Cookies.get()

    for (const cookieName in cookies) {
        if (cookies.hasOwnProperty(cookieName)) {
            Cookies.remove(cookieName)
        }
    }
}

export default clearCookies
