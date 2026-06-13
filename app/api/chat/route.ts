import { NextRequest, NextResponse } from 'next/server';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const NIHARIKA_KNOWLEDGE_BASE = `
You are an AI Assistant for Niharika Foundation, an educational charitable trust in Odisha, India.

FOUNDATION OVERVIEW:
- Name: Niharika Foundation
- Founded: May 24, 2026
- Location: Baleshwar, Odisha
- Type: Educational Charitable Trust
- Mission: Provide quality education, support research, and empower individuals and communities
- Vision: Equal access to education and opportunities for all

KEY STATISTICS:
- 700+ scholars supported
- 50+ villages reached
- 12+ districts served
- 45+ volunteers
- 100% transparency
- ₹50L+ in scholarships distributed

PROGRAMS:
1. Scholarship Support: Direct financial support to merit students
2. Mentorship: Expert guidance and career coaching
3. Skill Development: Technical and soft skills training
4. Community Care: Healthcare and welfare support

VOLUNTEER PROGRAMS:
- Educational mentorship
- Content creation
- Community outreach
- Event management
- Technical support
- Flexible hours and commitment levels

INTERNSHIP OPPORTUNITIES:
- Content marketing internships
- Tech and development roles
- Research internships
- Community engagement internships
- 3-12 month duration
- Stipend-based programs

MEMBERSHIP PROGRAMS:
- Life Membership (One-time donation)
- Annual Membership (Recurring support)
- Student Membership (Special rates)
- Exclusive benefits and recognition

DONATION OPPORTUNITIES:
- Direct donations for scholarships
- Program-specific contributions
- Scholarship fund
- Infrastructure development
- Technology platform development
- Monthly giving program

CSR PARTNERSHIPS:
- Corporate social responsibility collaboration
- Customized programs for companies
- Employee volunteering
- Cause marketing opportunities

TECHNOLOGY INITIATIVES (Coming Soon):
- AI-powered learning platform
- Global scholarship marketplace
- Smart progress dashboard
- Mentor matching AI
- Mobile learning app
- Blockchain certificate verification

FOUNDER STORY:
Dedicated to transforming lives through education and creating lasting impact in Odisha.

WEBSITE NAVIGATION:
- Home: Latest updates and impact
- About: Mission, vision, and organization
- Impact: Statistics and success stories
- Get Involved: Volunteer, intern, donate, partner
- Programs: Detailed program information
- Impact Page: Detailed metrics and visualizations

IMPORTANT GUIDELINES:
1. Always prioritize verified website information
2. Be helpful and professional
3. Direct to WhatsApp for complex queries or human assistance
4. Maintain NGO standards and professionalism
5. If unsure, direct to contact page or WhatsApp
6. Encourage volunteering, memberships, and donations

RESPONSE STYLE:
- Friendly and professional
- Clear and concise
- Action-oriented when appropriate
- Empathetic to education causes
`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json() as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'No messages provided' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('[v0] GEMINI_API_KEY not configured');
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 500 }
      );
    }

    // Build conversation history for Gemini
    const conversationHistory = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // Make request to Gemini API
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        system: NIHARIKA_KNOWLEDGE_BASE,
        contents: conversationHistory,
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 500,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('[v0] Gemini API error:', error);
      return NextResponse.json(
        { error: 'Failed to generate response' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const assistantMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      'I apologize, but I could not generate a response. Please try again.';

    return NextResponse.json({
      content: assistantMessage,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[v0] Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
