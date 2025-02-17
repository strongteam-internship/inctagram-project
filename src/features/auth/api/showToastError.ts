import { toast } from 'react-toastify'

export const showToastError = (message: string) => {
  toast.error(message, {
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    hideProgressBar: false,
    pauseOnHover: true,
    position: 'top-right',
    theme: 'colored',
  })
}
