export function FormatPhoneNumber(phoneNumber) {
    // Remove todos os caracteres que não são números
    return phoneNumber.replace(/\D/g, '');
  }
  