'use server';

import Prisma from '@/libs/prisma';
import { revalidatePath } from 'next/cache';

export async function CreateHero(formData: FormData) {
  const supImage = formData.get('supImage') as string;
  const supName = formData.get('supName') as string;

  const hero = await Prisma.hero.create({
    data: {
      supName,
      supImage,
    },
  });

  if (hero) {
    revalidatePath('/');
    return { success: true };
  }
}
