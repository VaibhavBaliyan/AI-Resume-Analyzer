// Defines a Job interface for job posting details
interface Job {
  title: string; // Store job title
  description: string; // Store job description
  location: string; // Store job location
  requiredSkills: string[]; // Array of required skills
}

// Defines a Resume interface for user uploaded resumes
interface Resume {
  id: string; // Unique identifier for resume
  companyName?: string; // Optional company name (? makes it optional)
  jobTitle?: string; // Optional job title
  imagePath: string; // Path to resume preview image
  resumePath: string; // Path to actual resume file
  feedback: Feedback; // Feedback object containing analysis results
}

// Defines a Feedback interface for AI analysis results
interface Feedback {
  overallScore: number; // Overall resume score

  // ATS (Applicant Tracking System) compatibility analysis
  ATS: {
    score: number; // ATS compatibility score
    tips: {
      type: "good" | "improve"; // Tip type - either positive or needs improvement
      tip: string; // The actual tip content
    }[];
  };

  // Tone and writing style analysis
  toneAndStyle: {
    score: number; // Tone and style score
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string; // Detailed explanation of the tip
    }[];
  };

  // Content quality analysis
  content: {
    score: number; // Content quality score
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };

  // Document structure analysis
  structure: {
    score: number; // Structure score
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };

  // Skills assessment
  skills: {
    score: number; // Skills relevancy score
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };
}
