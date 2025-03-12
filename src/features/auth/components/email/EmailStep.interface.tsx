export interface IEmailStep {
  email: string;
  isSubmitting: boolean;
  errors: {
    email?: string;
  };
  handleInputChange: (field: 'email' | 'code', value: string) => void;
  sendEmail: () => void;
}
