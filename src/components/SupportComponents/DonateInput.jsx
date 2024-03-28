import React, { useState } from "react";

export default function DonateInput({ formData, setFormData }) {
  const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Trigger validation
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.amount
    ) {
      console.log("Form Data Submitted:", formData);
      // Proceed with your form submission logic here
    } else {
      console.log("Please fill all fields");
    }
  };

  // Determine input field class names based on validation
  const inputClassName = (fieldValue) =>
    ` block w-full ${
      fieldValue
        ? "bg-gray-200 border-gray-500"
        : "bg-gray-200 border border-gray-200"
    } text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none ${
      submitted && !fieldValue ? "border-red-500" : ""
    }`;

  return (
    <div className="flex py-9 gap-16 w-full mb-10">
      <div className="flex flex-col gap-2 w-2/5">
        <div className="text-normal">
          {" "}
          Thank you for considering a donation to our cause! To express your
          interest in contributing, please fill out the form right here with
          your first name, last name, email address, and the amount you wish to
          donate.
        </div>

        <div className="text-gray-600">
          <div className="font-semibold">Please note:</div> The information you
          provide here does not process a donation directly. Instead, it's a way
          for us to know who is interested in supporting our work. Once we
          receive your details, we'll reach out to you via email with all the
          necessary information on how to complete your donation, including a
          secure link to make your contribution. This two-step process ensures
          that we can guide you through a smooth and secure donation experience.
          We appreciate your willingness to support us and look forward to
          providing you with all the details to assist you further. Thank you
          for your generosity and support!
        </div>
      </div>
      <form className="grow" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* First Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className={inputClassName(formData.firstName)}
              id="first-name"
              type="text"
              placeholder="Jane"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleChange}
            />
            {submitted && !formData.firstName && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
          {/* Last Name */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className={inputClassName(formData.lastName)}
              id="last-name"
              type="text"
              placeholder="Doe"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleChange}
            />
            {submitted && !formData.lastName && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Email */}
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={inputClassName(formData.email)}
              id="email"
              type="email"
              placeholder="jane.doe@example.com"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
            {submitted && !formData.email && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          {/* Amount to Donate */}
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="amount"
            >
              Amount to Donate
            </label>
            <input
              className={inputClassName(formData.amount)}
              id="amount"
              type="text"
              placeholder="50"
              name="amount"
              value={formData.amount || ""}
              onChange={handleChange}
            />
            {submitted && !formData.amount && (
              <p className="text-red-500 text-xs italic">
                Please enter an amount.
              </p>
            )}
          </div>
        </div>
        <div className="flex mt-4">
          <button
            className="shadow bg-primary-500 hover:bg-primary-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
