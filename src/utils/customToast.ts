import { toast, TypeOptions } from 'react-toastify';

export const customToast = (message: string, type: TypeOptions) => {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type: type,
    style: {
      transition: 'all 0.5s ease-in-out',
    },
  });
};
