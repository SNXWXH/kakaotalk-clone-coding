const emailValidation = (email: string) => {
  if (!/^\S+@\S+\.\S+$/.test(email)) return '이메일 형식이 아닙니다.';
  return '';
};

const pwValidation = (password: string) => {
  if (
    password.length < 8 ||
    !/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(password)
  )
    return '8자 이상, 특수문자가 포함되어야 합니다.';
  return '';
};

const pwDuplicateValidation = (email: string, password: string) => {
  const id = email.split('@')[0];

  if (id.length >= 4) {
    const lowerValue = password.toLowerCase();
    const lowerId = id.toLowerCase();

    for (let i = 0; i <= lowerId.length - 4; i++) {
      const part = lowerId.slice(i, i + 4);
      if (lowerValue.includes(part)) {
        return '비밀번호에 아이디 일부가 포함되어 있습니다.';
      }
    }
  }

  return '';
};

const phoneValidation = (phone: string) => {
  if (phone.length < 11) return '휴대폰 번호 11자리를 모두 입력해주세요.';
  return '';
};

export {
  emailValidation,
  pwValidation,
  pwDuplicateValidation,
  phoneValidation,
};
