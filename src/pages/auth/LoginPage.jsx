import React, { useState } from "react";
import { Phone, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState("phone"); // "phone" or "otp"
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (!phone || phone.length < 10) {
            setError("Please enter a valid phone number");
            return;
        }
        setError("");
        setLoading(true);
        // Simulate API call to send OTP
        setTimeout(() => {
            setLoading(false);
            setOtpSent(true);
            setStep("otp");
        }, 2000);
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        if (!otp || otp.length !== 6) {
            setError("Please enter a valid 6-digit OTP");
            return;
        }
        setError("");
        setLoading(true);
        // Simulate API call to verify OTP
        setTimeout(() => {
            setLoading(false);
            // On success, redirect or set user state
            console.log("OTP verified for phone:", phone);
            // For now, just show success
            alert("Login successful!");
        }, 2000);
    };

    const handleBack = () => {
        setStep("phone");
        setOtp("");
        setError("");
        setOtpSent(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <div className="mx-auto h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {step === "phone" ? "Welcome Back" : "Enter OTP"}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        {step === "phone"
                            ? "Enter your phone number to receive OTP"
                            : `We sent an OTP to ${phone}`}
                    </p>
                </div>
                <div className="bg-white py-8 px-6 shadow-xl rounded-lg border border-gray-200">
                    {error && (
                        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                            {error}
                        </div>
                    )}
                    {step === "phone" ? (
                        <form className="space-y-6" onSubmit={handleSendOtp}>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        required
                                        className="appearance-none relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Sending OTP..." : "Send OTP"}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form className="space-y-6" onSubmit={handleVerifyOtp}>
                            <div>
                                <label
                                    htmlFor="otp"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    OTP
                                </label>
                                <div className="relative">
                                    <input
                                        id="otp"
                                        name="otp"
                                        type="text"
                                        maxLength="6"
                                        required
                                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out text-center text-lg tracking-widest"
                                        placeholder="000000"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="flex-1 flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                >
                                    <ArrowLeft className="h-5 w-5 mr-2" />
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1 group relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Verifying..." : "Verify OTP"}
                                </button>
                            </div>
                        </form>
                    )}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="font-medium text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out"
                            >
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
