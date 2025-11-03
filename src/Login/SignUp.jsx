import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserType } from "../Constant/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // admin - restaurant - user
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select your role!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // مبدئيًا بنخزن نوع المستخدم
    setUserType(role);

    // بعد التسجيل نوجهه مباشرة للصفحة المناسبة
    if (role === "admin") navigate("/admin/dashboard");
    else if (role === "restaurant") navigate("/restaurant/dashboard");
    else navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSignup}
        className="p-6 rounded-lg shadow-lg bg-white w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-3"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="restaurant">Restaurant</option>
          <option value="user">User</option>
        </select>

        <button
          type="submit"
          className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-600"
        >
          Sign Up
        </button>

        <p className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
