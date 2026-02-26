import React, { useState } from 'react';
import { Plus, Trash2, Calculator } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Course {
  id: number;
  name: string;
  grade: string;
  credits: string;
}

const gradePoints: Record<string, number> = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'F': 0.0,
};

let nextId = 4;

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Math', grade: 'A', credits: '3' },
    { id: 2, name: 'English', grade: 'B+', credits: '3' },
    { id: 3, name: 'Science', grade: 'A-', credits: '4' },
  ]);

  const addCourse = () => {
    setCourses([...courses, { id: nextId++, name: '', grade: 'B', credits: '3' }]);
  };

  const removeCourse = (id: number) => {
    if (courses.length > 1) setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id: number, field: keyof Course, value: string) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    for (const course of courses) {
      const pts = gradePoints[course.grade] ?? 0;
      const creds = parseFloat(course.credits) || 0;
      totalPoints += pts * creds;
      totalCredits += creds;
    }
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  const gpa = parseFloat(calculateGPA());
  const gpaColor =
    gpa >= 3.5 ? 'oklch(0.55 0.2 145)' :
    gpa >= 3.0 ? 'oklch(0.62 0.2 165)' :
    gpa >= 2.0 ? 'oklch(0.68 0.22 40)' :
    'oklch(0.62 0.22 30)';

  const gpaLabel =
    gpa >= 3.7 ? 'Summa Cum Laude 🏆' :
    gpa >= 3.5 ? 'Magna Cum Laude ⭐' :
    gpa >= 3.0 ? 'Good Standing 👍' :
    gpa >= 2.0 ? 'Satisfactory 📚' :
    'Needs Improvement 💪';

  return (
    <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
      <div className="p-5 text-white" style={{ background: 'linear-gradient(135deg, oklch(0.55 0.2 220), oklch(0.45 0.18 240))' }}>
        <div className="flex items-center gap-2 mb-1">
          <Calculator size={20} />
          <h3 className="text-lg font-extrabold" style={{ fontFamily: 'Poppins, sans-serif' }}>GPA Calculator</h3>
        </div>
        <p className="text-sm text-white/80">Calculate your Grade Point Average instantly</p>
      </div>

      <div className="p-5">
        {/* GPA Display */}
        <div className="text-center mb-5 p-4 rounded-xl" style={{ background: 'oklch(0.96 0.01 260)' }}>
          <div className="text-5xl font-black mb-1" style={{ color: gpaColor, fontFamily: 'Poppins, sans-serif' }}>
            {calculateGPA()}
          </div>
          <div className="text-sm font-bold" style={{ color: gpaColor }}>{gpaLabel}</div>
        </div>

        {/* Course list */}
        <div className="space-y-3 mb-4">
          {courses.map((course) => (
            <div key={course.id} className="flex gap-2 items-end">
              <div className="flex-1 min-w-0">
                <Label className="text-xs font-bold mb-1 block">Course</Label>
                <Input
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                  placeholder="Course name"
                  className="text-sm h-9"
                />
              </div>
              <div className="w-20">
                <Label className="text-xs font-bold mb-1 block">Grade</Label>
                <Select value={course.grade} onValueChange={(v) => updateCourse(course.id, 'grade', v)}>
                  <SelectTrigger className="h-9 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(gradePoints).map((g) => (
                      <SelectItem key={g} value={g}>{g}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-16">
                <Label className="text-xs font-bold mb-1 block">Credits</Label>
                <Input
                  type="number"
                  min="1"
                  max="6"
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                  className="text-sm h-9"
                />
              </div>
              <button
                onClick={() => removeCourse(course.id)}
                className="h-9 w-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addCourse}
          className="flex items-center gap-2 text-sm font-bold w-full justify-center py-2.5 rounded-xl border-2 border-dashed border-border hover:border-primary/40 transition-colors"
          style={{ color: 'oklch(0.52 0.02 260)' }}
        >
          <Plus size={15} />
          Add Course
        </button>
      </div>
    </div>
  );
}
