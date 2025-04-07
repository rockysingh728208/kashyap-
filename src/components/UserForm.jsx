import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import { toast } from "react-toastify";

const UserForm = () => {
  const { setUser } = useContext(QuizContext);
  const [form, setForm] = useState({ name: "", email: "", admissionNo: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    return (
      form.name.trim() !== "" &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.admissionNo.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill all fields correctly");
      return;
    }
    setUser({ ...form, score: null });
    toast.success("Form submitted!");
    navigate("/quiz");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 space-y-4 shadow-xl rounded-xl bg-white">
      <input
        className="w-full border p-2 rounded"
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <input
        className="w-full border p-2 rounded"
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <input
        className="w-full border p-2 rounded"
        type="text"
        name="admissionNo"
        placeholder="Enter Admission No"
        onChange={handleChange}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Start Quiz
      </button>
    </form>
  );
};

export default UserForm;
