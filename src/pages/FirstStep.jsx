import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, CheckCircle2, Circle, ArrowLeft, Trophy, BookOpen, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const checklistData = [
    {
        module: "Printing Processes",
        icon: <Zap className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-500",
        items: [
            {
                label: "Understand offset printing",
                details: "Learn about plates, inking units, dampening, and paper feed mechanisms."
            },
            {
                label: "Understand digital printing",
                details: "Differentiate between toner and inkjet methods. Study variable data printing."
            },
            {
                label: "Understand flexography",
                details: "Learn how flexible relief plates are used, especially in packaging."
            },
            {
                label: "Understand gravure printing",
                details: "Understand engraved cylinders and their role in high-volume printing."
            },
            {
                label: "Understand screen printing",
                details: "Explore mesh screens, ink types, and common applications."
            },
            {
                label: "Tour printing machines at 2M",
                details: "Physically explore how each printing machine works at your facility."
            }
        ]
    },
    {
        module: "Materials and Substrates",
        icon: <BookOpen className="w-6 h-6" />,
        color: "from-purple-500 to-pink-500",
        items: [
            {
                label: "Learn about paper types (coated, uncoated, glossy, matte)",
                details: "Compare texture, weight, and absorption properties."
            },
            {
                label: "Study plastic, vinyl, textiles, cardboard",
                details: "Understand where each substrate is used and how they behave with different inks."
            },
            {
                label: "Understand ink-substrate interaction",
                details: "Learn how different inks behave based on substrate type and surface."
            },
            {
                label: "Handle and compare substrate samples",
                details: "Feel and inspect substrates firsthand; note their print quality differences."
            }
        ]
    },
    {
        module: "Color Management",
        icon: <Target className="w-6 h-6" />,
        color: "from-green-500 to-teal-500",
        items: [
            {
                label: "Understand RGB, CMYK, and Pantone",
                details: "Learn color spaces, mixing behavior, and color matching principles."
            },
            {
                label: "Learn about ICC profiles",
                details: "Understand color consistency through profile calibration and print output."
            },
            {
                label: "Observe a digital proofing session",
                details: "Watch how color proofs are made and verified before final print."
            },
            {
                label: "Practice color adjustments in design software",
                details: "Use design tools to adjust and preview color output."
            }
        ]
    },
    {
        module: "Prepress & Postpress",
        icon: <BookOpen className="w-6 h-6" />,
        color: "from-orange-500 to-red-500",
        items: [
            {
                label: "Understand file formats and design prep",
                details: "Study PDF/X standards, bleed, trim, and layout best practices."
            },
            {
                label: "Learn about RIP and imposition",
                details: "Understand how designs are rasterized and imposed for print."
            },
            {
                label: "Shadow prepress operations",
                details: "Observe how jobs are prepared and checked before printing."
            },
            {
                label: "Watch postpress activities (cutting, binding, lamination)",
                details: "Learn finishing techniques and their impact on final quality."
            }
        ]
    },
    {
        module: "Quality Control",
        icon: <CheckCircle2 className="w-6 h-6" />,
        color: "from-indigo-500 to-purple-500",
        items: [
            {
                label: "Learn common print defects",
                details: "Study causes of ghosting, misalignment, banding, and color shifts."
            },
            {
                label: "Use inspection tools",
                details: "Try tools like loupes and densitometers to measure print quality."
            },
            {
                label: "Review QA reports",
                details: "Analyze real reports and understand what metrics matter."
            },
            {
                label: "Compare rejected vs accepted prints",
                details: "Physically inspect samples to spot quality differences."
            }
        ]
    },
    {
        module: "Wrap-up & Application",
        icon: <Trophy className="w-6 h-6" />,
        color: "from-yellow-500 to-orange-500",
        items: [
            {
                label: "Create a customer-facing presentation",
                details: "Summarize your learning and explain printing choices to a non-technical client."
            },
            {
                label: "Draft a sample client Q&A",
                details: "Simulate common questions and provide technically sound answers."
            },
            {
                label: "Explain a mock job to manager",
                details: "Present a full print solution, including process and materials justification."
            }
        ]
    }
];

export default function PrintingChecklist() {
    // MODIFICATION 1: Load initial state from localStorage
    const [checked, setChecked] = useState(() => {
        const saved = localStorage.getItem('checklist-checked-items');
        return saved ? JSON.parse(saved) : {};
    });

    const [expanded, setExpanded] = useState({});
    const navigate = useNavigate();

    // MODIFICATION 2: Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('checklist-checked-items', JSON.stringify(checked));
    }, [checked]);

    // Set the document title
    useEffect(() => {
        document.title = 'CareerPath Pro | Learning Path';
    }, []);

    const toggleCheck = (module, index) => {
        const key = `${module}-${index}`;
        setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const toggleExpand = (module, index) => {
        const key = `${module}-${index}`;
        setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // Calculate progress
    const totalItems = checklistData.reduce((acc, section) => acc + section.items.length, 0);
    const completedItems = Object.values(checked).filter(Boolean).length;
    const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handleGoBack}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Printing Production Mastery</h1>
                                <p className="text-gray-600">Professional Learning Path</p>
                            </div>
                        </div>

                        {/* Progress indicator */}
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900">{completedItems}/{totalItems}</div>
                                <div className="text-sm text-gray-600">Tasks Complete</div>
                            </div>
                            <div className="relative w-16 h-16">
                                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200" />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray={`${2 * Math.PI * 40}`}
                                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - progressPercentage / 100)}`}
                                        className="text-blue-600 transition-all duration-500"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-sm font-bold text-gray-900">{progressPercentage}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid gap-8">
                    {checklistData.map((section, sectionIndex) => {
                        const sectionCompleted = section.items.filter((_, index) =>
                            checked[`${section.module}-${index}`]
                        ).length;
                        const sectionProgress = section.items.length > 0 ? Math.round((sectionCompleted / section.items.length) * 100) : 0;

                        return (
                            <div key={section.module} className="bg-white/70 backdrop-blur-sm border border-white/50 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                                {/* Section header */}
                                <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                                {section.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold">{section.module}</h2>
                                                <p className="text-white/80">{sectionCompleted} of {section.items.length} completed</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-bold">{sectionProgress}%</div>
                                            <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-white transition-all duration-500"
                                                    style={{ width: `${sectionProgress}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section items */}
                                <div className="p-6">
                                    <div className="space-y-4">
                                        {section.items.map((item, index) => {
                                            const key = `${section.module}-${index}`;
                                            const isExpanded = expanded[key];
                                            const isChecked = checked[key];

                                            return (
                                                <div key={key} className={`border rounded-xl transition-all duration-300 ${isChecked
                                                    ? 'bg-green-50 border-green-200 shadow-sm'
                                                    : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-md'
                                                    }`}>
                                                    <div className="p-4">
                                                        <div className="flex items-start space-x-4">
                                                            <button
                                                                onClick={() => toggleCheck(section.module, index)}
                                                                className={`mt-1 transition-colors ${isChecked ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'
                                                                    }`}
                                                            >
                                                                {isChecked ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                                                            </button>

                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center justify-between">
                                                                    <h3 className={`font-semibold text-lg ${isChecked ? 'text-green-800 line-through' : 'text-gray-900'
                                                                        }`}>
                                                                        {item.label}
                                                                    </h3>
                                                                    <button
                                                                        onClick={() => toggleExpand(section.module, index)}
                                                                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                                                                    >
                                                                        {isExpanded ?
                                                                            <ChevronDown className="w-5 h-5 text-gray-600" /> :
                                                                            <ChevronRight className="w-5 h-5 text-gray-600" />
                                                                        }
                                                                    </button>
                                                                </div>

                                                                {isExpanded && (
                                                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                                                        <p className="text-gray-700 leading-relaxed">{item.details}</p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Completion celebration */}
                {progressPercentage === 100 && (
                    <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-3xl p-8 text-center">
                        <Trophy className="w-16 h-16 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-2">Congratulations! 🎉</h2>
                        <p className="text-xl">You've completed your Sales Engineer printing production learning journey!</p>
                    </div>
                )}
            </div>
        </div>
    );
}