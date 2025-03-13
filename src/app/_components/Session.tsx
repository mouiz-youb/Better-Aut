// app/_components/Session.client.tsx
"use client";

import React from 'react';

interface SessionProps {
  session: any; // Replace `any` with your session type
}

export default function Session({ session }: SessionProps) {
  return (
    <div>
      {!session ? (
        <p>The user is not authenticated</p>
      ) : (
        <p className='flex justify-center items-center text-3xl text-blue-500'>Welcome Mr :{session.user.name}</p>
      )}
    </div>
  );
}