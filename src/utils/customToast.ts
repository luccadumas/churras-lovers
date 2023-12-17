import { toast } from 'react-toastify';

export const customToast = (message: string, type: string) => {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    Animation: true,
    type: type,
  });
};
