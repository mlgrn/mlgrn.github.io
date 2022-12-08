import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { sendContactForm } from "../utils/sendContactForm";

type Props = {};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // email form submission
  const [formState, setFormState] = useState(false);

  const onSubmit = handleSubmit(async (formData) => {
    try {
      await sendContactForm(formData);
      setFormState(true);
    } catch (err) {
      console.log("there was an error");
    }
  });

  return (
    <div
      className="h-screen flex relative flex-col text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center ">
          Let&apos;s talk about
          <span className="underline decoration-[#F7AB0A]/50">
            {" "}
            your project.
          </span>
        </h4>

        <p className="text-md text-center m-20">
          Available for freelance, contract, or full time opportunities.
        </p>

        {/* <div space-y-10>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123456789</p>
          </div>
        </div> */}

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Remote or Local to NYC area</p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">emilio at emilioguarino.com</p>
          </div>
        </div>
      </div>

      {formState && <text>Your message has been sent!</text>}

      <form
        onSubmit={onSubmit}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="space-x-2">
          <input
            {...register("name", { required: "A name is required" })}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <p>{errors.name?.message}</p>
          <input
            {...register("email", { required: "An email is required" })}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
          <p>{errors.email?.message}</p>
        </div>

        <input
          {...register("subject", {
            required: "A message subject is required",
          })}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />
        <p>{errors.subject?.message}</p>

        <textarea
          {...register("message", {
            required: "A message is required",
            minLength: 4,
          })}
          placeholder="Message"
          className="contactInput"
        />
        <p>{errors.subject?.message}</p>

        <button
          type="submit"
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
