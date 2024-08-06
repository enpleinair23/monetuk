import PropTypes from "prop-types";
import * as IoIcon from "react-icons/io5";
import emailjs from "emailjs-com";
import { useState } from "react";

function ContactUs({ contactItems }) {
  const singleField = `flex w-full`;
  const inputField = `border border-[#e8e8e8] focus-visible:outline-0 placeholder:text-[#7b7975] py-[10px] px-[20px] w-full h-[50px]`;
  const textareaField = `border border-[#e8e8e8] focus-visible:outline-0 placeholder:text-[#7b7975] p-[15px] w-full h-[150px]`;
  const secondaryButton =
    "flex bg-primary hover:bg-secondary text-white leading-[38px] text-[15px] h-[40px] px-[32px]";

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_35sxe2u", // service id
          "template_cklat2d", // template id
          mailData,
          "jeVslsWc-jHc7CtpE" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", subject: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className="contact border-b border-[#ededed] pb-[40px]">
      <div
        className="flex container"
        action="/"
        id="contact_form"
        method="POST"
        onSubmit={onSubmit}
      >
        <form className="w-full">
          <div
            className={error ? "empty_notice" : "returnmessage"}
            style={{ display: error == null ? "none" : "block" }}
          >
            <span>
              {error
                ? "Please Fill Required Fields"
                : "Your message has been received, We will contact you soon."}
            </span>
          </div>
          <div
            className="returnmessage"
            data-success="Your message has been received, We will contact you soon."
          />
          <div className="group-field flex mb-[20px]">
            <div className={`${singleField} mr-[20px]`}>
              <input
                className={`${inputField}`}
                name="name"
                onChange={(e) => onChange(e)}
                value={name}
                id="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className={`${singleField}`}>
              <input
                className={`${inputField}`}
                name="email"
                onChange={(e) => onChange(e)}
                value={email}
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className={`${singleField}  mb-[20px]`}>
            <input
              className={`${inputField}`}
              name="subject"
              onChange={(e) => onChange(e)}
              value={subject}
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className={`${singleField} mb-[30px]`}>
            <textarea
              className={`${textareaField}`}
              name="message"
              onChange={(e) => onChange(e)}
              value={message}
              id="message"
              placeholder="Message"
              required
            />
          </div>
          <button type="submit" className={`${secondaryButton}`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

ContactUs.propTypes = {
  contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactUs;
