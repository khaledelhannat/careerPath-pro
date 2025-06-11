import { ArrowRight, Target, TrendingUp, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'CareerPath Pro | Home';
    }, []);

    const handleStartJourney = () => {
        navigate('/learning-path');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-10 p-6 flex justify-between items-center backdrop-blur-sm bg-white/5 border-b border-white/10">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold">CareerPath Pro</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="hover:text-blue-300 transition-colors">Dashboard</a>
                    <a href="#" className="hover:text-blue-300 transition-colors">Progress</a>
                    <a href="#" className="hover:text-blue-300 transition-colors">Resources</a>
                    <a href="#" className="hover:text-blue-300 transition-colors">Analytics</a>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <div className="mt-8 mb-8 inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                        <Award className="w-4 h-4 mr-2 text-blue-300" />
                        <span className="text-sm font-medium text-blue-200">Professional Development Journey</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                        Hi Kal! 👋
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                        Welcome Back
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Continue advancing your career as a Sales Engineer.
                        Let's build your expertise step by step.
                    </p>

                    {/* Career Steps */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6">Your Career Path</h3>

                        <div className="space-y-4">
                            {/* Current Step */}
                            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-400/50 rounded-xl p-6 text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                                            <span className="text-blue-200 text-sm font-medium">CURRENT STEP</span>
                                        </div>
                                        <h4 className="text-xl font-semibold text-white mb-2">Understand the Market</h4>
                                        <p className="text-gray-300">Master printing production fundamentals and industry knowledge</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleStartJourney}
                                    className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                                >
                                    <span>Start This Step</span>
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Upcoming Steps */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left opacity-60">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-xs">2</div>
                                    <span className="text-gray-400 text-sm">COMING NEXT</span>
                                </div>
                                <h4 className="text-lg font-medium text-gray-300">Build Technical Expertise</h4>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left opacity-40">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-xs">3</div>
                                    <span className="text-gray-400 text-sm">FUTURE</span>
                                </div>
                                <h4 className="text-lg font-medium text-gray-300">Master Sales Techniques</h4>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-3 mx-auto">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">Step 1/3</h3>
                            <p className="text-gray-300 text-sm">Current Progress</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-3 mx-auto">
                                <Target className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">25+ Skills</h3>
                            <p className="text-gray-300 text-sm">To Master</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-3 mx-auto">
                                <Users className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">Expert Level</h3>
                            <p className="text-gray-300 text-sm">Your Goal</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Floating elements */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-700"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>

            {/* Footer */}
            <footer className="relative z-10 text-center py-8 mt-16 border-t border-white/10">
                <p className="text-sm text-gray-400">
                    © 2025 All copyrights reserved. Made with ❤ by Khaled Elhannat.
                </p>
            </footer>
        </div>
    );
}