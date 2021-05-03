import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function myToast(msg) {
  const autoCloseTime =
    msg === 'saving...' ? 1500 : msg.length > 35 ? 8000 : 3000;
  toast(msg, {
    position: 'top-right',
    autoClose: autoCloseTime,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
