import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import axios from "axios"
import { redirect } from "react-router-dom";
import { useAppContext } from "@/context/appContext";

interface LoginPageProps {
    onLogin: () => void;
    onSwitchToSignup: () => void;
    onBackToHome: () => void;
}


export function LoginPage({ }: LoginPageProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const { setUser, navigate } = useAppContext()
    const validateForm = () => {
        const newErrors: { email?: string; password?: string } = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const res = await axios.get('http://localhost:5000/user')
                const user = res.data.find((user: any) => user.email === email);
                if (user.password === password) {
                    localStorage.setItem('ticketapp_session', JSON.stringify(user))
                    setIsAuthenticated(true)
                    setUser(user)
                    navigate('/dashboard')
                    toast.success("Login successful! Welcome back.");
                } else {
                    toast.error("Invalid email or password")
                }

            } catch (error) {
                toast.error("Server error, please try again later.");
                console.error(error);
            }
        } else {
            toast.error("Please fix the errors in the form");
        }
    };

    return (
        <div className="min-h-screen absolute bg-linear-to-br from-sky-200 via-white to-sky-50 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200 rounded-full opacity-30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl" />

            <Card className="w-full max-w-md rounded-2xl shadow-2xl border-0 relative z-10">
                <CardHeader className="space-y-2 text-center pb-6">
                    <button
                        className="text-2xl mb-2 hover:opacity-70 transition-opacity"
                    >
                        Ticlify
                    </button>
                    <CardTitle>Welcome Back</CardTitle>
                    <p className="text-muted-foreground">Login to your account</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (errors.email) setErrors({ ...errors, email: undefined });
                                }}
                                className={`rounded-xl ${errors.email ? 'border-destructive' : ''}`}
                            />
                            {errors.email && (
                                <p className="text-sm text-destructive">{errors.email}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (errors.password) setErrors({ ...errors, password: undefined });
                                }}
                                className={`rounded-xl ${errors.password ? 'border-destructive' : ''}`}
                            />
                            {errors.password && (
                                <p className="text-sm text-destructive">{errors.password}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-skyblue hover:bg-sky-700 text-white rounded-xl py-6"
                        >
                            Login
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-muted-foreground">
                            Don't have an account?{" "}
                            <button
                                className="text-sky-600 hover:text-sky-700 hover:underline"
                            >
                                Create account
                            </button>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
