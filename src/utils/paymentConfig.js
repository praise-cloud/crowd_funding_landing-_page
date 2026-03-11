// Payment configuration constants
export const paymentConfig = {
  paypalClientId: "AX4gOlYkd_7121cPUTgPgK3hyHJoYQZP7KanKQBz50XQSojyAKFSwWVHxfgqi5mIpsRTCTWZU6s2w4vE",
  paypalUrl: "https://www.paypal.com/donate",
  greyUsdUrl: "https://grey.co",
  sponsorshipEmail: "care@littleheartsfund.org",
  campaignDeadline: "2026-03-29T23:59:59",
  greyAccountDetails: {
    accountName: "Hope for Little Hearts Fund",
    accountNumber: "000000000000",
    wireRouting: "000000000",
    achRouting: "000000000",
    accountType: "Checking",
    bankName: "Example Bank",
    address: "123 Care Avenue, City, State 00000"
  },
  paypalAmounts: [
    { value: 50, label: "$50" },
    { value: 150, label: "$150" },
    { value: 300, label: "$300" },
    { value: 500, label: "$500" }
  ],
  fileUpload: {
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ['image/png', 'image/jpeg', 'application/pdf'],
    allowedExtensions: ['.png', '.jpg', '.jpeg', '.pdf']
  }
};

// Validation utilities
export const validateFile = (file) => {
  if (!file) {
    return { valid: false, error: 'Please select a file' };
  }

  if (!paymentConfig.fileUpload.allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Only PNG, JPG, and PDF files are allowed' };
  }

  if (file.size > paymentConfig.fileUpload.maxSize) {
    return { valid: false, error: 'File size must be less than 5MB' };
  }

  return { valid: true };
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return { success: true };
  } catch (error) {
    console.error('Failed to copy text: ', error);
    return { success: false, error: 'Failed to copy to clipboard' };
  }
};

export const generatePayPalUrl = (amount) => {
  const baseUrl = paymentConfig.paypalUrl;
  const params = new URLSearchParams({
    hosted_button_id: 'YOUR_BUTTON_ID',
    amount: amount.toString(),
    currency_code: 'USD'
  });
  return `${baseUrl}?${params.toString()}`;
};

export const getCampaignDeadline = () => new Date(paymentConfig.campaignDeadline);

export const getDaysRemaining = () => {
  const now = new Date();
  const diffMs = getCampaignDeadline().getTime() - now.getTime();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
};

export const isCampaignClosed = () => new Date().getTime() > getCampaignDeadline().getTime();
