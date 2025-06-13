import { useNavigate } from "react-router-dom";

interface SuccessMessageProps {
  title: string;
  message: string;
  redirectUrl?: string;
  redirectText?: string;
}

const WtmuRegisterSuccess = ({
  title = "Registration Successful!",
  message = "Your account has been created successfully.",
  redirectUrl = "/login",
  redirectText = "Go to Login",
}: SuccessMessageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          {/* <CheckCircleIme="mx-auto h-16 w-16 text-green-500" /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mb-4">
            <p className="text-center text-gray-600">{message}</p>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate(redirectUrl)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-7700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
            >
              {redirectText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WtmuRegisterSuccess;
