"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "When was the last time your ducts were professionally cleaned?",
    options: [
      { text: "Within the last 2 years", score: 0 },
      { text: "3–5 years ago", score: 2 },
      { text: "More than 5 years ago", score: 4 },
      { text: "Never / I don't know", score: 5 },
    ],
  },
  {
    id: 2,
    question: "Do you notice visible dust blowing from vents when your furnace starts?",
    options: [
      { text: "No, never", score: 0 },
      { text: "Occasionally", score: 2 },
      { text: "Yes, every time", score: 4 },
    ],
  },
  {
    id: 3,
    question: "How quickly does dust accumulate on your furniture after cleaning?",
    options: [
      { text: "A week or more", score: 0 },
      { text: "3–5 days", score: 2 },
      { text: "1–2 days", score: 4 },
    ],
  },
  {
    id: 4,
    question: "Do you have pets in your home?",
    options: [
      { text: "No pets", score: 0 },
      { text: "1 pet", score: 1 },
      { text: "2 or more pets", score: 3 },
    ],
  },
  {
    id: 5,
    question: "Does anyone in your household suffer from allergies, asthma, or respiratory issues?",
    options: [
      { text: "No", score: 0 },
      { text: "Mild seasonal allergies", score: 1 },
      { text: "Yes, significant allergies or asthma", score: 3 },
    ],
  },
  {
    id: 6,
    question: "Have you done any home renovations in the last 3 years?",
    options: [
      { text: "No renovations", score: 0 },
      { text: "Minor work (painting, small repairs)", score: 1 },
      { text: "Major renovation (drywall, flooring, additions)", score: 4 },
    ],
  },
  {
    id: 7,
    question: "Do you notice musty or stale odours when your furnace runs?",
    options: [
      { text: "No, air smells fine", score: 0 },
      { text: "Occasionally, a faint smell", score: 2 },
      { text: "Yes, noticeable musty or dusty smell", score: 4 },
    ],
  },
  {
    id: 8,
    question: "Are some rooms in your home noticeably harder to heat or cool?",
    options: [
      { text: "No, heating is even throughout", score: 0 },
      { text: "One or two rooms are slightly off", score: 1 },
      { text: "Yes, significant temperature differences between rooms", score: 3 },
    ],
  },
];

type Result = {
  level: string;
  color: string;
  bgColor: string;
  borderColor: string;
  message: string;
  recommendation: string;
};

function getResult(score: number): Result {
  if (score <= 5) {
    return {
      level: "Low Priority",
      color: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      message: "Your ducts appear to be in decent shape!",
      recommendation:
        "While professional duct cleaning isn't urgent, consider scheduling it within the next 12–18 months as preventative care. Regular cleaning every 3–5 years keeps your system running efficiently and your air clean.",
    };
  }
  if (score <= 12) {
    return {
      level: "Moderate Priority",
      color: "text-yellow-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
      message: "Your home is showing signs that duct cleaning would help.",
      recommendation:
        "We recommend scheduling a professional duct cleaning in the next 3–6 months. You'll likely notice improved air quality, less dust, and better heating performance. This is especially important before Alberta's long winter heating season.",
    };
  }
  if (score <= 20) {
    return {
      level: "High Priority",
      color: "text-orange-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-400",
      message: "Your home has multiple indicators that your ducts need professional attention.",
      recommendation:
        "We strongly recommend booking duct cleaning as soon as possible. Dirty ducts are likely affecting your air quality, energy bills, and HVAC system lifespan. Call Home Pros Group at +1 (825) 435-9977 for a free quote — flat-rate pricing, no hidden fees.",
    };
  }
  return {
    level: "Urgent — Book Now",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    message: "Your home is showing serious signs of contaminated ductwork.",
    recommendation:
      "Don't wait — your air quality and HVAC system are at risk. Dirty ducts at this level can cause health issues, significantly higher energy bills, and premature furnace failure. Call Home Pros Group today at +1 (825) 435-9977 for immediate service in Stony Plain, Spruce Grove, and Parkland County.",
  };
}

export function DuctCleaningQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalScore = answers.reduce((sum, a) => sum + a, 0);
  const result = getResult(totalScore);
  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100;

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="my-12 rounded-2xl border-2 border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5 text-white">
        <h3 className="text-xl md:text-2xl font-black m-0 flex items-center gap-3">
          <span className="text-2xl">🔍</span> Do Your Ducts Need Cleaning? Free Assessment
        </h3>
        <p className="text-slate-300 text-sm mt-1 mb-0">
          Answer {questions.length} quick questions to find out
        </p>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-slate-100">
        <div
          className="h-full bg-gradient-to-r from-[#e9261c] to-red-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        {!showResult ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-6">
              {questions[currentQuestion].question}
            </h4>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full text-left px-5 py-4 rounded-xl border-2 border-slate-200 hover:border-[#e9261c] hover:bg-red-50 transition-all duration-200 text-slate-700 font-medium hover:text-slate-900 cursor-pointer"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={`${result.bgColor} ${result.borderColor} border-2 rounded-xl p-6 mb-6`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-lg font-black ${result.color}`}>
                  Result: {result.level}
                </span>
                <span className="text-sm text-slate-500">(Score: {totalScore}/{questions.length * 5})</span>
              </div>
              <p className={`text-lg font-semibold ${result.color} mb-2`}>{result.message}</p>
              <p className="text-slate-700">{result.recommendation}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:18254359977"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#e9261c] text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-colors no-underline"
              >
                📞 Call (825) 435-9977 for Free Quote
              </a>
              <button
                onClick={reset}
                className="px-6 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
