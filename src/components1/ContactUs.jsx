import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields");
      return;
    }

    console.log(formData);

    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">Contact Us</h1>

      <div className="row g-4">

        {/* LEFT SIDE */}
        <div className="col-md-5">

          <div className="card shadow-sm mb-3 p-3">
            <h5>📍 Address</h5>
            <p className="mb-0">Hyderabad, India</p>
          </div>

          <div className="card shadow-sm mb-3 p-3">
            <h5>📞 Phone</h5>
            <p className="mb-0">+91 9392899918</p>
          </div>

          <div className="card shadow-sm p-3">
            <h5>📧 Email</h5>
            <p className="mb-0">jeevanpalleti@gmail.com</p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="col-md-7">

          <div className="card shadow p-4">

            <h4 className="mb-4">Send Message</h4>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>

              {status && (
                <div className="alert alert-info mt-3 text-center">
                  {status}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ContactUs;