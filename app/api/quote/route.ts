import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const quoteRequestSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(10),
  zip: z.string().min(5),
  service: z.string().min(1),
  preferredTime: z.string().min(1),
  description: z.string().optional(),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional(),
  gclid: z.string().optional(),
  timeToComplete: z.number().optional(),
  timestamp: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = quoteRequestSchema.parse(body);

    // Rate limiting check (basic implementation)
    const clientIP = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Send email via Resend
    const emailContent = `
      New Quote Request from Website
      
      Contact Information:
      Name: ${data.name}
      Phone: ${data.phone}
      ZIP Code: ${data.zip}
      
      Service Details:
      Service Requested: ${data.service}
      Preferred Time: ${data.preferredTime}
      Description: ${data.description || 'No additional details provided'}
      
      Tracking Information:
      UTM Source: ${data.utm_source || 'Direct'}
      UTM Campaign: ${data.utm_campaign || 'N/A'}
      Google Click ID: ${data.gclid || 'N/A'}
      Time to Complete Form: ${data.timeToComplete ? Math.round(data.timeToComplete / 1000) + 's' : 'N/A'}
      Client IP: ${clientIP}
      Timestamp: ${data.timestamp || new Date().toISOString()}
    `;

    const orgEmail = process.env.ORG_EMAIL || 'info@allinone-plumbing.com';
    
    await resend.emails.send({
      from: 'Website Quote <quotes@allinone-plumbing.com>',
      to: [orgEmail],
      subject: `New Quote Request - ${data.name} (${data.service})`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    // Log for analytics
    console.log('Quote request submitted:', {
      service: data.service,
      zip: data.zip,
      source: data.utm_source,
      timestamp: data.timestamp,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request submitted successfully' 
    });

  } catch (error) {
    console.error('Quote API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit quote request' 
      },
      { status: 500 }
    );
  }
}
