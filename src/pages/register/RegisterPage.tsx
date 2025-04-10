// * input 컴포넌트화 하기

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm: '',
    name: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirm: '',
    phone: '',
  });

  const navigate = useNavigate();

  //* 리팩토링 필요
  const validateField = (name: string, value: string) => {
    let message = '';

    if (name === 'email') {
      if (!value) message = '이메일을 입력해주세요.';
      else if (!/^\S+@\S+\.\S+$/.test(value)) {
        message = '이메일 형식이 아닙니다.';
      }
    } else if (name === 'password') {
      if (
        value.length < 8 ||
        !/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(value)
      ) {
        message = '8자 이상, 특수문자가 포함되어야 합니다.';
      }
    } else if (name === 'confirm') {
      if (value !== form.password) {
        message = '비밀번호가 일치하지 않습니다.';
      }
    } else if (name === 'phone') {
      if (value.length < 11) {
        message = '휴대폰 번호 11자리를 모두 입력해주세요.';
      }
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let newValue = value;
    if (name === 'phone') {
      newValue = value.replace(/[^0-9]/g, '');
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
    validateField(name, newValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Object.entries(form).forEach(([name, value]) => {
      validateField(name, value);
    });

    const hasError = Object.values(errors).some((msg) => msg !== '');
    if (hasError) return;

    console.log(form);
    alert('회원가입 성공');
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center w-[392px] h-[642px] bg-[#FEFEFE] text-sm rounded-xl'>
      <div className='flex items-center justify-between mt-24 mb-8 w-3/7'>
        <img src={'/kakaoLogo.png'} className='w-12 h-11' />
        <p className='text-3xl font-bold'>회원가입</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-full items-center'
      >
        <div className='flex w-5/6 justify-between items-start'>
          <label className='font-medium w-1/4 text-sm text-center pr-2 pt-1'>
            이메일 <br />
            (E-mail)
          </label>
          <div className='w-2/3'>
            <input
              type='text'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='아이디를 입력하세요(이메일 형식)'
              className='w-full h-[45px] p-2 border border-zinc-200 rounded focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
            />
            <p className='text-red-500 text-xs mt-1 min-h-[18px]'>
              {errors.email || '\u00A0'}
            </p>
          </div>
        </div>

        <div className='flex w-5/6 justify-between items-start'>
          <label className='font-medium w-1/4 text-sm text-center pr-2 pt-2'>
            비밀번호
          </label>
          <div className='w-2/3'>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder='비밀번호 8자 이상, 특수문자 포함'
              className='w-full h-[45px] p-2 border border-zinc-200 rounded focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
            />
            <p className='text-red-500 text-xs mt-1 min-h-[18px] whitespace-pre-line'>
              {errors.password || '\u00A0'}
            </p>
          </div>
        </div>

        <div className='flex w-5/6 justify-between items-start'>
          <label className='font-medium w-1/4 text-sm text-center pr-2 pt-2'>
            비밀번호 <br />
          </label>
          <div className='w-2/3'>
            <input
              type='password'
              name='confirm'
              value={form.confirm}
              onChange={handleChange}
              placeholder='비밀번호를 입력하세요'
              className='w-full h-[45px] p-2 border border-zinc-200 rounded focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
            />
            <p className='text-red-500 text-xs mt-1 min-h-[18px]'>
              {errors.confirm || '\u00A0'}
            </p>
          </div>
        </div>

        <div className='flex w-5/6 justify-between items-center mb-3'>
          <label className='font-medium w-1/4 text-center'>이름</label>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='이름을 입력하세요'
            className='w-2/3 h-[45px] p-2 border border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
          />
        </div>

        <div className='flex w-5/6 justify-between items-start mt-2'>
          <label className='font-medium w-1/4 text-center pr-2 pt-2'>
            휴대폰 번호
          </label>
          <div className='w-2/3'>
            <input
              type='text'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              maxLength={11}
              placeholder='- 없이 번호를 입력하세요'
              className='w-full h-[45px] p-2 border border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
            />
            <p className='text-red-500 text-xs mt-1 min-h-[18px]'>
              {errors.phone || '\u00A0'}
            </p>
          </div>
        </div>

        <button
          type='submit'
          className={`w-5/6 h-[45px] my-3 font-bold rounded-sm ${
            Object.values(errors).every((e) => e === '')
              ? 'bg-[#F9E000] text-[#3C2F2B]'
              : 'bg-[#F5F5F5]'
          }`}
        >
          회원가입 완료
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
