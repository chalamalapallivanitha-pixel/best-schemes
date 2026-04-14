export interface Scheme {
  id: string;
  name: string;
  category: string;
  benefits: string;
  eligibility: string;
  officialLink: string;
  verified: boolean;
  minAge?: number;
  maxAge?: number;
  state: string;
}

export interface Loan {
  id: string;
  name: string;
  purpose: string;
  benefits: string;
  maxAmount: number;
  interestRate: number;
  tenure: number;
  officialLink: string;
  bankName: string;
  bankAddress: string;
  bankContact: string;
  targetAudience: 'Student' | 'Employee' | 'Business';
}

export interface UserProfile {
  uid: string;
  name: string;
  age: number;
  income: number;
  occupation: string;
  gender: string;
  education: string;
  state: string;
  role?: 'admin' | 'user';
}

export interface FraudAlert {
  id: string;
  title: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}
