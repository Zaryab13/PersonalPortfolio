"use client";

import { useState } from "react";
import SectionHeading from "./UI/SectionHeading";
import useSectionView from "@/hooks/useSection-View";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./UI/SubmitBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const [observerRef] = useSectionView("Contact");

  // State for form inputs
  const [formValues, setFormValues] = useState({
    senderEmail: "",
    message: "",
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const formActionHandler = async (formData) => {
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email Sent Successfully");

    // Clear form values after successful submission
    setFormValues({
      senderEmail: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      ref={observerRef}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Please Contact me directly at{" "}
        <a className="underline" href="mailto:zaryabkhan4313@gmail.com">
          zaryabkhan4313@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black/80"
        action={formActionHandler}
      >
        <input
          type="email"
          name="senderEmail"
          required
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          placeholder="Your Email"
          maxLength={500}
          value={formValues.senderEmail}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          className="h-52 my-3 px-4 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          required
          maxLength={500}
          placeholder="Your Message"
          value={formValues.message}
          onChange={handleInputChange}
        ></textarea>
        <SubmitBtn />
      </form>
    </section>
  );
};

export default Contact;
