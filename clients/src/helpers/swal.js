import Swal from "sweetalert2";

export const swalError = (err) => {
  Swal.fire({
    icon: "error",
    title: "Oopss...",
    text: err.response.data.message,
    timer: 1500,
  });
};

export const swallSuccess = () => {
  Swal.fire({
    icon: "success",
    title: "gotcha",
    timer: 1500,
  });
};
