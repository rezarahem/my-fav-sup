import HeroForm from '@/components/HeroForm';
import HeroList from '@/components/HeroList';

export default function HomePage() {
  return (
    <main className='w-full pb-12 md:w-11/12 lg:w-10/12 sm:flex mx-auto'>
      <div className='w-full sm:w-2/3 p-6'>
        <HeroList />
      </div>
      <div className='hidden sm:block w-1/3 p-6'>
        <HeroForm />
      </div>
    </main>
  );
}
