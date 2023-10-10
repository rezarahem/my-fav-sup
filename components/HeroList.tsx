import Prisma from '@/libs/prisma';
import Image from 'next/image';

export default async function HeroList() {
  const heros = await Prisma.hero.findMany();

  return (
    <div className='grid grid-cols-1 gap-6 gap-y-12 md:gap-x-6 md:gap-y-12 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
      {heros.map((hero) => (
        <div key={hero.id}>
          <h2 className='pb-4 text-2xl font-medium'>{hero.supName}</h2>
          <div className=' w-[13rem] h-[18rem] rounded relative overflow-hidden border-2 border-cyan-950'>
            <Image
              alt={hero.supName}
              src={hero.supImage}
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
