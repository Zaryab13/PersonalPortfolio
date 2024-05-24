"use client";

import SectionHeading from "./UI/SectionHeading";
import useSectionView from "@/hooks/useSection-View";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./UI/SubmitBtn";
import toast from "react-hot-toast";
// import useInput from "@/hooks/use-input";

const Contact = () => {
  const [observerRef] = useSectionView("Contact");

  const formActionHandler = (formData) => {
    async (formData) => {
      const [data,error] = await sendEmail(formData);
      if (error) {   
        toast.error(error)
        return
      } 

      toast.success("Email Sent Successfully")
    }}
  return (
    <section
      id="contact"
      ref={observerRef}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Please Contact me directly at{" "}
        <a className="underline" href="mailto:zaryab@webnextsol.com">
          zaryab@webnextsol.com
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
        />
        <textarea
          name="message"
          className="h-52 my-3 px-4 rounded-lg borderBlack p-4  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          required
          maxLength={500}
          placeholder="Your Message"
        ></textarea>
        <SubmitBtn />
      </form>
    </section>
  );
};

export default Contact;
