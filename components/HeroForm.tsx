'use client';

import { CreateHero } from '@/actions/CreateHero';
import { s3UploadAction } from '@/actions/S3BucketAction';
import Image from 'next/image';
import { ChangeEventHandler, useState } from 'react';
import toast from 'react-hot-toast';
import { BiSolidImageAdd } from 'react-icons/bi';
import { MdLibraryAddCheck } from 'react-icons/md';
import { CgSpinner } from 'react-icons/cg';

export default function HeroForm() {
  const [isImageAvalible, setIsImageAvalible] = useState(false);
  const [isImagePath, setIsImagePath] = useState('');
  const [isSupName, setIsSupName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resetStates = () => {
    setIsImageAvalible(false);
    setIsImagePath('');
    setIsSupName('');
    setIsSubmitting(false);
  };

  const uploadImage: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const data = new FormData();
    data.set('file', e.target.files![0]);
    const result = await s3UploadAction(data);

    if (result.success) {
      setIsImagePath(result.imagePath);
      setIsImageAvalible(true);
    }
  };

  const submit = async (formData: FormData) => {
    setIsSubmitting(true);
    formData.set('supImage', isImagePath);
    const supName = formData.get('supName') as string;

    const result = await CreateHero(formData);

    if (result?.success) {
      setTimeout(() => {
        toast.success(`${supName} اضافه شد`);
        resetStates();
      }, 1500);
    }
  };

  return (
    <form action={submit} className='flex flex-col gap-y-3 sticky top-6'>
      <input
        type='text'
        name='supName'
        placeholder='نام سوپرهیرو'
        value={isSupName}
        onChange={(e) => setIsSupName(e.target.value)}
        className='border-2 border-cyan-950 rounded p-2'
      />

      {isImageAvalible ? (
        <div className='flex justify-center items-center w-full h-14 rounded relative overflow-hidden'>
          <Image
            src={isImagePath}
            alt='superhero-image'
            fill={true}
            style={{ objectFit: 'cover' }}
          />
          <MdLibraryAddCheck className='text-2xl text-green-400 shadow-xl z-50' />
        </div>
      ) : (
        <label className='flex justify-center items-center border-2 py-12 rounded border-dashed cursor-pointer hover:opacity-60'>
          <input type='file' hidden onChange={uploadImage} />
          <BiSolidImageAdd className='text-3xl' />
        </label>
      )}

      <button
        disabled={!isImageAvalible}
        type='submit'
        className='bg-blue-500 text-white rounded p-2 disabled:bg-gray-300 disabled:cursor-not-allowed flex justify-center items-center gap-3'
      >
        ثبت
        {isSubmitting && <CgSpinner className='animate-spin' />}
      </button>
      {!isImageAvalible && (
        <p className='text-gray-400'>
          تا زمانی که عکس سوپرهیرو را آپلود نکنید نمی‌توانید ثبت را انجام دهید
        </p>
      )}
    </form>
  );
}

// const [isUploading, setIsUploading] = useState(false);
// const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
//   setIsUploading(true);
//   const data = new FormData();
//   data.append('file', e.target.files![0]);
//   const result = await s3UploadAction(data);
//   if (result.success) {
//     setIsUploading(false);
//   }
// };

// <label
//   className={`rounded text-white p-2 text-center w-40 ${
//     isUploading
//       ? 'bg-gray-500 cursor-not-allowed'
//       : 'bg-blue-500 cursor-pointer'
//   }`}
// >
//   <input
//     disabled={isUploading}
//     type='file'
//     onChange={handleFileChange}
//     hidden
//   />
//   {isUploading ? (
//     <p className='flex justify-center items-center gap-x-2'>
//       آپلود
//       <CgSpinner className='animate-spin' />
//     </p>
//   ) : (
//     'آپلود'
//   )}
// </label>;
