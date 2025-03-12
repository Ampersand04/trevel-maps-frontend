/**
 * Валидация email.
 * email - Email для проверки.
 */
export const validateEmail = (email: string): string | undefined => {
    if (!email) {
        return "Поле email не может быть пустым";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Введите корректный email";
    }
    return undefined;
};

/**
 * Валидация кода для email (6 цифр).
 * code - Код для проверки.
 */
export const validateEmailCode = (code: string): string | undefined => {
    if (!code) {
        return "Поле код не может быть пустым";
    }
    if (code.length !== 6) {
        return "Введите корректный код из 6 цифр";
    }
    if (!/^\d+$/.test(code)) {
        return "Код должен содержать только цифры";
    }
    return undefined;
};

/**
 * Валидация номера телефона.
 * phone - Номер телефона для проверки.
 */
export const validatePhone = (phone: string): string | undefined => {
    if (!phone) {
        return "Поле телефон не может быть пустым";
    }
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        return "Введите корректный номер телефона";
    }
    return undefined;
};

/**
 * Валидация кода для телефона (4 цифры).
 * code - Код для проверки.
 */
export const validatePhoneCode = (code: string): string | undefined => {
    if (!code) {
        return "Поле код не может быть пустым";
    }
    if (code.length !== 4) {
        return "Введите корректный код из 4 цифр";
    }
    if (!/^\d+$/.test(code)) {
        return "Код должен содержать только цифры";
    }
    return undefined;
};
