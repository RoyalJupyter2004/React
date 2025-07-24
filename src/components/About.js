import React from "react";
/*import User from "./User";*/
import Person from "./person";
class About extends React.Component {
  render() {
    return (
      <main className="max-w-5xl mx-auto p-8 bg-orange-50 rounded-3xl shadow-lg mt-12">
        <h1 className="text-5xl font-extrabold text-orange-600 mb-8 text-center underline decoration-wavy">About Us</h1>

        <p className="text-xl text-gray-800 mb-6 leading-relaxed text-center">
          Welcome to <span className="font-bold text-orange-500">BBQ! 🍽️</span><br />
          We're passionate about serving delicious food from top restaurants near you.
          Whether you're craving spicy biryani, cheesy pizza, or something sweet, we deliver happiness to your door.
        </p>

        <p className="text-lg text-gray-700 mb-10 text-center italic">
          Our mission is to make food ordering simple, fast, and joyful — every time.
        </p>

        <div className="flex justify-center">
          <Person/>
        </div>
      </main>
    );
  }
}

export default About;
