// * input 컴포넌트화 하기

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/user';
import Modal from '../../components/Modal';

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalMessage('');
  };

  //* 리팩토링 필요
  const validateField = (name: string, value: string) => {
    let message = '';

    if (name === 'email') {
      if (!value) message = '이메일을 입력해주세요.';
      else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      ) {
        message = '이메일 형식이 아닙니다.';
      }
    } else if (name === 'password') {
      if (
        value.length < 8 ||
        !/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(value)
      )
        message = '8자 이상, 특수문자가 포함되어야 합니다.';
      else if (form.email) {
        const id = form.email.split('@')[0];

        if (id.length >= 4) {
          const lowerValue = value.toLowerCase();
          const lowerId = id.toLowerCase();

          for (let i = 0; i <= lowerId.length - 4; i++) {
            const part = lowerId.slice(i, i + 4);
            if (lowerValue.includes(part)) {
              message = '비밀번호에 아이디 일부가 포함되어 있습니다.';
              break;
            }
          }
        }
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Object.entries(form).forEach(([name, value]) => {
      validateField(name, value);
    });

    const hasError = Object.values(errors).some((msg) => msg !== '');
    const hasEmpty = Object.values(form).some((value) => value === '');

    if (hasError || hasEmpty) return;

    setIsLoading(true);

    try {
      const res = await register({
        email: form.email,
        password: form.password,
        name: form.name,
        phoneNumber: form.phone,
      });

      if (res.status === 200) {
        setModalMessage('회원가입 성공');
        setIsModalOpen(true);
        setTimeout(() => navigate('/'), 2000);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400)
          setModalMessage(err.response?.data.message);
        else
          setModalMessage(
            '회원가입 중 오류가 발생하였습니다. 다시 시도해주세요'
          );

        setIsModalOpen(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    Object.values(errors).every((e) => e === '') &&
    Object.values(form).every((v) => v !== '');

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
            아이디 <br />
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
            확인
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
              type='tel'
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
          disabled={!isFormValid || isLoading}
          className={`w-5/6 h-[45px] my-3 font-bold rounded-sm transition-colors ${
            isFormValid && !isLoading
              ? 'bg-[#F9E000] text-[#3C2F2B] cursor-pointer'
              : 'bg-[#F5F5F5] text-gray-400 cursor-not-allowed'
          }`}
        >
          {isLoading ? '로딩 중...' : '회원가입 완료'}
        </button>
      </form>

      <Modal isOpen={isModalOpen}>
        <p className='text-center text-base font-medium text-gray-800 mb-6'>
          {modalMessage}
        </p>
        <button
          onClick={handleModalClose}
          className='block mx-auto w-24 py-2 rounded-md bg-[#F9E000] text-[#3C2F2B] text-sm font-semibold hover:bg-[#e6d500] transition'
        >
          닫기
        </button>
      </Modal>
    </div>
  );
}

export default RegisterPage;
