import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserType } from "../Constant/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // admin - restaurant - user
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select your role!");
      return;
    }

    // هنا ممكن لاحقاً تتحقق من البيانات من API
    // دلوقتي بنحاكي تسجيل الدخول فقط

    setUserType(role); // نخزن نوع المستخدم

    // نوجّهه حسب نوعه
    if (role === "admin") navigate("/admin/dashboard");
    else if (role === "restaurant") navigate("/restaurant/dashboard");
    else navigate("/");
  };

  return (
    <div id="Login" className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="p-6 rounded-lg shadow-lg bg-white w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

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
          className="bg-orange-500 text-white p-2 w-full rounded hover:bg-orange-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
