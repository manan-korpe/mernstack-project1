import contactImage from "../assets/contactus.jpg";
import { FormEventHandler, useState } from "react";

type contactForminfo = {
  name: string;
  email: string;
  message: string;
};

function ContactUs() {
  const [form, setForm] = useState<contactForminfo>({
    name: "",
    email: "",
    message: "",
  });

  function formHandler(e: React.ChangeEvent<HTMLFormElement>) {
    setForm((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  }

  return (
    <main className="container-md">
      <section className="row g-2 justify-content-center align-items-center shadow-sm rounded-2">
        <div className="d-none d-md-block col-md-5 ">
          <img
            className="h-100 w-100 object-fit-contain"
            src={contactImage}
            alt="contactUs"
          ></img>
        </div>
        <div className="col-8 col-lg-5  py-3 ">
          <form onChange={formHandler} className="container h-100">
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="name"
                name="name"
                id="name"
                value={form.name}
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={form.email}
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows={4}
                value={form.message}
              ></textarea>
            </div>
            <button className="btn btn-info text-white d-block mx-auto w-25 ">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
export default ContactUs;
