import emailjs from 'emailjs-com';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (formData: FormData) => {
  try {
    const result = await emailjs.send(
      'service_tkptcod',    // Your service ID
      'template_xxgbpb9',    // Your template ID
      { ...formData },       // Convert FormData to a compatible object
      'nW1yanNoWAXrg3uHv'    // Your EmailJS User ID (API Key)
    );
    return { success: true, result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
