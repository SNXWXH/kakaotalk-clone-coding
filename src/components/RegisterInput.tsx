import { RegisterInputType } from '../types';

export default function RegisterInput({
  label,
  type,
  name,
  value,
  onChange,
  maxLength,
  placeholder,
  errors,
}: RegisterInputType) {
  return (
    <>
      <div className='flex w-5/6 justify-between items-start'>
        <label className='font-medium w-1/4 text-sm text-center pr-2 pt-2 '>
          {label}
        </label>
        <div className='w-2/3'>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            className='w-full h-[45px] p-2 border border-zinc-200 rounded focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
          />
          <p className='text-red-500 text-xs mt-1 min-h-[18px]'>
            {errors || '\u00A0'}
          </p>
        </div>
      </div>
    </>
  );
}
