interface IPhoneStep {
  phoneNumber: string;
  errors: {
    phoneNumber?: string;
  };
  isSubmitting: boolean;
  handleInputChange: (field: 'phoneNumber' | 'code', value: string) => void;
  sendPhoneNumber: () => void;
}
