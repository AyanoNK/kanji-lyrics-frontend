'use client';
import { queryClient } from '@/providers/reactQuery';
import { yupResolver } from '@hookform/resolvers/yup';
import { QueryClientProvider } from '@tanstack/react-query';
import { Button, TextInput, Tooltip } from 'flowbite-react';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';

type FormValues = {
  email: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function Home() {
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });

  // data is reacthookform data
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-24">
      <QueryClientProvider client={queryClient}>
        <Tooltip
          content="きもん"
          style="light"
          animation="duration-150"
          className="font-sans text-xl"
        >
          <div className="relative flex flex-col place-items-center gap-12 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-red-200 after:blur-2xl after:content-[''] before:lg:h-[360px]">
            <h1 className="font-sans text-9xl">鬼門</h1>
            <h2 className="text-3xl">Practice Kanji through Japanese music!</h2>
          </div>
        </Tooltip>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl">Join the waitlist</h2>
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              id="email"
              placeholder="your@email.com"
              required
              type="email"
              {...register('email')}
            />
            <Button type="submit" color="gray">
              Submit
            </Button>
          </form>
        </div>
      </QueryClientProvider>
    </main>
  );
}
