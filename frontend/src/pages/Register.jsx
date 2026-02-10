const Register = () => {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="p-6 border w-80">
          <h2 className="text-xl mb-4">Register</h2>
          <input className="border p-2 w-full mb-3" placeholder="Email" />
          <input className="border p-2 w-full mb-3" placeholder="Password" />
          <button className="bg-black text-white p-2 w-full">
            Register
          </button>
        </div>
      </div>
    );
  };
  
  export default Register;
  