import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../Api/User";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Store/UserSlice.ts";
export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (formData) => {
    try {
      // Effectuez ici votre appel API avec les données du formulaire (formData)
      const response = await loginUser(formData.email, formData.password);
      console.log(response);
      if (response.data && response.data.token.token) {
        dispatch(login(response.data));
      
        navigate("/dashboard");
      } else {
        if (response.message === "EMAIL_NOT_FOUND") {
          toast.error("L'adresse email n'existe pas !");
        }

        if (response.message === "WRONG_PASSWORD") {
          toast.error("Le mot de passe est incorrect !");
        }
      }
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Connexion à votre compte
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            id="myForm"
            method="POST"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  {...register("email", { required: true })}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Mot de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...register("password", { required: true })}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Connexion
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Pas encore de compte ?
          </p>
        </div>
      </div>
    </div>
  );
}
