import { toast } from 'react-toastify';

export const Alert = () => {
	toast.success('Mensaje enviado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
};
