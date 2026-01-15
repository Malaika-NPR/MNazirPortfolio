import { motion } from 'motion/react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-red-100">
      <div className="pt-32 pb-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h1 className="text-8xl text-red-600 mb-8">CONTACT TEST</h1>
          <p className="text-2xl text-red-800">If you can see this red page, the contact component is working!</p>
          <div className="mt-8 p-4 bg-white rounded border">
            <p>Email: malaikanazir840@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}