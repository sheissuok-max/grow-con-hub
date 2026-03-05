
-- Create education_waitlist table
CREATE TABLE public.education_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  course TEXT NOT NULL,
  agreed_to_privacy BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.education_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert education waitlist" ON public.education_waitlist
  FOR INSERT WITH CHECK (true);

-- Create consulting_leads table
CREATE TABLE public.consulting_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  business TEXT,
  inquiry TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.consulting_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert consulting leads" ON public.consulting_leads
  FOR INSERT WITH CHECK (true);

-- Create data_analysis_leads table
CREATE TABLE public.data_analysis_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  business TEXT,
  inquiry TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.data_analysis_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert data analysis leads" ON public.data_analysis_leads
  FOR INSERT WITH CHECK (true);
