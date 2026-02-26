import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, Trophy } from 'lucide-react';
import ShareButtons from './ShareButtons';
import { Progress } from '@/components/ui/progress';

const questions = [
  {
    question: 'When do you feel most focused?',
    options: ['Early morning', 'Late at night', 'After lunch', 'Whenever I have to'],
    scores: [3, 1, 2, 0],
  },
  {
    question: 'How do you prefer to take notes?',
    options: ['Color-coded and organized', 'Voice memos or recordings', 'Mind maps and diagrams', 'I barely take notes'],
    scores: [3, 2, 3, 0],
  },
  {
    question: 'What helps you remember things best?',
    options: ['Reading and re-reading', 'Explaining it to someone', 'Watching videos', 'Practice tests'],
    scores: [1, 3, 2, 3],
  },
  {
    question: 'How do you handle a big project?',
    options: ['Break it into small tasks', 'Do it all at once', 'Work with a group', 'Wait until the last minute'],
    scores: [3, 2, 2, 0],
  },
  {
    question: 'What\'s your study environment like?',
    options: ['Quiet room, no distractions', 'Coffee shop with background noise', 'Anywhere with music', 'I can\'t focus anywhere'],
    scores: [3, 2, 2, 0],
  },
  {
    question: 'How do you feel about deadlines?',
    options: ['I finish early', 'I finish right on time', 'I need extensions sometimes', 'Deadlines stress me out'],
    scores: [3, 2, 1, 0],
  },
];

const results = [
  { min: 14, title: '🏆 The Study Master', desc: 'You have excellent study habits! You\'re organized, focused, and know exactly how you learn best. Keep it up — you\'re built for success!' },
  { min: 9, title: '📚 The Steady Learner', desc: 'You have solid study habits with room to grow. Try experimenting with new techniques like spaced repetition or the Pomodoro method to level up!' },
  { min: 4, title: '🌱 The Growing Student', desc: 'You\'re still finding your study style — and that\'s totally okay! Start small: try one new study hack this week and build from there.' },
  { min: 0, title: '🎮 The Free Spirit', desc: 'Traditional studying isn\'t your thing, but that doesn\'t mean you can\'t succeed! Try gamified learning apps like Kahoot or Quizlet to make it fun.' },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = results.find((r) => totalScore >= r.min) || results[results.length - 1];
  const progress = ((current) / questions.length) * 100;

  const handleSelect = (optionIndex: number) => {
    setSelected(optionIndex);
  };

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, questions[current].scores[selected]];
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden max-w-lg mx-auto">
        <div className="p-6 text-white text-center" style={{ background: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.72 0.18 165))' }}>
          <Trophy size={48} className="mx-auto mb-3 text-yellow-300" />
          <h3 className="text-2xl font-extrabold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Quiz Complete!
          </h3>
          <p className="text-white/80 text-sm mt-1">Score: {totalScore}/{questions.length * 3}</p>
        </div>
        <div className="p-6 text-center">
          <div className="text-4xl mb-2">{result.title.split(' ')[0]}</div>
          <h4 className="text-xl font-extrabold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {result.title.split(' ').slice(1).join(' ')}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{result.desc}</p>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.68 0.22 40))' }}
            >
              <RotateCcw size={16} />
              Take Quiz Again
            </button>
            <ShareButtons title={`I got "${result.title}" on the EchoFactyt Study Style Quiz!`} />
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden max-w-lg mx-auto">
      <div className="p-5 text-white" style={{ background: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.72 0.18 165))' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">
            Question {current + 1} of {questions.length}
          </span>
          <span className="text-xs font-bold text-white/70">Which Study Style Are You?</span>
        </div>
        <Progress value={progress} className="h-2 bg-white/20 mb-4" />
        <h3 className="text-lg font-extrabold leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {q.question}
        </h3>
      </div>

      <div className="p-5">
        <div className="space-y-3 mb-5">
          {q.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-150 ${
                selected === i
                  ? 'border-transparent text-white shadow-md'
                  : 'border-border hover:border-primary/40 bg-background'
              }`}
              style={
                selected === i
                  ? { background: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.68 0.22 40))' }
                  : {}
              }
            >
              <span className="font-black mr-2">{String.fromCharCode(65 + i)}.</span>
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={selected === null}
          className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: 'linear-gradient(135deg, oklch(0.62 0.22 30), oklch(0.68 0.22 40))' }}
        >
          {current + 1 === questions.length ? 'See My Result 🎉' : 'Next Question →'}
        </button>
      </div>
    </div>
  );
}
