/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import yo01 from "/Img/proyectos-img/yo01.jpg";

// 📌 Esquema de validación con Zod
const formSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_email: z.string().email("Invalid email format"),
  message: z.string().min(2, "Message must be at least 2 characters"),
});

export const Contacto = () => {
  const form = useRef<HTMLFormElement>(null);

  const { formState: { errors }, handleSubmit, register, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 📩 Función para enviar el email
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    if (!form.current) {
      console.error("Form is not available.");
      return;
    }

    console.log("Sending data: ", data); // ✅ Asegura que user_name se esté enviando correctamente

    emailjs
      .sendForm(
        "service_ahrudvq", // Reemplaza con tu Service ID
        "template_b3hslue", // Reemplaza con tu Template ID
        form.current,
        "wDgSjJyVGPm0mnjDo" // Reemplaza con tu Public Key
      )
      .then(
        () => {
          Swal.fire("Message sent successfully!", "Thank you for contacting us", "success");
          reset(); // Resetea el formulario después de enviarlo
        },
        (error) => {
          console.error("FAILED...", error.text);
          Swal.fire("Error", "Failed to send message. Try again later.", "error");
        }
      );
  };

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center mt-20 bg-gray-900 py-10">
      
      {/* 🖼 Imagen bien centrada */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-6">
        <img src={yo01} className="w-3/4 lg:w-full max-w-lg h-auto rounded-xl shadow-lg" alt="Profile" />
      </div>

      {/* 📩 Sección de contacto mejor alineada */}
      <div className="flex-1 flex flex-col justify-center items-center py-8">
        <div className="w-full max-w-lg px-4 text-white">
          <h3 className="text-4xl font-semibold text-white sm:text-5xl text-center lg:text-left">
            Get in touch
          </h3>
          <p className="mt-3 sm:text-xl text-center lg:text-left">
            If you have any questions or want more information, fill out the form and we will get in touch.
          </p>

          {/* 📌 Métodos de contacto */}
          <ul className="flex flex-wrap justify-center lg:justify-start items-center mt-6 gap-x-10 gap-y-6">
            <li className="flex items-center gap-x-3 sm:text-xl">
              <span className="text-gray-400">📧</span>
              <p>justingomezcoello@gmail.com</p>
            </li>
            <li className="flex items-center gap-x-3 sm:text-xl">
              <span className="text-gray-400">📍</span>
              <p>Quito, Ecuador</p>
            </li>
          </ul>

          {/* 🔗 Redes Sociales */}
          <div className="flex justify-center lg:justify-start gap-3 mt-6">
            <NavLink to="https://github.com/JustinGomezcoello" target="_blank">
              <img src="https://www.svgrepo.com/show/94698/github.svg" width="30" height="30" alt="GitHub" />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/justin-gomezcoello/" target="_blank">
              <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn" />
            </NavLink>
          </div>

          {/* 📬 Formulario de contacto */}
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5">
            <div>
              <label className="font-medium sm:text-xl">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                {...register("user_name")}
                className="w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm focus:border-gray-800 text-white"
              />
            </div>

            <div>
              <label className="font-medium sm:text-xl">Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register("user_email")}
                className="w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm focus:border-gray-800 text-white"
              />
            </div>

            <div>
              <label className="font-medium sm:text-xl">Message</label>
              <textarea
                placeholder="Write your questions or doubts"
                {...register("message")}
                className="w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm h-32 focus:border-gray-800 text-white"
              ></textarea>
            </div>

            <button className="w-full px-4 py-2 font-medium text-white bg-blue-400 rounded-lg sm:text-xl hover:bg-gray-700 active:bg-gray-900">
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contacto;
